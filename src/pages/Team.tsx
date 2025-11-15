import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { TEAM_MEMBERS } from '@/lib/mockData';
import { Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 bg-gradient-hero">
        <div className="container mx-auto text-center space-y-6 max-w-4xl">
          <h1 className="text-5xl sm:text-6xl font-bold animate-fade-in">
            Meet{" "}
            <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
              Team SkillSurge
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            A passionate team building solutions for social good and the future of work
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member, index) => (
              <div
                key={index}
                className="card-soft bg-gradient-card text-center group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center text-white text-4xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {member.avatar}
                </div>
                <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                <p className="text-foreground/80 text-sm mb-4">{member.bio}</p>
                <div className="flex justify-center gap-3">
                  <a
                    href={member.linkedin}
                    className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="mailto:team@thesecondshift.test"
                    className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto max-w-4xl space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">Our Story</h2>
            <p className="text-xl text-muted-foreground">
              Why we built The Second Shift
            </p>
          </div>

          <div className="card-soft bg-card space-y-6 p-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              The idea for The Second Shift was born from a simple observation: talented, educated women
              were taking career breaks and struggling to return—not because they lacked ability, but
              because the system wasn't designed to support them.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We spoke to dozens of women who wanted to work but felt overwhelmed by outdated skills,
              lack of flexible opportunities, and diminished confidence. Traditional career services
              weren't built for their unique needs.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              So we decided to build something different. The Second Shift combines AI technology with
              human empathy—helping women identify their strengths, close skill gaps, and reconnect with
              meaningful work on their own terms.
            </p>
            <p className="text-lg font-semibold text-foreground">
              This isn't just a product. It's a movement to normalize career breaks and unlock the
              potential of millions of talented women.
            </p>
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-20 px-4 sm:px-6">
        <div className="container mx-auto text-center space-y-6 max-w-3xl">
          <h2 className="text-4xl font-bold">Want to Join Our Mission?</h2>
          <p className="text-xl text-muted-foreground">
            We're looking for passionate individuals who want to make a real impact
            on women's workforce participation
          </p>
          <Button
            onClick={() => window.location.href = 'mailto:careers@thesecondshift.test'}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full"
          >
            Get in Touch
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
