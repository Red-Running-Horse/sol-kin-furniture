
import React, { useState } from 'react';
import { Input } from '@/components/ui/input.jsx';
import { Textarea } from '@/components/ui/textarea.jsx';
import { Label } from '@/components/ui/label.jsx';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx';
import { CheckCircle2 } from 'lucide-react';
import Button from '@/components/Button.jsx';
import { toast } from 'sonner';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    woodPreference: ''
  });
  
  const [errors, setErrors] = useState({});
  const [validFields, setValidFields] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const woodOptions = ['Walnut', 'Oak', 'Mahogany', 'Cherry', 'Ash'];

  const validateField = (field, value) => {
    let error = '';
    
    switch (field) {
      case 'name':
        if (!value.trim()) {
          error = 'Name is required';
        }
        break;
      case 'email':
        if (!value.trim()) {
          error = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          error = 'Please enter a valid email address';
        }
        break;
      case 'phone':
        if (value && !/^[\d\s\-\+\(\)]+$/.test(value)) {
          error = 'Please enter a valid phone number';
        }
        break;
      case 'message':
        if (!value.trim()) {
          error = 'Message is required';
        }
        break;
      default:
        break;
    }
    
    return error;
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    const error = validateField(field, value);
    
    setErrors(prev => ({ ...prev, [field]: error }));
    setValidFields(prev => ({ 
      ...prev, 
      [field]: !error && value.trim() !== '' 
    }));
  };

  const isFormValid = () => {
    const requiredFields = ['name', 'email', 'message'];
    return requiredFields.every(field => 
      formData[field].trim() !== '' && !errors[field]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = {};
    Object.keys(formData).forEach(field => {
      const error = validateField(field, formData[field]);
      if (error) newErrors[field] = error;
    });
    
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      
      setTimeout(() => {
        const submission = {
          ...formData,
          timestamp: new Date().toISOString()
        };
        
        const existingSubmissions = JSON.parse(localStorage.getItem('contactFormSubmissions') || '[]');
        existingSubmissions.push(submission);
        localStorage.setItem('contactFormSubmissions', JSON.stringify(existingSubmissions));
        
        toast.success("Thank you! We'll be in touch soon.");
        
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          woodPreference: ''
        });
        setValidFields({});
        setIsSubmitting(false);
      }, 1000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 max-w-2xl mx-auto">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-[hsl(var(--foreground))] font-medium">
          Name
        </Label>
        <div className="relative">
          <Input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className="bg-[hsl(var(--input))] text-[hsl(var(--input-foreground))] border-2 border-[hsl(var(--border))] focus:border-[hsl(var(--secondary))] focus:ring-2 focus:ring-[hsl(var(--ring))]/20 pr-10"
            placeholder="Your name"
          />
          {validFields.name && (
            <CheckCircle2 className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-600" />
          )}
        </div>
        {errors.name && (
          <p className="text-sm text-destructive">{errors.name}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-[hsl(var(--foreground))] font-medium">
          Email
        </Label>
        <div className="relative">
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className="bg-[hsl(var(--input))] text-[hsl(var(--input-foreground))] border-2 border-[hsl(var(--border))] focus:border-[hsl(var(--secondary))] focus:ring-2 focus:ring-[hsl(var(--ring))]/20 pr-10"
            placeholder="your.email@example.com"
          />
          {validFields.email && (
            <CheckCircle2 className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-600" />
          )}
        </div>
        {errors.email && (
          <p className="text-sm text-destructive">{errors.email}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="text-[hsl(var(--foreground))] font-medium">
          Phone (optional)
        </Label>
        <div className="relative">
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            className="bg-[hsl(var(--input))] text-[hsl(var(--input-foreground))] border-2 border-[hsl(var(--border))] focus:border-[hsl(var(--secondary))] focus:ring-2 focus:ring-[hsl(var(--ring))]/20 pr-10"
            placeholder="(555) 123-4567"
          />
          {validFields.phone && (
            <CheckCircle2 className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-600" />
          )}
        </div>
        {errors.phone && (
          <p className="text-sm text-destructive">{errors.phone}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="woodPreference" className="text-[hsl(var(--foreground))] font-medium">
          Wood preference
        </Label>
        <Select value={formData.woodPreference} onValueChange={(value) => handleChange('woodPreference', value)}>
          <SelectTrigger className="bg-[hsl(var(--input))] text-[hsl(var(--input-foreground))] border-2 border-[hsl(var(--border))] focus:border-[hsl(var(--secondary))] focus:ring-2 focus:ring-[hsl(var(--ring))]/20">
            <SelectValue placeholder="Select a wood type" />
          </SelectTrigger>
          <SelectContent>
            {woodOptions.map((wood) => (
              <SelectItem key={wood} value={wood}>
                {wood}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-[hsl(var(--foreground))] font-medium">
          Message
        </Label>
        <div className="relative">
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) => handleChange('message', e.target.value)}
            className="bg-[hsl(var(--input))] text-[hsl(var(--input-foreground))] border-2 border-[hsl(var(--border))] focus:border-[hsl(var(--secondary))] focus:ring-2 focus:ring-[hsl(var(--ring))]/20 min-h-[150px]"
            placeholder="Tell us about your project..."
          />
          {validFields.message && (
            <CheckCircle2 className="absolute right-3 top-3 w-5 h-5 text-green-600" />
          )}
        </div>
        {errors.message && (
          <p className="text-sm text-destructive">{errors.message}</p>
        )}
      </div>

      <Button
        type="submit"
        variant="primary"
        className="w-full touch-target"
        disabled={isSubmitting || !isFormValid()}
      >
        {isSubmitting ? 'Sending...' : 'Send message'}
      </Button>
    </form>
  );
};

export default ContactForm;
