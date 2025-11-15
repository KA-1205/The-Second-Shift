import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, FileText, Download, Copy, Loader2 } from 'lucide-react';
import { rewriteResume } from '@/lib/gemini';
import { toast } from 'sonner';

const ResumeBuilder = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState('');
  const [targetRole, setTargetRole] = useState('');
  const [tone, setTone] = useState<'professional' | 'empathetic' | 'executive'>('professional');
  const [result, setResult] = useState('');
  const [isRewriting, setIsRewriting] = useState(false);

  const handleRewrite = async () => {
    if (input.trim().length < 100) {
      toast.error('Please provide at least 100 characters of resume content');
      return;
    }

    if (!targetRole) {
      toast.error('Please select a target role');
      return;
    }

    setIsRewriting(true);
    toast.info('Rewriting your resume... This will take ~7 seconds');

    try {
      const rewritten = await rewriteResume(input, targetRole, tone);
      setResult(rewritten);
      toast.success('Resume rewritten successfully!');
    } catch (error) {
      toast.error('Rewrite failed. Please try again.');
    } finally {
      setIsRewriting(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    toast.success('Copied to clipboard!');
  };

  const handleDownload = () => {
    const blob = new Blob([result], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'return-ready-resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success('Downloaded resume!');
  };

  const roles = [
    'Data Analyst',
    'Product Analyst',
    'Business Analyst',
    'Marketing Analyst',
    'Product Manager',
    'Project Manager',
    'Customer Success Manager',
    'Operations Manager'
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <div className="border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center gap-4">
          <Button onClick={() => navigate('/dashboard')} variant="ghost" size="icon">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold">AI Resume Rewriter</h1>
            <p className="text-sm text-muted-foreground">Make your resume return-ready</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-8 max-w-5xl">
        <div className="space-y-6">
          {/* Input Section */}
          <Card className="shadow-soft-lg bg-card border-none">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                Your Current Resume
              </CardTitle>
              <CardDescription>
                Paste your resume text. Our AI will transform it into a return-ready version optimized for ATS.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="Example: PROFESSIONAL SUMMARY
Experienced Product Analyst with 5 years at TechCorp. Led data-driven initiatives...

EXPERIENCE
Product Analyst, TechCorp (2015-2019)
• Analyzed user behavior data using SQL and Excel
• Created dashboards for stakeholders
..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                rows={10}
                className="resize-none font-mono text-sm"
              />
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Target Role</label>
                  <Select value={targetRole} onValueChange={setTargetRole}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your target role" />
                    </SelectTrigger>
                    <SelectContent>
                      {roles.map((role) => (
                        <SelectItem key={role} value={role}>
                          {role}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Tone</label>
                  <Select value={tone} onValueChange={(v) => setTone(v as any)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="professional">Professional</SelectItem>
                      <SelectItem value="empathetic">Empathetic</SelectItem>
                      <SelectItem value="executive">Executive</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-xs text-muted-foreground">
                  {input.length} characters • Minimum 100 required
                </span>
                <Button
                  onClick={handleRewrite}
                  disabled={isRewriting || input.trim().length < 100 || !targetRole}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                >
                  {isRewriting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Rewriting...
                    </>
                  ) : (
                    <>
                      <FileText className="w-4 h-4" />
                      Make Return-Ready
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Loading State */}
          {isRewriting && (
            <Card className="border-primary/50 bg-primary/5 animate-pulse">
              <CardContent className="py-8 text-center space-y-3">
                <Loader2 className="w-8 h-8 animate-spin text-primary mx-auto" />
                <p className="text-muted-foreground">
                  Rewriting your resume... This will take ~7 seconds
                </p>
              </CardContent>
            </Card>
          )}

          {/* Results Section */}
          {result && !isRewriting && (
            <Card className="shadow-soft-lg bg-gradient-card border-none">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Your Return-Ready Resume</CardTitle>
                    <CardDescription>
                      Optimized for {targetRole} • {tone.charAt(0).toUpperCase() + tone.slice(1)} tone
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button onClick={handleCopy} variant="outline" size="icon">
                      <Copy className="w-4 h-4" />
                    </Button>
                    <Button onClick={handleDownload} variant="outline" size="icon">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="whitespace-pre-wrap font-mono text-sm text-muted-foreground leading-relaxed bg-background/50 p-6 rounded-lg">
                  {result}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Tips */}
          {!result && !isRewriting && (
            <Card className="bg-secondary/30 border-dashed">
              <CardHeader>
                <CardTitle className="text-lg">Resume Transformation Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span><strong>Professional tone</strong>: Clear, achievement-focused, metrics-driven</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span><strong>Empathetic tone</strong>: Warm, acknowledges career break positively, focuses on transferable skills</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span><strong>Executive tone</strong>: Leadership-focused, strategic thinking, high impact</span>
                </div>
                <div className="flex items-start gap-2 pt-2">
                  <span className="text-primary font-bold">💡</span>
                  <span>Our AI optimizes for ATS systems and modern hiring practices</span>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
