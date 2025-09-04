import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Send, CheckCircle, XCircle, Loader2 } from 'lucide-react';

const FitnessJourneyForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    phoneNumber: '',
    fitnessGoal: '',
    preferredContactMethod: 'email',
    messageBox: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);

  const serviceID = 'service_yydjwxq';
  const templateID = 'template_3ushebo';
  const publicKey = 'ZUt0if_gkFhoEpSwC';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      'Full Name': formData.fullName,
      'Email Address': formData.emailAddress,
      'Phone Number': formData.phoneNumber,
      'Fitness Goal': formData.fitnessGoal,
      'Preferred Contact Method': formData.preferredContactMethod,
      'Message Box': formData.messageBox,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        setSubmitSuccess(true);
        setFormData({
          fullName: '',
          emailAddress: '',
          phoneNumber: '',
          fitnessGoal: '',
          preferredContactMethod: 'email',
          messageBox: '',
        });
      })
      .catch(() => {
        setSubmitSuccess(false);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-gradient-to-br from-card via-card to-primary/5 rounded-2xl p-8 md:p-10 shadow-2xl border border-primary/10 hover-lift">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name and Email Row */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-sm font-semibold text-foreground flex items-center gap-1">
                Full Name <span className="text-red-500">*</span>
              </Label>
              <Input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="h-12 bg-background/50 border-primary/20 focus:border-primary transition-all duration-300"
                placeholder="Your full name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="emailAddress" className="text-sm font-semibold text-foreground flex items-center gap-1">
                Email Address <span className="text-red-500">*</span>
              </Label>
              <Input
                type="email"
                id="emailAddress"
                name="emailAddress"
                value={formData.emailAddress}
                onChange={handleChange}
                required
                className="h-12 bg-background/50 border-primary/20 focus:border-primary transition-all duration-300"
                placeholder="you@example.com"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div className="space-y-2">
            <Label htmlFor="phoneNumber" className="text-sm font-semibold text-foreground">
              Phone Number <span className="text-muted-foreground">(optional)</span>
            </Label>
            <Input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="h-12 bg-background/50 border-primary/20 focus:border-primary transition-all duration-300"
              placeholder="+1 555 123 4567"
            />
          </div>

          {/* Fitness Goal and Contact Method Row */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="text-sm font-semibold text-foreground">
                Fitness Goal <span className="text-red-500">*</span>
              </Label>
              <Select value={formData.fitnessGoal} onValueChange={(value) => handleSelectChange('fitnessGoal', value)} required>
                <SelectTrigger className="h-12 bg-background/50 border-primary/20 focus:border-primary transition-all duration-300">
                  <SelectValue placeholder="Select your fitness goal" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Weight loss">Weight loss</SelectItem>
                  <SelectItem value="Muscle gain">Muscle gain</SelectItem>
                  <SelectItem value="General fitness">General fitness</SelectItem>
                  <SelectItem value="Sports performance">Sports performance</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-semibold text-foreground">
                Preferred Contact Method <span className="text-red-500">*</span>
              </Label>
              <Select value={formData.preferredContactMethod} onValueChange={(value) => handleSelectChange('preferredContactMethod', value)} required>
                <SelectTrigger className="h-12 bg-background/50 border-primary/20 focus:border-primary transition-all duration-300">
                  <SelectValue placeholder="Select contact method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="call">Call</SelectItem>
                  <SelectItem value="message app">Message App</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="messageBox" className="text-sm font-semibold text-foreground">
              Message <span className="text-muted-foreground">(optional)</span>
            </Label>
            <Textarea
              id="messageBox"
              name="messageBox"
              value={formData.messageBox}
              onChange={handleChange}
              rows={4}
              className="bg-background/50 border-primary/20 focus:border-primary transition-all duration-300 resize-none"
              placeholder="Tell us about your fitness goals and any questions you have..."
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-14 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] disabled:hover:scale-100"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Start Your Fitness Journey
                </>
              )}
            </Button>
          </div>

          {/* Success/Error Messages */}
          {submitSuccess === true && (
            <div className="flex items-center justify-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">Message sent successfully! We'll get back to you soon.</span>
            </div>
          )}
          {submitSuccess === false && (
            <div className="flex items-center justify-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
              <XCircle className="w-5 h-5" />
              <span className="font-medium">Failed to send message. Please try again.</span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default FitnessJourneyForm;
