import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MessageSquare, Linkedin } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    toast.success('Message sent! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 bg-gradient-hero">
        <div className="container mx-auto text-center space-y-6 max-w-4xl">
          <h1 className="text-5xl sm:text-6xl font-bold animate-fade-in">
            Let's{" "}
            <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
              Connect
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Have questions? Want to partner with us? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="card-soft bg-gradient-card text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">Email Us</h3>
              <p className="text-sm text-foreground/80 mb-3">
                For general inquiries and support
              </p>
              <a
                href="mailto:hello@thesecondshift.test"
                className="text-primary hover:underline text-sm font-medium"
              >
                hello@thesecondshift.test
              </a>
            </div>

            <div className="card-soft bg-gradient-card text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">Partnerships</h3>
              <p className="text-sm text-foreground/80 mb-3">
                Companies & course providers
              </p>
              <a
                href="mailto:partners@thesecondshift.test"
                className="text-primary hover:underline text-sm font-medium"
              >
                partners@thesecondshift.test
              </a>
            </div>

            <div className="card-soft bg-gradient-card text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                <Linkedin className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">Connect</h3>
              <p className="text-sm text-foreground/80 mb-3">
                Follow our journey on LinkedIn
              </p>
              <a
                href="#"
                className="text-primary hover:underline text-sm font-medium"
              >
                @TheSecondShift
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <div className="card-soft bg-card">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  size="lg"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Note */}
      <section className="py-16 px-4 sm:px-6 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto text-center space-y-4 max-w-3xl">
          <h2 className="text-3xl font-bold">Looking for Quick Answers?</h2>
          <p className="text-lg text-muted-foreground">
            Check out our <span className="text-primary font-semibold">Features</span> and{" "}
            <span className="text-primary font-semibold">About</span> pages for common questions
            about how The Second Shift works and our mission.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
