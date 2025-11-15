import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Target, Heart, Users, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Empowerment First",
      description: "We believe every woman deserves a fair chance to restart her career with confidence and support"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Practical Solutions",
      description: "No fluff, just actionable tools and real mentorship to close skill gaps and land jobs"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Driven",
      description: "Built by understanding real challenges through conversations with hundreds of women returners"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI-Powered",
      description: "Leveraging cutting-edge AI to personalize every step of the return journey"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 bg-gradient-hero">
        <div className="container mx-auto text-center space-y-6 max-w-4xl">
          <h1 className="text-5xl sm:text-6xl font-bold animate-fade-in">
            Bridging the Gap Between{" "}
            <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
              Career Breaks & Comebacks
            </span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            The Second Shift is more than a platform—it's a movement to unlock the potential
            of millions of talented women ready to return to the workforce.
          </p>
        </div>
      </section>

      {/* Problem & Vision */}
      <section className="py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl space-y-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">The Problem</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                In India alone, over <span className="font-semibold text-primary">12 million women</span> exit
                the workforce annually, primarily due to family responsibilities. While{" "}
                <span className="font-semibold text-primary">70% want to return</span>, they face steep barriers:
                outdated skills, lack of confidence, limited flexible opportunities, and minimal guidance.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Traditional career services aren't designed for women with career gaps. The market treats them
                as "risky hires" instead of recognizing their immense potential and transferable skills.
              </p>
            </div>
            <div className="bg-gradient-card card-soft space-y-6 p-8">
              <div className="text-5xl">📊</div>
              <div className="space-y-4">
                <div>
                  <div className="text-3xl font-bold text-primary">12M+</div>
                  <div className="text-sm text-foreground/80">Women leave annually</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">70%</div>
                  <div className="text-sm text-foreground/80">Want to return</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">33%</div>
                  <div className="text-sm text-foreground/80">Current participation rate</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-gradient-primary rounded-3xl p-8 text-white space-y-4">
              <div className="text-5xl">🎯</div>
              <h3 className="text-2xl font-bold text-purple-800">Our Mission</h3>
              <p className="text-purple-500 leading-relaxed">
                To make career re-entry accessible, confidence-building, and successful for every
                woman who's ready to return. We're turning career gaps into growth stories.
              </p>
            </div>
            <div className="order-1 md:order-2 space-y-4">
              <h2 className="text-4xl font-bold">Our Solution</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The Second Shift combines <span className="font-semibold text-primary">AI-powered skill analysis</span>,{" "}
                <span className="font-semibold text-primary">personalized upskilling</span>,{" "}
                <span className="font-semibold text-primary">curated job matching</span>, and{" "}
                <span className="font-semibold text-primary">expert mentorship</span> into one seamless platform.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We help women identify their strengths, close skill gaps, build confidence, and connect
                with companies that value diverse talent and offer flexible work arrangements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold">Our Values</h2>
            <p className="text-xl text-muted-foreground">
              What drives us to build The Second Shift every day
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="card-soft bg-card">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center text-white mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{value.title}</h3>
                <p className="text-foreground/80">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Vision */}
      <section className="py-20 px-4 sm:px-6">
        <div className="container mx-auto text-center space-y-6 max-w-3xl">
          <h2 className="text-4xl font-bold">Our Vision for Impact</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We envision a future where career breaks are normalized, not penalized. Where women can
            seamlessly transition back into fulfilling careers with the right support, tools, and community.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">1M+</div>
              <div className="text-sm text-muted-foreground">Women helped by 2027</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">50K+</div>
              <div className="text-sm text-muted-foreground">Successful placements</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">5K+</div>
              <div className="text-sm text-muted-foreground">Partner companies</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">100K+</div>
              <div className="text-sm text-muted-foreground">Skills certified</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
