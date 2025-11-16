import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Download, TrendingUp, Users, Target, DollarSign, Rocket, Play } from 'lucide-react';
import { TEAM_MEMBERS } from '@/lib/mockData';

const Pitch = () => {
  const metrics = [
    { icon: <Users />, label: "Target Market", value: "12M+ women/year" },
    { icon: <TrendingUp />, label: "Market Growth", value: "20% CAGR" },
    { icon: <DollarSign />, label: "Revenue Model", value: "B2B + B2C" },
    { icon: <Target />, label: "Goal (2027)", value: "1M users" }
  ];

  const traction = [
    "AI models tested with 100+ real resume samples",
    "Validated problem with 50+ user interviews",
    "Partnership discussions with 3 major companies",
    "Prototype ready for beta testing"
  ];

  const revenue = [
    {
      stream: "Course Commissions",
      description: "Affiliate partnerships with upskilling platforms",
      potential: "₹200-500 per user"
    },
    {
      stream: "Hiring Partnerships",
      description: "Success-based fees from companies",
      potential: "₹5,000-15,000 per placement"
    },
    {
      stream: "Corporate Partnerships",
      description: "Returnship program licensing",
      potential: "₹2-5L per corporate partner"
    },
    {
      stream: "Freemium Plans",
      description: "Tiered subscription model (Free, Pro, Premium) with advanced features",
      potential: "₹0-2,499 per user/month"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 bg-gradient-primary text-gray">
        <div className="container mx-auto text-center space-y-8 max-w-5xl">
          <div className="inline-flex items-center gap-2 bg-purple-600 px-4 py-2 rounded-full text-sm font-medium text-white">
            <Rocket className="w-4 h-4 text-white" />
            Investment Pitch Deck
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold animate-fade-in text">
            The Second Shift
          </h1>
          <p className="text-2xl font-bold text-purple-700">
            AI-Powered Career Re-Entry Coach for Women
          </p>
          <p className="text-xl text-purple-500 max-w-3xl mx-auto"><i>
            Unlocking the potential of 12M+ women who want to return to work — 
            but need the right tools, support, and opportunities
          </i>
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button
              variant="secondary"
              size="lg"
              className="font-bold gap-2 shadow-glow hover:scale-105 transition-all"
              onClick={() => window.open('https://youtu.be/WuZJ96dcB9M', '_blank')}
            >
              <Play className="w-5 h-5" />
              Open Video
            </Button>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-12">The Problem</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-soft bg-gradient-card text-center">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-3xl font-bold text-primary mb-2">12M+</h3>
              <p className="text-foreground">
                Women exit the Indian workforce annually, mostly after maternity/family breaks
              </p>
            </div>
            <div className="card-soft bg-gradient-card text-center">
              <div className="text-5xl mb-4">💔</div>
              <h3 className="text-3xl font-bold text-primary mb-2">70%</h3>
              <p className="text-foreground">
                Want to return but face barriers: skill gaps, lack of confidence, no flexible options
              </p>
            </div>
            <div className="card-soft bg-gradient-card text-center">
              <div className="text-5xl mb-4">📉</div>
              <h3 className="text-3xl font-bold text-primary mb-2">1/3</h3>
              <p className="text-foreground">
                Women make up only one-third of India's workforce today — massive untapped talent
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto max-w-5xl space-y-12">
          <h2 className="text-4xl font-bold text-center">Our Solution</h2>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
            An AI-powered platform that personalizes the entire re-entry journey — 
            from skill assessment to job placement and mentorship
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🧠", title: "AI Skill Tracker", desc: "Analyzes existing skills and identifies market-relevant gaps" },
              { icon: "📝", title: "Resume Rewrite", desc: "Uses Gemini NLP to modernize profiles and frame gaps positively" },
              { icon: "🎯", title: "Smart Recommendations", desc: "Curates upskilling courses with affiliate monetization" },
              { icon: "💼", title: "Job Feed", desc: "Flexible, remote, women-friendly opportunities from partner companies" },
              { icon: "🤝", title: "Mentorship", desc: "Connects returners with successful women and peer support circles" },
              { icon: "📊", title: "Progress Dashboard", desc: "Tracks return-readiness with actionable next steps" }
            ].map((item, i) => (
              <div key={i} className="card-soft bg-card">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-foreground/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-12">Market Opportunity</h2>
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {metrics.map((metric, i) => (
              <div key={i} className="card-soft bg-gradient-card text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-white mx-auto mb-3">
                  {metric.icon}
                </div>
                <div className="text-sm text-foreground/70 mb-1">{metric.label}</div>
                <div className="text-xl font-bold text-primary">{metric.value}</div>
              </div>
            ))}
          </div>

          <div className="card-soft bg-primary text-white">
            <h3 className="text-3xl font-bold mb-4">Massive Untapped Market</h3>
            <p className="text-white/100 leading-relaxed mb-5"><i>
              The career re-entry space for women is severely underserved. With remote work normalization
              post-COVID and increasing corporate DEI focus, now is the perfect time to build
              infrastructure that helps women return at scale.
            </i></p>
            <p className="text-white/110 leading-relaxed"><i>
              Our B2B model (corporate partnerships) + B2C model (direct users) creates multiple
              revenue streams while delivering massive social impact.
            </i></p>
          </div>
        </div>
      </section>

      {/* Revenue Model */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-12">Revenue Model</h2>
          <div className="space-y-6">
            {revenue.map((item, i) => (
              <div key={i} className="card-soft bg-card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">{item.stream}</h3>
                    <p className="text-muted-foreground mb-2">{item.description}</p>
                    <p className="text-primary font-semibold">{item.potential}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Traction */}
      <section className="py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-12">Traction & Validation</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {traction.map((item, i) => (
              <div key={i} className="flex items-start gap-3 card-soft bg-gradient-card">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                  ✓
                </div>
                <p className="text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-4">The Team</h2>
          <p className="text-center text-xl text-muted-foreground mb-12">Team SkillSurge</p>
          <div className="grid md:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member, i) => (
              <div key={i} className="card-soft bg-card text-center">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-4">
                  {member.avatar}
                </div>
                <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
                <p className="text-sm text-primary font-medium mb-2">{member.role}</p>
                <p className="text-sm text-foreground/80">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Ask */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-primary text-gray">
        <div className="container mx-auto text-center space-y-6 max-w-3xl">
          <h1 className="text-5xl font-bold text-grey">The Ask</h1>
          <p className="text-xl text-purple-700 leading-relaxed">
            We're seeking <span className="font-bold text-purple-700">seed funding of ₹50-75 lakhs</span> to:
          </p>
          <ul className="text-lg text-purple-500 space-y-2 text-left max-w-2xl mx-auto">
            {/* <li>• Hire 2-3 engineers to build production-ready platform</li> */}
            <i>
            <li>• Onboard 20+ corporate partners for job pipeline</li>
            <li>• Acquire first 10,000 users through targeted marketing</li>
            <li>• Expand AI capabilities and mentor matching algorithms</li></i>
          </ul>
          <p className="text-xl text-purple-700 pt-4">
            <span className="font-bold text-purple-500">Target:</span> Break-even in 18 months | 
            <span className="font-bold text-purple-500"> Impact:</span> 50K+ women return-ready by 2027
          </p>
          <Button
            variant="secondary"
            size="lg"
            className="font-bold mt-6 shadow-glow hover:scale-105 transition-all"
            onClick={() => window.location.href = 'mailto:invest@thesecondshift.test'}
          >
            Let's Talk
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pitch;
