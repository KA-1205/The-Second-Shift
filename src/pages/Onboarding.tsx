import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Sparkles, ArrowRight, Upload, ChevronLeft, ArrowLeft } from 'lucide-react';
import { markOnboardingComplete } from '@/lib/auth';
import { toast } from 'sonner';

const Onboarding = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [resumeText, setResumeText] = useState('');
  const [skills, setSkills] = useState({
    sql: false,
    excel: false,
    analysis: false,
    communication: false,
    management: false
  });
  const [workMode, setWorkMode] = useState({
    remote: false,
    flexible: false,
    partTime: false,
    fullTime: false
  });

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      completeOnboarding();
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const completeOnboarding = () => {
    markOnboardingComplete();
    toast.success('Onboarding complete! Welcome to your dashboard.');
    navigate('/dashboard');
  };

  const canProceed = () => {
    if (step === 1) return resumeText.trim().length > 50;
    if (step === 2) return Object.values(skills).some(v => v);
    if (step === 3) return Object.values(workMode).some(v => v);
    return true;
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      {/* Back to Home Button */}
      <Button
        variant="ghost"
        className="absolute top-6 left-6 gap-2"
        onClick={() => navigate('/')}
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Button>

      <Card className="w-full max-w-2xl shadow-soft-lg animate-fade-in">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">Let's Get You Return-Ready</CardTitle>
          <CardDescription>
            Step {step} of 3 • We'll personalize your experience based on your goals
          </CardDescription>
          
          {/* Progress bar */}
          <div className="progress-bar mt-4">
            <div className="progress-fill" style={{ width: `${(step / 3) * 100}%` }} />
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Step 1: Resume/Work History */}
          {step === 1 && (
            <div className="space-y-4 animate-fade-in">
              <div>
                <h3 className="text-xl font-semibold mb-2">Share Your Work History</h3>
                <p className="text-muted-foreground text-sm">
                  Paste your resume or describe your past work experience. This helps us understand your strengths.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="resume">Resume / Work Experience</Label>
                <Textarea
                  id="resume"
                  placeholder="Example: Worked as Product Analyst at TechCorp from 2015-2019. Led data analysis projects, created dashboards using Excel and SQL, managed stakeholder communications..."
                  value={resumeText}
                  onChange={(e) => setResumeText(e.target.value)}
                  rows={8}
                  className="resize-none"
                />
                <p className="text-xs text-muted-foreground">
                  {resumeText.length} characters • Minimum 50 characters
                </p>
              </div>

              <Button variant="outline" className="w-full gap-2">
                <Upload className="w-4 h-4" />
                Upload Resume File (Coming Soon)
              </Button>
            </div>
          )}

          {/* Step 2: Skills Self-Rating */}
          {step === 2 && (
            <div className="space-y-4 animate-fade-in">
              <div>
                <h3 className="text-xl font-semibold mb-2">Rate Your Top Skills</h3>
                <p className="text-muted-foreground text-sm">
                  Select the skills you're confident in. We'll help identify gaps later.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  { key: 'sql', label: 'SQL & Database Query' },
                  { key: 'excel', label: 'Excel & Data Analysis' },
                  { key: 'analysis', label: 'Business Analysis' },
                  { key: 'communication', label: 'Stakeholder Communication' },
                  { key: 'management', label: 'Project Management' }
                ].map((skill) => (
                  <div key={skill.key} className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-accent transition-colors">
                    <Checkbox
                      id={skill.key}
                      checked={skills[skill.key as keyof typeof skills]}
                      onCheckedChange={(checked) =>
                        setSkills({ ...skills, [skill.key]: checked as boolean })
                      }
                    />
                    <Label
                      htmlFor={skill.key}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                    >
                      {skill.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Work Preferences */}
          {step === 3 && (
            <div className="space-y-4 animate-fade-in">
              <div>
                <h3 className="text-xl font-semibold mb-2">Your Work Preferences</h3>
                <p className="text-muted-foreground text-sm">
                  What type of work arrangement are you looking for?
                </p>
              </div>

              <div className="space-y-3">
                {[
                  { key: 'remote', label: 'Remote Work', desc: 'Work from anywhere' },
                  { key: 'flexible', label: 'Flexible Hours', desc: 'Choose your own schedule' },
                  { key: 'partTime', label: 'Part-Time', desc: '20-30 hours per week' },
                  { key: 'fullTime', label: 'Full-Time', desc: '40 hours per week' }
                ].map((mode) => (
                  <div key={mode.key} className="flex items-start space-x-3 p-4 rounded-lg border border-border hover:bg-accent transition-colors">
                    <Checkbox
                      id={mode.key}
                      checked={workMode[mode.key as keyof typeof workMode]}
                      onCheckedChange={(checked) =>
                        setWorkMode({ ...workMode, [mode.key]: checked as boolean })
                      }
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <Label
                        htmlFor={mode.key}
                        className="text-sm font-medium leading-none cursor-pointer"
                      >
                        {mode.label}
                      </Label>
                      <p className="text-xs text-muted-foreground mt-1">{mode.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-3 pt-4">
            {step > 1 && (
              <Button
                onClick={handleBack}
                variant="outline"
                className="gap-2"
              >
                <ChevronLeft className="w-4 h-4" />
                Back
              </Button>
            )}
            
            <Button
              onClick={handleNext}
              disabled={!canProceed()}
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
            >
              {step === 3 ? 'Complete Setup' : 'Continue'}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {step === 1 && (
            <Button
              onClick={() => navigate('/dashboard')}
              variant="ghost"
              className="w-full text-sm text-muted-foreground"
            >
              Skip for now
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Onboarding;
