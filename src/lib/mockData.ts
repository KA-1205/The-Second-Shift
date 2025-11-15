// Mock data for The Second Shift prototype

export const DEMO_USER = {
  email: "demo@thesecondshift.test",
  password: "DemoPass123",
  name: "Priya Sharma",
  lastJob: "Product Analyst",
  lastJobYear: "2019",
  gapYears: 6,
  preferences: {
    workMode: ["Remote", "Part-time"],
    hoursPerWeek: "20-30"
  },
  progress: 42,
  skills: {
    existing: [
      { name: "SQL", level: "intermediate", confidence: 75 },
      { name: "Excel", level: "advanced", confidence: 90 },
      { name: "Stakeholder Management", level: "intermediate", confidence: 70 },
      { name: "Data Analysis", level: "intermediate", confidence: 72 },
      { name: "PowerPoint", level: "advanced", confidence: 85 }
    ],
    gaps: [
      { name: "Data Visualization", tools: ["Tableau", "PowerBI"], priority: "high" },
      { name: "Modern SQL Analytics", details: "Window functions, CTEs", priority: "high" },
      { name: "Cloud Basics", tools: ["AWS", "GCP"], priority: "medium" }
    ]
  }
};

export const MOCK_JOBS = [
  {
    id: "job-1",
    title: "Junior Data Analyst (Flexible)",
    company: "BrightHome",
    logo: "🏠",
    location: "Remote",
    hours: "20-30 hrs/wk",
    type: "Part-time",
    tags: ["returnship", "part-time", "flexible"],
    salary: "₹4-6 LPA",
    postedDays: 3,
    description: "Perfect for career returners! Work with a supportive team on data analysis projects. Flexible hours and remote work.",
    requirements: ["Excel", "SQL basics", "Communication skills"],
    benefits: ["Flexible hours", "Remote work", "Mentorship program"]
  },
  {
    id: "job-2",
    title: "Product Analyst - Women Returners Program",
    company: "TechForward",
    logo: "🚀",
    location: "Hybrid - Bangalore",
    hours: "30 hrs/wk",
    type: "Contract",
    tags: ["returnship", "hybrid", "women-friendly"],
    salary: "₹6-8 LPA",
    postedDays: 5,
    description: "6-month returnship program designed for women re-entering tech. Full support and training provided.",
    requirements: ["Product thinking", "Basic analytics", "Collaboration"],
    benefits: ["Training provided", "Flexible schedule", "Conversion opportunity"]
  },
  {
    id: "job-3",
    title: "Business Analyst (Remote)",
    company: "DataWise Solutions",
    logo: "📊",
    location: "Remote",
    hours: "25-35 hrs/wk",
    type: "Part-time",
    tags: ["remote", "flexible", "career-break-friendly"],
    salary: "₹5-7 LPA",
    postedDays: 7,
    description: "Join our inclusive team! We value diverse experiences and support career returners with mentorship.",
    requirements: ["Data analysis", "Excel/SQL", "Problem solving"],
    benefits: ["100% remote", "Flexible hours", "Skill development"]
  },
  {
    id: "job-4",
    title: "Customer Insights Analyst",
    company: "RetailNext",
    logo: "🛍️",
    location: "Remote",
    hours: "20 hrs/wk",
    type: "Part-time",
    tags: ["part-time", "remote", "entry-level"],
    salary: "₹3-5 LPA",
    postedDays: 10,
    description: "Analyze customer behavior and trends. Perfect for returning professionals with analytical skills.",
    requirements: ["Excel", "Basic SQL", "Communication"],
    benefits: ["Part-time", "Work from home", "Growth path"]
  },
  {
    id: "job-5",
    title: "Junior Research Analyst",
    company: "InsightHub",
    logo: "🔍",
    location: "Hybrid - Mumbai",
    hours: "30 hrs/wk",
    type: "Contract",
    tags: ["hybrid", "flexible", "research"],
    salary: "₹4-6 LPA",
    postedDays: 12,
    description: "Research and analyze market trends. We actively support women returning to work after career breaks.",
    requirements: ["Research skills", "Data analysis", "Writing"],
    benefits: ["Flexible timing", "Mentorship", "Remote option"]
  },
  {
    id: "job-6",
    title: "Operations Analyst - Part Time",
    company: "OptiFlow",
    logo: "⚙️",
    location: "Remote",
    hours: "15-25 hrs/wk",
    type: "Part-time",
    tags: ["part-time", "remote", "operations"],
    salary: "₹3-5 LPA",
    postedDays: 14,
    description: "Support operations with data-driven insights. Family-friendly environment with flexible hours.",
    requirements: ["Excel", "Process thinking", "Communication"],
    benefits: ["Highly flexible", "Remote", "Supportive team"]
  }
];

export const MOCK_MENTORS = [
  {
    id: "mentor-1",
    name: "Aisha Khan",
    title: "Ex-Lead Data PM",
    company: "Tech Giant",
    avatar: "👩‍💼",
    bio: "Helps rejoiners convert legacy experience into modern resumes. Specialized in product analytics and data storytelling.",
    expertise: ["Product Management", "Data Analytics", "Career Transitions"],
    availability: "30 min sessions",
    experience: "15+ years",
    returnersHelped: 47,
    rating: 4.9
  },
  {
    id: "mentor-2",
    name: "Meera Patel",
    title: "Senior Business Analyst",
    company: "Consulting Firm",
    avatar: "👩‍💻",
    bio: "Returned to work after 8-year break. Now helping others navigate their return journey with confidence.",
    expertise: ["Business Analysis", "Excel/SQL", "Interview Prep"],
    availability: "45 min sessions",
    experience: "12+ years",
    returnersHelped: 63,
    rating: 5.0
  },
  {
    id: "mentor-3",
    name: "Ritika Sharma",
    title: "Data Science Lead",
    company: "Analytics Co",
    avatar: "👩‍🔬",
    bio: "Passionate about upskilling women in tech. Focuses on modern tools and building technical confidence.",
    expertise: ["Data Science", "Python", "Modern Analytics"],
    availability: "1 hour sessions",
    experience: "10+ years",
    returnersHelped: 38,
    rating: 4.8
  },
  {
    id: "mentor-4",
    name: "Priyanka Desai",
    title: "HR Leader & Career Coach",
    company: "Fortune 500",
    avatar: "👩‍🏫",
    bio: "Specializes in resume building, interview strategies, and navigating corporate culture after career breaks.",
    expertise: ["Resume Building", "Interview Prep", "Salary Negotiation"],
    availability: "30 min sessions",
    experience: "18+ years",
    returnersHelped: 91,
    rating: 4.9
  },
  {
    id: "mentor-5",
    name: "Anjali Reddy",
    title: "Product Manager",
    company: "Startup",
    avatar: "👩‍💼",
    bio: "Successfully transitioned from analyst to PM after 5-year break. Mentors on product thinking and agile methodologies.",
    expertise: ["Product Management", "Agile", "Tech Transition"],
    availability: "45 min sessions",
    experience: "9+ years",
    returnersHelped: 29,
    rating: 4.7
  },
  {
    id: "mentor-6",
    name: "Kavita Singh",
    title: "Finance & Analytics Expert",
    company: "Bank",
    avatar: "👩‍💼",
    bio: "Helps professionals pivot into data analytics from other domains. Expert in financial analysis and modeling.",
    expertise: ["Financial Analysis", "Career Pivot", "Excel Mastery"],
    availability: "1 hour sessions",
    experience: "14+ years",
    returnersHelped: 52,
    rating: 4.9
  }
];

export const TEAM_MEMBERS = [
  {
    name: "Kartik Arora",
    role: "Technical Lead",
    bio: "Building accessible tech solutions for social impact",
    avatar: "👨‍💻",
    linkedin: "#"
  },
  {
    name: "Tanish Mahajan",
    role: "Product & Design",
    bio: "Creating empowering experiences for women returners",
    avatar: "👨‍🎨",
    linkedin: "#"
  },
  {
    name: "Tiya Garg",
    role: "Research & Strategy",
    bio: "Researching barriers and solutions for workforce re-entry",
    avatar: "👩‍🔬",
    linkedin: "#"
  }
];

export const MOCK_COURSES = [
  {
    id: "course-1",
    title: "Modern SQL for Data Analysis",
    provider: "DataCamp",
    duration: "4 weeks",
    level: "Intermediate",
    topics: ["Window Functions", "CTEs", "Query Optimization"],
    price: "Free trial available"
  },
  {
    id: "course-2",
    title: "Data Visualization with Tableau",
    provider: "Coursera",
    duration: "6 weeks",
    level: "Beginner",
    topics: ["Dashboard Design", "Interactive Charts", "Storytelling"],
    price: "₹2,999"
  },
  {
    id: "course-3",
    title: "Cloud Computing Basics",
    provider: "AWS Training",
    duration: "3 weeks",
    level: "Beginner",
    topics: ["AWS Fundamentals", "Cloud Storage", "Basic Services"],
    price: "Free"
  }
];

export const SQL_SKILL_COURSES = [
  {
    id: "sql-1",
    title: "SQL Fundamentals for Analytics",
    provider: "Udemy",
    duration: "2 weeks",
    level: "Beginner to Intermediate",
    topics: ["SELECT Queries", "JOINs", "Aggregations", "Subqueries"],
    originalPrice: "₹3,499",
    discountedPrice: "₹499",
    discount: "86% OFF",
    rating: 4.7,
    students: "12,450",
    courseLink: "https://udemy.com/sql-analytics"
  },
  {
    id: "sql-2",
    title: "Advanced SQL: Window Functions & CTEs",
    provider: "DataCamp",
    duration: "10 days",
    level: "Intermediate",
    topics: ["Window Functions", "CTEs", "Advanced JOINs", "Query Optimization"],
    originalPrice: "₹2,999",
    discountedPrice: "Free Trial",
    discount: "14-day trial",
    rating: 4.9,
    students: "8,230",
    courseLink: "https://datacamp.com/sql-advanced"
  },
  {
    id: "sql-3",
    title: "SQL for Data Science Bootcamp",
    provider: "Coursera",
    duration: "2 weeks",
    level: "Beginner",
    topics: ["Database Basics", "SQL Syntax", "Data Analysis", "Real Projects"],
    originalPrice: "₹4,999",
    discountedPrice: "₹999",
    discount: "80% OFF - Limited Time",
    rating: 4.8,
    students: "15,670",
    courseLink: "https://coursera.org/sql-bootcamp"
  }
];

export const MOCK_ACTIVITIES = [
  {
    id: "act-1",
    type: "skill-analysis",
    title: "Completed Skill Analysis",
    description: "Identified 3 skill gaps and 5 strengths",
    timestamp: "2 hours ago",
    icon: "🧠"
  },
  {
    id: "act-2",
    type: "resume",
    title: "Resume Rewritten",
    description: "Updated for 'Data Analyst' role",
    timestamp: "1 day ago",
    icon: "📄"
  },
  {
    id: "act-3",
    type: "job-apply",
    title: "Applied to BrightHome",
    description: "Junior Data Analyst position",
    timestamp: "3 days ago",
    icon: "💼"
  },
  {
    id: "act-4",
    type: "mentor-request",
    title: "Session Requested",
    description: "Meeting with Aisha Khan scheduled",
    timestamp: "5 days ago",
    icon: "🤝"
  }
];
