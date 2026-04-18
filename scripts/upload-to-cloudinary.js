/**
 * Upload images from Project_References/Photos to Cloudinary
 * Run with: npm run upload-images
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import fetch from 'node-fetch';
import FormData from 'form-data';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env.local manually (no dotenv dependency needed)
const envPath = path.join(__dirname, '../.env.local');
if (fs.existsSync(envPath)) {
  const envVars = fs.readFileSync(envPath, 'utf8').split('\n');
  for (const line of envVars) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const [key, ...rest] = trimmed.split('=');
    if (key) process.env[key.trim()] = rest.join('=').trim();
  }
}

const CLOUD_NAME = process.env.VITE_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = process.env.CLOUDINARY_UPLOAD_PRESET;
const PHOTO_DIR = path.join(__dirname, '../Project_References/Photos');
const OUTPUT_FILE = path.join(__dirname, '../src/data/uploaded-images.json');

async function uploadImage(filePath, filename) {
  try {
    console.log(`⏳ Uploading ${filename}...`);

    const form = new FormData();
    form.append('file', fs.createReadStream(filePath));
    form.append('upload_preset', UPLOAD_PRESET);
    form.append('folder', 'sol-kin-furniture');
    form.append('public_id', path.parse(filename).name);

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      {
        method: 'POST',
        body: form,
      }
    );

    if (!response.ok) {
      const errorBody = await response.json().catch(() => ({}));
      throw new Error(`Upload failed: ${response.statusText} — ${JSON.stringify(errorBody)}`);
    }

    const data = await response.json();

    console.log(`✅ Uploaded: ${filename}`);
    return {
      filename,
      publicId: data.public_id,
      url: data.secure_url,
      width: data.width,
      height: data.height,
      size: data.bytes,
      uploadedAt: new Date().toISOString(),
    };
  } catch (error) {
    console.error(`❌ Error uploading ${filename}:`, error.message);
    return null;
  }
}

async function uploadAllImages() {
  if (!CLOUD_NAME || !UPLOAD_PRESET) {
    console.error(
      '❌ Missing VITE_CLOUDINARY_CLOUD_NAME or CLOUDINARY_UPLOAD_PRESET environment variables'
    );
    process.exit(1);
  }

  try {
    const files = fs
      .readdirSync(PHOTO_DIR)
      .filter((f) => f.toLowerCase().endsWith('.jpg'))
      .sort();

    console.log(`\n🚀 Starting upload of ${files.length} images to Cloudinary...\n`);

    const uploadedImages = [];

    for (let i = 0; i < files.length; i++) {
      const filename = files[i];
      const filePath = path.join(PHOTO_DIR, filename);

      const result = await uploadImage(filePath, filename);

      if (result) {
        uploadedImages.push(result);
      }

      if (i < files.length - 1) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    }

    // Create directory if it doesn't exist
    const dataDir = path.dirname(OUTPUT_FILE);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(uploadedImages, null, 2));

    console.log(`\n✨ Upload complete!`);
    console.log(`✅ ${uploadedImages.length} images uploaded`);
    console.log(`📄 Image metadata saved to: ${OUTPUT_FILE}`);
  } catch (error) {
    console.error('❌ Batch upload error:', error);
    process.exit(1);
  }
}

uploadAllImages();