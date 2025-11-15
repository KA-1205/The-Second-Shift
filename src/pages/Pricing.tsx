import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Sparkles, Crown, Zap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Pricing = () => {
  const navigate = useNavigate();

  const plans = [
    {
      name: "Free",
      icon: <Sparkles className="w-6 h-6" />,
      price: "₹0",
      period: "forever",
      description: "Perfect to get started",
      features: [
        "Basic skill analysis",
        "1 resume rewrite per month",
        "View job postings",
        "Access to resources library",
        "Community forum access"
      ],
      buttonText: "Get Started Free",
      buttonVariant: "outline" as const,
      popular: false
    },
    {
      name: "Pro",
      icon: <Zap className="w-6 h-6" />,
      price: "₹299",
      period: "per month",
      description: "For serious returners",
      features: [
        "Everything in Free, plus:",
        "Unlimited AI skill analysis",
        "Unlimited resume rewrites",
        "Priority mentorship matching",
        "Advanced resume templates",
        "Course recommendations",
        "Job application tracking",
        "Email support"
      ],
      buttonText: "Start Pro Trial",
      buttonVariant: "default" as const,
      popular: true
    },
    {
      name: "Premium",
      icon: <Crown className="w-6 h-6" />,
      price: "₹599",
      period: "per month",
      description: "Maximum support & results",
      features: [
        "Everything in Pro, plus:",
        "1-on-1 career coaching (2 sessions/month)",
        "Exclusive job postings",
        "Certification programs",
        "Interview preparation",
        "Salary negotiation support",
        "LinkedIn profile optimization",
        "Priority support",
        "Networking events access"
      ],
      buttonText: "Go Premium",
      buttonVariant: "secondary" as const,
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      
      <div className="container mx-auto px-4 sm:px-6 py-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Choose Your Return Journey Plan
          </h1>
          <p className="text-xl text-muted-foreground">
            Flexible plans designed to support women at every stage of their career comeback
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative shadow-soft-lg hover:shadow-soft-xl transition-all ${
                plan.popular 
                  ? 'border-2 border-primary scale-105' 
                  : 'border-border'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-primary text-purple-900 px-4 py-1 rounded-full text-sm font-semibold shadow-md">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <div className="flex justify-center mb-4">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                    plan.popular 
                      ? 'bg-gradient-primary text-purple-900' 
                      : 'bg-accent text-accent-foreground'
                  }`}>
                    {plan.icon}
                  </div>
                </div>
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-sm mb-4">{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">/{plan.period}</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className={`text-sm ${
                        feature.includes(':') ? 'font-semibold' : ''
                      }`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.buttonVariant}
                  className="w-full"
                  size="lg"
                  onClick={() => navigate('/login')}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I switch plans later?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, 
                  and we'll prorate any charges.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Is there a free trial?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The Free plan is available forever with no credit card required. Pro and Premium plans 
                  offer a 7-day money-back guarantee if you're not satisfied.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What payment methods do you accept?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We accept all major credit/debit cards, UPI, net banking, and digital wallets. 
                  All payments are secure and encrypted.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Pricing;
