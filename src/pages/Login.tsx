import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, ArrowLeft } from 'lucide-react';
import { authenticateUser, loginAsGuest, saveUser, hasCompletedOnboarding } from '@/lib/auth';
import { DEMO_USER } from '@/lib/mockData';
import { toast } from 'sonner';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      const user = authenticateUser(email, password);
      if (user) {
        saveUser(user);
        toast.success('Welcome back!');
        
        // Check if onboarding is complete
        if (hasCompletedOnboarding()) {
          navigate('/dashboard');
        } else {
          navigate('/onboarding');
        }
      } else {
        toast.error('Invalid credentials. Try the demo account!');
      }
      setIsLoading(false);
    }, 800);
  };

  const handleGuestLogin = () => {
    const user = loginAsGuest();
    saveUser(user);
    toast.success('Logged in as guest!');
    
    if (hasCompletedOnboarding()) {
      navigate('/dashboard');
    } else {
      navigate('/onboarding');
    }
  };

  const fillDemoCredentials = () => {
    setEmail(DEMO_USER.email);
    setPassword(DEMO_USER.password);
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <div className="absolute top-6 left-6">
        <Button
          onClick={() => navigate('/')}
          variant="ghost"
          className="gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Button>
      </div>

      <Card className="w-full max-w-md shadow-soft-lg animate-fade-in">
        <CardHeader className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
          </div>
          <div>
            <CardTitle className="text-3xl font-bold">Welcome to The Second Shift</CardTitle>
            <CardDescription className="text-base mt-2">
              Login to access your personalized career re-entry dashboard
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Demo Credentials Info */}
          <div className="bg-secondary/50 border border-primary/20 rounded-lg p-4 space-y-2">
            <p className="text-sm font-semibold text-foreground">Demo Credentials:</p>
            <div className="text-sm text-muted-foreground space-y-1">
              <p><span className="font-medium">Email:</span> {DEMO_USER.email}</p>
              <p><span className="font-medium">Password:</span> {DEMO_USER.password}</p>
            </div>
            <Button
              onClick={fillDemoCredentials}
              variant="outline"
              size="sm"
              className="w-full mt-2"
            >
              Auto-fill Demo Credentials
            </Button>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="demo@thesecondshift.test"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </Button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">Or</span>
            </div>
          </div>

          <Button
            onClick={handleGuestLogin}
            variant="outline"
            className="w-full"
          >
            Continue as Guest
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            This is a prototype demo. All features use mock data for demonstration purposes.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
