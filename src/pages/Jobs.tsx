import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ArrowLeft, Briefcase, MapPin, Clock, TrendingUp, ExternalLink } from 'lucide-react';
import { MOCK_JOBS } from '@/lib/mockData';
import { toast } from 'sonner';

const Jobs = () => {
  const navigate = useNavigate();
  const [selectedJob, setSelectedJob] = useState<typeof MOCK_JOBS[0] | null>(null);

  const handleApply = (jobTitle: string) => {
    toast.success(`Application submitted for ${jobTitle}!`, {
      description: 'Your return-ready resume has been sent to the employer.'
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
            <h1 className="text-2xl font-bold">Return-Friendly Jobs</h1>
            <p className="text-sm text-muted-foreground">Flexible opportunities from inclusive companies</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1 space-y-4">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-lg">Filters</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold mb-2">Work Mode</h3>
                  <div className="space-y-2">
                    {['Remote', 'Hybrid', 'Flexible'].map((mode) => (
                      <label key={mode} className="flex items-center gap-2 text-sm">
                        <input type="checkbox" className="rounded" defaultChecked={mode === 'Remote'} />
                        {mode}
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold mb-2">Hours</h3>
                  <div className="space-y-2">
                    {['Part-time', 'Full-time', 'Contract'].map((hours) => (
                      <label key={hours} className="flex items-center gap-2 text-sm">
                        <input type="checkbox" className="rounded" defaultChecked />
                        {hours}
                      </label>
                    ))}
                  </div>
                </div>
                <div className="pt-2">
                  <p className="text-xs text-muted-foreground">
                    💡 These are mock job listings for demo purposes
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-primary text-white border-none">
              <CardContent className="pt-6 space-y-3">
                <TrendingUp className="w-8 h-8" />
                <h3 className="font-semibold">You're in demand!</h3>
                <p className="text-sm text-white/90">
                  Companies are actively seeking returners with your profile. Keep applying!
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Job Listings */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                {MOCK_JOBS.length} opportunities found
              </p>
            </div>

            {MOCK_JOBS.map((job) => (
              <Card key={job.id} className="card-soft bg-card border-border hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3 flex-1">
                      <div className="text-4xl flex-shrink-0">{job.logo}</div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-xl mb-1">{job.title}</CardTitle>
                        <CardDescription className="flex flex-wrap items-center gap-2 text-sm">
                          <span className="font-semibold text-foreground">{job.company}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {job.location}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {job.hours}
                          </span>
                        </CardDescription>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="font-semibold text-primary">{job.salary}</div>
                      <div className="text-xs text-muted-foreground">Posted {job.postedDays}d ago</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {job.description}
                  </p>
                  <div className="flex gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="flex-1"
                          onClick={() => setSelectedJob(job)}
                        >
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                        {selectedJob && (
                          <>
                            <DialogHeader>
                              <div className="flex items-start gap-3">
                                <div className="text-4xl">{selectedJob.logo}</div>
                                <div>
                                  <DialogTitle className="text-2xl">{selectedJob.title}</DialogTitle>
                                  <DialogDescription className="text-base mt-1">
                                    {selectedJob.company} • {selectedJob.location} • {selectedJob.salary}
                                  </DialogDescription>
                                </div>
                              </div>
                            </DialogHeader>
                            <div className="space-y-4 pt-4">
                              <div className="flex flex-wrap gap-2">
                                {selectedJob.tags.map((tag) => (
                                  <Badge key={tag} variant="secondary">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                              <div>
                                <h3 className="font-semibold mb-2">About the Role</h3>
                                <p className="text-sm text-muted-foreground">{selectedJob.description}</p>
                              </div>
                              <div>
                                <h3 className="font-semibold mb-2">Requirements</h3>
                                <ul className="space-y-1">
                                  {selectedJob.requirements.map((req, i) => (
                                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                      <span className="text-primary">•</span>
                                      {req}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h3 className="font-semibold mb-2">Benefits</h3>
                                <ul className="space-y-1">
                                  {selectedJob.benefits.map((benefit, i) => (
                                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                      <span className="text-primary">✓</span>
                                      {benefit}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="flex gap-2 pt-4">
                                <Button
                                  onClick={() => handleApply(selectedJob.title)}
                                  className="flex-1 bg-primary hover:bg-primary/90"
                                >
                                  Apply Now
                                </Button>
                                <Button variant="outline" size="icon">
                                  <ExternalLink className="w-4 h-4" />
                                </Button>
                              </div>
                            </div>
                          </>
                        )}
                      </DialogContent>
                    </Dialog>
                    <Button
                      onClick={() => handleApply(job.title)}
                      className="flex-1 bg-primary hover:bg-primary/90"
                    >
                      Quick Apply
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
