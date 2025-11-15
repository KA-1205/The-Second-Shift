import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Brain, FileText, Briefcase, Users, BarChart3, Rocket, Handshake, ArrowRight, Hand } from 'lucide-react';
import aiSkillAnalysis from '@/assets/ai-skill-analysis.jpg';
import resumeTransformation from '@/assets/resume-transformation.jpg';
import flexibleJobs from '@/assets/flexible-jobs.jpg';
import mentorMatching from '@/assets/mentor-matching.jpg';
import progressDashboard from '@/assets/progress-dashboard.jpg';
import smartRecommendations from '@/assets/smart-recommendations.jpg';
import interview from '@/assets/interview.png';
import Softskill from '@/assets/Softskill.png';

const Features = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Skill Gap Analysis",
      description: "Identify your strengths and gaps with AI-powered analysis",
      details: [
        "Analyzes past experience and current skills",
        "Identifies market-relevant skill gaps",
        "Provides confidence scores for each skill",
        "Recommends specific learning paths"
      ],
      status: "Functional ✓",
      image: aiSkillAnalysis
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Resume Transformation",
      description: "AI rewrites your resume to highlight return-ready strengths",
      details: [
        "Modernizes outdated experience",
        "Frames career gaps positively",
        "Optimizes for ATS systems",
        "Offers 3 tone options: Professional, Empathetic, Executive"
      ],
      status: "Functional ✓",
      image: resumeTransformation
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Flexible Job Feed",
      description: "Curated opportunities from return-friendly companies",
      details: [
        "Remote, part-time, and flexible roles",
        "Returnship programs highlighted",
        "Women-friendly company filters",
        "One-click apply with rewritten resume"
      ],
      status: "Mock Data",
      image: flexibleJobs
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Mentor Matching",
      description: "Connect with successful women who've made the return",
      details: [
        "AI matches based on your target role",
        "Book 1:1 coaching sessions",
        "Join peer support circles",
        "Access exclusive returnship networks"
      ],
      status: "Mock Data",
      image: mentorMatching
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Progress Dashboard",
      description: "Track your return-readiness journey in real-time",
      details: [
        "Visual progress metrics",
        "Skill improvement tracking",
        "Application history",
        "Personalized recommendations"
      ],
      status: "Mock Data",
      image: progressDashboard
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Smart Recommendations",
      description: "Personalized course and job suggestions powered by AI",
      details: [
        "Curated upskilling courses",
        "Micro-credentials and certificates",
        "Job alerts for your profile",
        "Community events and workshops"
      ],
      status: "Mock Data",
      image: smartRecommendations
    },
    {
      icon: <Handshake className="w-6 h-6" />,
      title: "Interview Enhancer",
      description: "AI helps in interview preparation by helping improve soft skills",
      details: [
        "Domain-based Frequantly Asked questions practiced",
        "Communication skills and mannerism",
        "Initial Confidence Mapping",
        "Real-Time Feedback and Iteration"
      ],
      status: "Mock Data",
      image: interview
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 bg-gradient-hero">
        <div className="container mx-auto text-center space-y-6 max-w-4xl">
          <h1 className="text-5xl sm:text-6xl font-bold animate-fade-in">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
              Return Stronger
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            AI-powered tools and human support designed specifically for women returning to work
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl space-y-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className={`space-y-4 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full text-sm font-medium text-primary">
                  {feature.status}
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-white">
                    {feature.icon}
                  </div>
                  <h2 className="text-3xl font-bold">{feature.title}</h2>
                </div>
                <p className="text-lg text-muted-foreground">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <div className="card-soft bg-gradient-card">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-64 object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">How The Second Shift Works</h2>
            <p className="text-xl text-muted-foreground">
              A simple 4-step journey to return-readiness
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Sign Up", desc: "Create your profile and share work history" },
              { step: "2", title: "Analyze", desc: "AI identifies your strengths and gaps" },
              { step: "3", title: "Upskill", desc: "Take targeted courses and rebuild confidence" },
              { step: "4", title: "Return", desc: "Apply to flexible jobs with mentor support" }
            ].map((item, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto">
                  {item.step}
                </div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6">
        <div className="container mx-auto text-center space-y-6 max-w-3xl">
          <h2 className="text-4xl font-bold">Ready to Experience It?</h2>
          <p className="text-xl text-muted-foreground">
            Try our interactive demo and see how AI can accelerate your return journey
          </p>
          <Button
            onClick={() => navigate('/login')}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full shadow-glow hover:scale-105 transition-all"
          >
            Try Demo Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;
