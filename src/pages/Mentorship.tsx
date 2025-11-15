import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ArrowLeft, Users, Star, Calendar, Award, Clock } from 'lucide-react';
import { MOCK_MENTORS } from '@/lib/mockData';
import { toast } from 'sonner';

const Mentorship = () => {
  const navigate = useNavigate();
  const [selectedMentor, setSelectedMentor] = useState<typeof MOCK_MENTORS[0] | null>(null);

  const handleRequestSession = (mentorName: string) => {
    toast.success(`Session request sent to ${mentorName}!`, {
      description: 'You\'ll receive a confirmation email with available time slots.'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <div className="border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center gap-4">
          <Button onClick={() => navigate('/dashboard')} variant="ghost" size="icon">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold">Find Your Mentor</h1>
            <p className="text-sm text-muted-foreground">Connect with successful women returners</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Info Sidebar */}
          <div className="lg:col-span-1 space-y-4">
            <Card className="bg-gradient-primary text-white border-none">
              <CardContent className="pt-6 space-y-4">
                <Users className="w-10 h-10" />
                <h3 className="text-xl font-semibold">Why Mentorship Matters</h3>
                <ul className="space-y-2 text-sm text-white/90">
                  <li className="flex items-start gap-2">
                    <span>✓</span>
                    <span>Learn from those who've successfully returned</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✓</span>
                    <span>Build confidence through guided support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✓</span>
                    <span>Access exclusive networking opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✓</span>
                    <span>Get insider tips on interviews and negotiations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-lg">Filters</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold mb-2">Expertise</h3>
                  <div className="space-y-2">
                    {['Product Management', 'Data Analytics', 'Career Transitions', 'Interview Prep'].map((exp) => (
                      <label key={exp} className="flex items-center gap-2 text-sm">
                        <input type="checkbox" className="rounded" defaultChecked />
                        <span className="text-xs">{exp}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="pt-2">
                  <p className="text-xs text-muted-foreground">
                    💡 These are mock mentor profiles for demo purposes
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Mentor Grid */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <p className="text-sm text-muted-foreground">
                {MOCK_MENTORS.length} mentors available
              </p>
            </div>

            <div className="grid gap-6">
              {MOCK_MENTORS.map((mentor) => (
                <Card key={mentor.id} className="card-soft bg-card border-border hover:border-primary/50 transition-colors">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="text-5xl flex-shrink-0">{mentor.avatar}</div>
                      
                      <div className="flex-1 space-y-3">
                        <div>
                          <h3 className="text-xl font-semibold">{mentor.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {mentor.title} at {mentor.company}
                          </p>
                        </div>

                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {mentor.bio}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {mentor.expertise.map((exp) => (
                            <Badge key={exp} variant="secondary" className="text-xs">
                              {exp}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 text-primary fill-primary" />
                            <span>{mentor.rating} rating</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Award className="w-3 h-3" />
                            <span>{mentor.experience} experience</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            <span>{mentor.returnersHelped} returners helped</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{mentor.availability}</span>
                          </div>
                        </div>

                        <div className="flex gap-2 pt-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setSelectedMentor(mentor)}
                              >
                                View Profile
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-2xl">
                              {selectedMentor && (
                                <>
                                  <DialogHeader>
                                    <div className="flex items-start gap-3">
                                      <div className="text-5xl">{selectedMentor.avatar}</div>
                                      <div>
                                        <DialogTitle className="text-2xl">{selectedMentor.name}</DialogTitle>
                                        <DialogDescription className="text-base mt-1">
                                          {selectedMentor.title} at {selectedMentor.company}
                                        </DialogDescription>
                                      </div>
                                    </div>
                                  </DialogHeader>
                                  <div className="space-y-4 pt-4">
                                    <div>
                                      <h3 className="font-semibold mb-2">About</h3>
                                      <p className="text-sm text-muted-foreground">{selectedMentor.bio}</p>
                                    </div>
                                    <div>
                                      <h3 className="font-semibold mb-2">Expertise</h3>
                                      <div className="flex flex-wrap gap-2">
                                        {selectedMentor.expertise.map((exp) => (
                                          <Badge key={exp} variant="secondary">
                                            {exp}
                                          </Badge>
                                        ))}
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 p-4 bg-secondary/30 rounded-lg">
                                      <div>
                                        <div className="text-2xl font-bold text-primary">{selectedMentor.rating}</div>
                                        <div className="text-xs text-muted-foreground">Average Rating</div>
                                      </div>
                                      <div>
                                        <div className="text-2xl font-bold text-primary">{selectedMentor.returnersHelped}</div>
                                        <div className="text-xs text-muted-foreground">Women Helped</div>
                                      </div>
                                      <div>
                                        <div className="text-sm font-semibold">{selectedMentor.experience}</div>
                                        <div className="text-xs text-muted-foreground">Experience</div>
                                      </div>
                                      <div>
                                        <div className="text-sm font-semibold">{selectedMentor.availability}</div>
                                        <div className="text-xs text-muted-foreground">Session Length</div>
                                      </div>
                                    </div>
                                    <Button
                                      onClick={() => handleRequestSession(selectedMentor.name)}
                                      className="w-full bg-primary hover:bg-primary/90 gap-2"
                                    >
                                      <Calendar className="w-4 h-4" />
                                      Request Session
                                    </Button>
                                  </div>
                                </>
                              )}
                            </DialogContent>
                          </Dialog>
                          <Button
                            onClick={() => handleRequestSession(mentor.name)}
                            size="sm"
                            className="bg-primary hover:bg-primary/90 gap-2"
                          >
                            <Calendar className="w-4 h-4" />
                            Request Session
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentorship;
