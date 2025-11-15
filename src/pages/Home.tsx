import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, TrendingUp, Users, Target, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import heroImage from '@/assets/hero-image.jpg';
import skillsIllustration from '@/assets/skills-illustration.jpg';
import mentorshipIllustration from '@/assets/mentorship-illustration.jpg';

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "AI-Powered Skill Analysis",
      description: "Get personalized insights on your strengths and skill gaps with our smart AI coach"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Resume Transformation",
      description: "Convert career breaks into compelling career stories that employers love"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Mentorship",
      description: "Connect with successful women who've navigated the return journey"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Flexible Job Matches",
      description: "Discover return-friendly roles from companies that value diverse talent"
    }
  ];

  const stats = [
    { number: "12M+", label: "Women drop out yearly" },
    { number: "70%", label: "Want to return" },
    { number: "1/3", label: "Current workforce participation" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 bg-gradient-hero overflow-hidden">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
                <Sparkles className="w-4 h-4 text-primary animate-pulse-glow" />
                <span className="text-sm font-medium text-primary">AI-Powered Career Coach</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                Return stronger.
                <br />
                <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
                  Re-skill faster.
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl">
                Your smart companion for returning to work after a career break. 
                We help women transform gaps into growth stories.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={() => navigate('/login')}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full shadow-glow hover:scale-105 transition-all"
                >
                  Try Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  onClick={() => navigate('/pricing')}
                  size="lg"
                  variant="outline"
                  className="px-8 py-6 text-lg rounded-full"
                >
                  View Plans
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="space-y-1">
                    <div className="text-3xl font-bold text-primary">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative animate-float">
              <div className="rounded-3xl overflow-hidden shadow-soft-lg">
                <img 
                  src={heroImage} 
                  alt="Professional woman working confidently"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-primary-glow/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-bold">The Challenge We're Solving</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Many women struggle to rejoin the workforce after career breaks due to{" "}
              <span className="text-primary font-semibold">outdated skills</span>,{" "}
              <span className="text-primary font-semibold">lack of guidance</span>,{" "}
              <span className="text-primary font-semibold">limited flexible jobs</span>, and{" "}
              <span className="text-primary font-semibold">minimal mentorship</span> — 
              creating a major barrier to their professional comeback.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="card-soft bg-gradient-card text-center">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="font-semibold text-lg mb-2">Career Breaks</h3>
              <p className="text-muted-foreground text-sm">
                Women exit workforce post-maternity and face re-entry barriers
              </p>
            </div>
            <div className="card-soft bg-gradient-card text-center">
              <div className="text-5xl mb-4">📉</div>
              <h3 className="font-semibold text-lg mb-2">Skill Gaps</h3>
              <p className="text-muted-foreground text-sm">
                Rapidly changing job skills and outdated experience reduce employability
              </p>
            </div>
            <div className="card-soft bg-gradient-card text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="font-semibold text-lg mb-2">Limited Options</h3>
              <p className="text-muted-foreground text-sm">
                Lack of flexible work and mentorship creates low confidence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">Everything You Need to Return</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              AI-powered tools and human support to make your comeback successful
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="card-soft bg-card group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Features */}
      <section className="py-20 px-4 sm:px-6">
        <div className="container mx-auto space-y-24">
          {/* Skill Analysis */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src={skillsIllustration}
                alt="Skill analysis visualization"
                className="rounded-3xl shadow-soft-lg w-full"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-4xl font-bold">Smart Skill Gap Analysis</h2>
              <p className="text-lg text-muted-foreground">
                Our AI analyzes your experience and identifies exactly what you need to learn
                to be market-ready again. No guesswork, just clear actionable steps.
              </p>
              <ul className="space-y-3">
                {[
                  "Identify your existing strengths with confidence scores",
                  "Discover critical gaps in today's job market",
                  "Get personalized learning recommendations",
                  "Track progress toward return-readiness"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mentorship */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Expert Mentorship & Community</h2>
              <p className="text-lg text-muted-foreground">
                Connect with women who've successfully returned to work. Get guidance,
                build confidence, and join a supportive community of professionals.
              </p>
              <ul className="space-y-3">
                {[
                  "Match with mentors in your target field",
                  "Join peer support circles for motivation",
                  "Access exclusive returnship programs",
                  "Build your professional network again"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img 
                src={mentorshipIllustration}
                alt="Women supporting each other"
                className="rounded-3xl shadow-soft-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-primary">
        <div className="container mx-auto text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-90">
            Ready to Start Your Return Journey?
          </h2>
          <p className="text-xl text-purple-800 max-w-2xl mx-auto"><i>
            Try our demo and see how AI can help you become return-ready in weeks, not months.
          </i></p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              onClick={() => navigate('/login')}
              size="lg"
              variant="secondary"
              className="px-8 py-6 text-lg rounded-full hover:scale-105 transition-all"
            >
              Try Demo Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              onClick={() => navigate('/features')}
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg rounded-full bg-white/10 text-purple-500 border-white/30 hover:bg-white/20 hover:text-purple-800 hover:scale-105 transition-all"
            >
              Explore Features
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
