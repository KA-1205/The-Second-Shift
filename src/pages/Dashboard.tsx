import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Brain, FileText, Briefcase, Users, LogOut, TrendingUp, CheckCircle2, Star, Clock, Users2, ExternalLink } from 'lucide-react';
import { getCurrentUser, logout } from '@/lib/auth';
import { DEMO_USER, MOCK_ACTIVITIES, SQL_SKILL_COURSES } from '@/lib/mockData';

const Dashboard = () => {
  const navigate = useNavigate();
  const user = getCurrentUser();
  const [showCoursesDialog, setShowCoursesDialog] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const quickActions = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Skill Analysis",
      description: "Discover strengths & gaps",
      path: "/skill-analysis",
      variant: "primary" as const,
      badge: "Functional"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Resume Rewrite",
      description: "Make it return-ready",
      path: "/resume-builder",
      variant: "secondary" as const,
      badge: "Functional"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Browse Jobs",
      description: "Flexible opportunities",
      path: "/jobs",
      variant: "outline" as const,
      badge: "Mock"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Find Mentors",
      description: "Connect & learn",
      path: "/mentorship",
      variant: "outline" as const,
      badge: "Mock"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <div className="border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Welcome back, {user?.name}!</h1>
            <p className="text-sm text-muted-foreground">Let's continue your return journey</p>
          </div>
          <Button onClick={handleLogout} variant="outline" className="gap-2">
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-8 space-y-8">
        {/* Progress Card */}
        <Card className="shadow-soft-lg bg-gradient-card border-none">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Your Return-Readiness
            </CardTitle>
            <CardDescription>
              You're making great progress! Keep building momentum.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-4xl font-bold text-primary">{DEMO_USER.progress}%</span>
              <span className="text-sm text-muted-foreground">Return-Ready Score</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${DEMO_USER.progress}%` }} />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">{DEMO_USER.skills.existing.length}</div>
                <div className="text-xs text-muted-foreground">Skills Identified</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">{DEMO_USER.skills.gaps.length}</div>
                <div className="text-xs text-muted-foreground">Gaps to Close</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">1</div>
                <div className="text-xs text-muted-foreground">Resume Ready</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">6</div>
                <div className="text-xs text-muted-foreground">Job Matches</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <Card
                key={index}
                className="cursor-pointer hover:shadow-soft-lg transition-all hover:-translate-y-1 bg-card"
                onClick={() => navigate(action.path)}
              >
                <CardContent className="pt-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      action.variant === 'primary' ? 'bg-gradient-primary text-white' : 'bg-accent text-accent-foreground'
                    }`}>
                      {action.icon}
                    </div>
                    <span className="text-xs bg-secondary px-2 py-1 rounded-full text-secondary-foreground">
                      {action.badge}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold">{action.title}</h3>
                    <p className="text-sm text-muted-foreground">{action.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Personalized Recommendations */}
        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="bg-gradient-card border-none">
            <CardHeader>
              <CardTitle>Skill Snapshot</CardTitle>
              <CardDescription>Your top skills from analysis</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {DEMO_USER.skills.existing.slice(0, 3).map((skill, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.confidence}%</span>
                  </div>
                  <div className="progress-bar h-1.5">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${skill.confidence}%` }}
                    />
                  </div>
                </div>
              ))}
              <Button
                onClick={() => navigate('/skill-analysis')}
                variant="outline"
                size="sm"
                className="w-full mt-4"
              >
                Run Full Analysis
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-none">
            <CardHeader>
              <CardTitle>Recommended Next Steps</CardTitle>
              <CardDescription>Prioritized actions to move forward</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { action: "Close SQL knowledge gaps", priority: "High", icon: "🎯", clickable: true },
                { action: "Update resume for Data Analyst role", priority: "High", icon: "📝", clickable: false },
                { action: "Complete Tableau course", priority: "Medium", icon: "📚", clickable: false },
                { action: "Apply to 3 suitable jobs", priority: "Medium", icon: "💼", clickable: false }
              ].map((item, i) => (
                <div 
                  key={i} 
                  className={`flex items-center justify-between p-3 rounded-lg bg-background/50 hover:bg-secondary/80 transition-colors ${
                    item.clickable ? 'cursor-pointer hover:shadow-md' : ''
                  }`}
                  onClick={item.clickable ? () => setShowCoursesDialog(true) : undefined}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-sm font-medium">{item.action}</span>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    item.priority === 'High' 
                      ? 'bg-primary/20 text-primary' 
                      : 'bg-secondary text-secondary-foreground'
                  }`}>
                    {item.priority}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Activity Timeline */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your progress over the last few days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {MOCK_ACTIVITIES.map((activity, i) => (
                <div key={i} className="flex items-start gap-4 pb-4 border-b border-border last:border-0 last:pb-0">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-xl flex-shrink-0">
                    {activity.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium">{activity.title}</p>
                    <p className="text-sm text-muted-foreground">{activity.description}</p>
                  </div>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">
                    {activity.timestamp}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* SQL Courses Dialog */}
      <Dialog open={showCoursesDialog} onOpenChange={setShowCoursesDialog}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">SQL Courses for You</DialogTitle>
            <DialogDescription>
              Recommended courses to close your SQL knowledge gaps. All courses are under 3 weeks!
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 mt-4">
            {SQL_SKILL_COURSES.map((course) => (
              <Card key={course.id} className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg">{course.title}</CardTitle>
                      <CardDescription className="mt-1">
                        {course.provider} • {course.level}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{course.discountedPrice}</div>
                      {course.originalPrice !== course.discountedPrice && (
                        <>
                          <div className="text-sm text-muted-foreground line-through">{course.originalPrice}</div>
                          <div className="text-xs text-green-600 dark:text-green-400 font-semibold">{course.discount}</div>
                        </>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {course.topics.map((topic, i) => (
                      <span key={i} className="text-xs bg-accent px-2 py-1 rounded-full">
                        {topic}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      {course.rating}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users2 className="w-4 h-4" />
                      {course.students} students
                    </div>
                  </div>
                  
                  <Button className="w-full gap-2" asChild>
                    <a href={course.courseLink} target="_blank" rel="noopener noreferrer">
                      Enroll Now
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Dashboard;
