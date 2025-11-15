import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Sparkles, Download, Copy, Loader2 } from 'lucide-react';
import { analyzeSkills } from '@/lib/gemini';
import { toast } from 'sonner';

const SkillAnalysis = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = async () => {
    if (input.trim().length < 50) {
      toast.error('Please provide at least 50 characters of work history');
      return;
    }

    setIsAnalyzing(true);
    toast.info('Analyzing your skills... This will take ~5 seconds');

    try {
      const analysis = await analyzeSkills(input);
      setResult(analysis);
      toast.success('Analysis complete!');
    } catch (error) {
      toast.error('Analysis failed. Please try again.');
    } finally {
      setIsAnalyzing(false);
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
    a.download = 'skill-analysis-report.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success('Downloaded report!');
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
            <h1 className="text-2xl font-bold">AI Skill Analysis</h1>
            <p className="text-sm text-muted-foreground">Discover your strengths and skill gaps</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-8 max-w-4xl">
        <div className="space-y-6">
          {/* Input Section */}
          <Card className="shadow-soft-lg bg-card border-none">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary animate-pulse-glow" />
                Share Your Work Experience
              </CardTitle>
              <CardDescription>
                Paste your resume or describe your past work. Our AI will identify your strengths and recommend learning paths.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="Example: Worked as Product Analyst at TechCorp from 2015-2019. Led data analysis projects using SQL, Excel, and created stakeholder presentations. Managed cross-functional teams and collaborated with engineering..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                rows={8}
                className="resize-none"
              />
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  {input.length} characters • Minimum 50 required
                </span>
                <Button
                  onClick={handleAnalyze}
                  disabled={isAnalyzing || input.trim().length < 50}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                >
                  {isAnalyzing ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      Run Analysis
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Loading State */}
          {isAnalyzing && (
            <Card className="border-primary/50 bg-primary/5 animate-pulse">
              <CardContent className="py-8 text-center space-y-3">
                <Loader2 className="w-8 h-8 animate-spin text-primary mx-auto" />
                <p className="text-muted-foreground">
                  Analyzing your skills... This will take ~5 seconds
                </p>
              </CardContent>
            </Card>
          )}

          {/* Results Section */}
          {result && !isAnalyzing && (
            <Card className="shadow-soft-lg bg-gradient-card border-none">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Your Skill Analysis Report</CardTitle>
                    <CardDescription>
                      Actionable insights to accelerate your return journey
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
                <div className="prose prose-sm max-w-none">
                  <div className="whitespace-pre-wrap text-muted-foreground leading-relaxed bg-background/50 p-6 rounded-lg">
                    {result}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Sample Analysis (if no result yet) */}
          {!result && !isAnalyzing && (
            <Card className="bg-secondary/30 border-dashed">
              <CardHeader>
                <CardTitle className="text-lg">What to Expect</CardTitle>
                <CardDescription>
                  Your analysis will include:
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Top 5 Existing Skills</strong> with confidence scores</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>3 Key Skill Gaps</strong> for today's job market</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Recommended Learning Topics</strong> with specific tools</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Actionable Next Steps</strong> to start immediately</span>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillAnalysis;
