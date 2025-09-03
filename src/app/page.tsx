"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Paperclip, Pyramid, ChevronUp, ChevronDown } from "lucide-react";
// import ProfileInfo from "@/components/ProfileInfo";
import { AvatarGroupDemo } from "@/components/AvatarGroup";
import GitHubCalendarComponent from "@/components/GitHubCalendar";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/animate-ui/radix/accordion";

const resumeData = {
  profile: {
    description:
      "Bachelor of Computer Science | Minor Business Administration at Boston University",
    image: "/portrait.jpeg",
    contact: {
      email: "glevi@bu.edu",
      linkedin: "linkedin.com/in/gabrielleviramos",
      github: "github.com/glevi2004",
    },
  },
  profileCard: {
    name: "Gabriel Levi Ramos",
    description: "Software Engineer",
    github: "glevi2004",
  },
  education: {
    school: "Boston University",
    graduation: "Expected Graduation: May 2026",
    degree: "Bachelor of Computer Science | Minor Business Administration",
    location: "Boston, MA",
    image: "/bu.png",
    courses: [
      "Software Engineering Practice",
      "Applied Machine Learning",
      "Operating Systems",
      "Computer Architecture",
      "Model-Based Programming",
    ],
  },
  experience: [
    {
      company: "Find Me",
      position: "Fullstack Software Engineer Intern",
      duration: "May 2024 -- Sep 2024",
      location: "Remote",
      image: "/find-me.png",
      achievements: [
        "Designed and implemented a centralized logging and monitoring system for the company's Express.js backend using Prometheus and Grafana, orchestrated with Docker Compose.",
        "Developed and deployed RESTful APIs for backend services and microservices with Express.js, integrating JWT-based authentication, validating endpoints with Postman, and ensuring reliability through unit tests in Jest.",
        "Reviewed and merged 10+ GitLab pull requests, providing feedback, maintaining code quality standards, and improving team collaboration during development cycles.",
        "Architected and presented a scalable followers and connections microservice using Azure Functions, enabling cloud-native functionality and laying the foundation for the platform's social features.",
      ],
    },
    {
      company: "Esurgi, Inc.",
      position: "Software Engineer Intern (WebApp, iOS)",
      duration: "May 2023 -- Sep 2023",
      location: "Remote",
      image: "/esurgi.png",
      achievements: [
        "Led team of three interns to refactor the company's React.js web application into Next.js, leveraging Firebase, Google OAuth, Material UI, Styled Components, and ensuring reliability with Jest unit/integration testing.",
        "Implemented CI/CD pipelines for both the web and iOS applications using GitHub Actions, streamlining deployments and reducing release times by 90%.",
        "Developed and integrated iOS app components with Swift and SwiftUI, contributing to cross-platform feature parity.",
        "Reviewed and merged 20+ PRs/MRs and documented 10,000+ lines of JavaScript code for the web application, improving maintainability and onboarding efficiency.",
      ],
    },
    {
      company: "Ernst & Young",
      position: "Software Engineer Intern",
      duration: "Jun 2022 -- Sep 2022",
      location: "Location",
      image: "/ernst.png",
      achievements: [
        "Contributed to CRM and ERP implementation using JavaScript and Elasticsearch; retrieved, tested, and validated data from RESTful APIs with Postman.",
        "Automated accounting workflows with Python, utilizing libraries such as NumPy, pandas, Matplotlib, openpyxl, and requests to streamline reporting and analysis.",
        "Processed JSON data into Excel files for financial reporting, supporting client IPO readiness, containerized and deployed solutions in Docker for scalability.",
      ],
    },
  ],
  projects: [
    {
      name: "Slakr",
      website: "https://slakr.vercel.app/",
      sourceCode: "https://github.com/glevi2004/slakr",
      tech: "React Native | Expo | PostgreSQL | Supabase",
      image: "/slakr.png",
      description:
        "AI-powered social learning platform that gamifies studying with streaks and accountability.",
      details:
        "Led mobile app development with React Native and Expo, integrated OpenAI API for personalized study goals, managed user data and authentication through Supabase, and structured relational data in PostgreSQL.",
    },
    {
      name: "Feature Ship",
      website: "https://featureflow.vercel.app/",
      sourceCode: "https://github.com/glevi2004/feature-flow",
      tech: "NextJS | Firebase | Stripe",
      image: "/featureship.png",
      description:
        "Feature request and feedback management platform with Kanban workflow for software companies.",
      details:
        "Built using Next.js, TypeScript, Firebase, and integrated with Stripe for payments. Provides companies with their own public/private feedback collection platform, featuring Kanban board workflow management to streamline feedback into deployed features.",
    },
    {
      name: "Clipy AI",
      website: "https://clipy.vercel.app/",
      sourceCode: "https://github.com/glevi2004/clipy",
      tech: "NextJS | OpenAI | PostgreSQL | Supabase",
      description:
        "AI-powered viral short content video generator for engaging social media content.",
      details:
        "Developed a Next.js application with TypeScript, integrated OpenAI API for intelligent content generation, and managed user data and authentication through Supabase. PostgreSQL was used for data persistence, and the application featured AI-driven video creation tools for generating viral short-form content.",
    },
    {
      name: "Alan AI",
      website: "https://alan-ai.vercel.app/",
      sourceCode: "https://github.com/glevi2004/alan-ai",
      tech: "NextJS | OpenAI | LangChain | TypeScript",
      description:
        "AI agent personal assistant that performs tasks and interacts with your applications.",
      details:
        "Built an intelligent AI assistant using Next.js and TypeScript, integrated OpenAI's GPT models through LangChain for natural language processing, and designed a system that can understand user requests and execute tasks across different applications and services.",
    },
    {
      name: "Talking Notes",
      website: "https://talking-notes.vercel.app/",
      sourceCode: "https://github.com/glevi2004/talking-notes",
      tech: "NextJS | OpenAI | PostgreSQL | Supabase",
      image: "/talkingnotes.png",
      description:
        "AI-powered notetaking app with voice-to-text and intelligent organization.",
      details:
        "Developed a Next.js application with TypeScript, integrated OpenAI API for intelligent summarization and organization, and managed user data and authentication through Supabase. PostgreSQL was used for data persistence, and the application featured voice-to-text capabilities and AI-driven note organization.",
    },
    {
      name: "Grantly AI",
      website: "https://grantly.vercel.app/",
      sourceCode: "https://github.com/glevi2004/grantly",
      tech: "NextJS | TypeScript | PostgreSQL | Supabase",
      description:
        "Grant discovery and application platform eliminating the need for expensive consultants.",
      details:
        "Built a comprehensive grant discovery and application platform using Next.js and TypeScript. The application streamlines the complex grant application process, providing searchable databases, application tracking, and automated workflows to help organizations secure funding without relying on costly consulting services.",
    },
    {
      name: "Draw Yo",
      website: "https://draw-yo.vercel.app/",
      sourceCode: "https://github.com/glevi2004/draw-yo",
      tech: "NextJS | TypeScript | Canvas API | WebRTC",
      description:
        "Virtual whiteboard for sketching diagrams and real-time collaboration - cheaper than Excalidraw and draw.io.",
      details:
        "Developed an interactive virtual whiteboard application using Next.js and TypeScript. Integrated Canvas API for drawing functionality and WebRTC for real-time collaboration. The platform enables users to create hand-drawn diagrams, brainstorm ideas, and work together in an intuitive, approachable interface. Positioned as a budget-friendly alternative to premium diagramming tools like Excalidraw and draw.io.",
    },
    {
      name: "Git Streaks",
      website: "https://gitstreaks.app/",
      sourceCode: "https://github.com/glevi2004/git-streaks",
      tech: "NextJS | TypeScript | GitHub API | GitLab API | PostgreSQL",
      description:
        "GitHub/GitLab integration that calculates user streaks and sends motivational messages to keep users coding.",
      details:
        "Built a streak tracking application that connects to GitHub and GitLab APIs to calculate user contribution streaks. Integrated messaging system to send motivational notifications and reminders to users, helping them maintain consistent coding habits and build momentum in their development journey.",
    },
    {
      name: "YourGPT",
      website: "https://yourgpt.app/",
      sourceCode: "https://github.com/glevi2004/yourgpt",
      tech: "NextJS | TypeScript | OpenAI | PostgreSQL | Subdomain Hosting",
      description:
        "Platform for creating custom chatbot webpages to gather information from users for interviews, support, and more.",
      details:
        "Developed a SaaS platform where users can create and customize chatbot webpages with specific instructions. The chatbots are hosted on subdomains and collect conversation data from visitors. Users get a dashboard to view gathered information, analytics, and insights from their chatbot interactions.",
    },
    {
      name: "FlightReels",
      website: "https://flightreels.app/",
      sourceCode: "https://github.com/glevi2004/flightreels",
      tech: "NextJS | TypeScript | React Native | Offline Storage | Video Processing",
      description:
        "Offline short-form content app for downloading and watching TikTok, Instagram Reels, and YouTube Shorts during flights.",
      details:
        "Built a cross-platform application that allows users to download short-form videos from popular social media platforms for offline viewing. The app features video processing, offline storage management, and a familiar reels-style interface optimized for travel scenarios where internet connectivity is limited.",
    },
  ],
  skills: {
    languages: [
      "Python",
      "Java",
      "JavaScript",
      "TypeScript",
      "SQL",
      "HTML5",
      "CSS",
      "C",
    ],
    developerTools: [
      "Linux",
      "Unix",
      "Azure",
      "Postman",
      "Docker",
      "Github",
      "Gitlab",
      "Firebase",
      "MongoDB",
      "Supabase",
      "Figma",
    ],
    librariesFrameworks: [
      "ExpressJS",
      "NodeJS",
      "ReactJS",
      "NextJS",
      "ReactNative",
      "Expo",
      "Django",
      "Flask",
      "PostgreSQL",
      "TailwindCSS",
    ],
  },
};

export default function Home() {
  const [expandedProjectDetails, setExpandedProjectDetails] = useState<{
    [key: string]: boolean;
  }>({});
  const [isTyping, setIsTyping] = useState(false);
  const [githubData, setGithubData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const response = await fetch("/api/github");
        const data = await response.json();
        if (data.success) {
          setGithubData(data.data);
        }
      } catch (error) {
        console.error("Failed to fetch GitHub data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  const toggleProjectDetails = (projectName: string) => {
    setExpandedProjectDetails((prev) => ({
      ...prev,
      [projectName]: !prev[projectName],
    }));
  };

  const handleTypingStart = () => {
    setIsTyping(true);
  };

  return (
    <div className="h-screen bg-background text-foreground transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4 pt-10 flex-row">
        {/* Profile Section */}
        <div className="flex items-start justify-between">
          {/* Profile Image and Info */}
          <div className="w-fit mr-6">
            <div className="flex flex-col items-center">
              <div className="w-30 h-30 rounded-full overflow-hidden border-2 border-blue-500 mb-3">
                <Image
                  src={resumeData.profile.image}
                  alt="Profile"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          {/* Profile Info */}

          <div className="flex-1 w-full flex flex-col justify-start">
            <div className="flex flex-col">
              <h2 className="text-lg font-bold text-foreground mt-2 mb-2">
                {resumeData.profileCard.name}
              </h2>
              <p className="text-md text-muted-foreground mb-2">
                {resumeData.profileCard.description}
              </p>
            </div>
            <div className="flex gap-2 mb-4">
              <AvatarGroupDemo />
            </div>
          </div>
        </div>
        {/* Education Section */}
        <div className="w-full mb-6">
          <div className="space-y-2">
            <div className="bg-card border border-border rounded-lg p-3 hover:shadow-sm transition-shadow">
              <div className="flex items-start gap-3 mb-2">
                <div className="flex-shrink-0">
                  <Image
                    src={resumeData.education.image}
                    alt="Boston University Logo"
                    width={120}
                    height={120}
                    className="rounded"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-base font-semibold text-foreground">
                      {resumeData.education.school}
                    </h3>
                    <span className="text-xs text-muted-foreground">
                      {resumeData.education.graduation}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-xs text-muted-foreground">
                      {resumeData.education.degree}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {resumeData.education.location}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <p className="text-xs text-muted-foreground mb-1 text-left">
                  Courses:
                </p>
                <div className="flex flex-wrap gap-1">
                  {resumeData.education.courses.map((course, index) => (
                    <span
                      key={index}
                      className="text-xs bg-accent px-2 py-1 rounded"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* GitHub Profile Section */}
        {!loading && githubData && (
          <div className="w-full mb-6">
            <h2 className="text-lg font-bold text-foreground mb-3">
              GitHub Profile
            </h2>
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-sm transition-shadow">
              <div className="flex items-start gap-6">
                {/* Avatar and Basic Info */}
                <div className="flex-shrink-0">
                  <img
                    src={githubData.profile.avatar_url}
                    alt={`${githubData.profile.name}'s avatar`}
                    className="w-24 h-24 rounded-full border-2 border-blue-500"
                  />
                </div>

                {/* Profile Details */}
                <div className="flex-1">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {githubData.profile.name}
                    </h3>
                    <p className="text-muted-foreground">
                      @{githubData.profile.username}
                    </p>
                    {githubData.profile.bio && (
                      <p className="text-sm text-muted-foreground mt-2">
                        {githubData.profile.bio}
                      </p>
                    )}
                    <p className="text-sm text-muted-foreground mt-2">
                      Member since{" "}
                      {new Date(
                        githubData.profile.created_at
                      ).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-foreground">
                        {githubData.profile.public_repos}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Repositories
                      </div>
                    </div>
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-foreground">
                        {githubData.profile.followers}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Followers
                      </div>
                    </div>
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-foreground">
                        {githubData.profile.following}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Following
                      </div>
                    </div>
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-foreground">
                        {githubData.stats.totalContributions}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Total Contributions
                      </div>
                    </div>
                  </div>

                  {/* Detailed Stats */}
                  <div className="mt-6 pt-6 border-t border-border">
                    <h4 className="text-md font-semibold text-foreground mb-3">
                      Activity Breakdown
                    </h4>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-lg font-semibold text-foreground">
                          {githubData.stats.totalCommits}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Commits
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-semibold text-foreground">
                          {githubData.stats.totalIssues}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Issues
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-semibold text-foreground">
                          {githubData.stats.totalPullRequests}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Pull Requests
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* GitHub Calendar */}
        {!loading && githubData && (
          <GitHubCalendarComponent username="glevi2004" />
        )}
        {/* Work Experience, Projects, and Technical Skills Accordion */}
        <Accordion type="single" collapsible className="w-full mb-4">
          <AccordionItem value="experience">
            <AccordionTrigger className="text-lg font-bold text-foreground">
              Work Experience
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                {resumeData.experience.map((job, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-lg p-3 hover:shadow-sm transition-shadow"
                  >
                    <div className="flex items-start gap-3 mb-2">
                      {job.image && (
                        <div className="flex-shrink-0">
                          <Image
                            src={job.image}
                            alt={`${job.company} Logo`}
                            width={60}
                            height={60}
                            className={
                              job.company === "Esurgi, Inc." ||
                              job.company === "Ernst & Young"
                                ? ""
                                : "rounded-full"
                            }
                          />
                        </div>
                      )}
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-base font-semibold text-foreground">
                            {job.position}
                          </h3>
                          <span className="text-xs text-muted-foreground">
                            {job.duration}
                          </span>
                        </div>
                        <p className="text-sm font-medium text-foreground mb-1">
                          {job.company} • {job.location}
                        </p>
                        <ul className="space-y-1">
                          {job.achievements.map(
                            (achievement, achievementIndex) => (
                              <li
                                key={achievementIndex}
                                className="text-xs text-muted-foreground leading-tight"
                              >
                                • {achievement}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="projects">
            <AccordionTrigger className="text-lg font-bold text-foreground">
              Projects
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex gap-4">
                <div className="flex-1 space-y-4">
                  {resumeData.projects
                    .filter((_, index) => index % 2 === 0)
                    .map((project, index) => (
                      <div
                        key={project.name}
                        className="bg-card border border-border rounded-lg p-3 hover:shadow-sm transition-shadow"
                      >
                        <div className="flex items-start gap-3 mb-2">
                          {project.image ? (
                            <div className="flex-shrink-0">
                              <Image
                                src={project.image}
                                alt={`${project.name} Logo`}
                                width={64}
                                height={64}
                                className="rounded"
                              />
                            </div>
                          ) : project.name === "Clipy AI" ? (
                            <div className="flex-shrink-0">
                              <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-[#F2C94C] text-black shadow-lg">
                                <Paperclip className="h-8 w-8" />
                              </div>
                            </div>
                          ) : project.name === "Alan AI" ? (
                            <div className="flex-shrink-0">
                              <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-blue-600 text-white shadow-lg">
                                <Pyramid className="h-8 w-8" />
                              </div>
                            </div>
                          ) : null}
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="text-base font-semibold text-foreground">
                                {project.name}
                              </h3>
                              <div className="flex gap-2">
                                <a
                                  href={project.website}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-xs text-blue-500 hover:underline"
                                >
                                  Website
                                </a>
                                {project.sourceCode && (
                                  <a
                                    href={project.sourceCode}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs text-blue-500 hover:underline"
                                  >
                                    Source
                                  </a>
                                )}
                              </div>
                            </div>
                            <p className="text-xs text-muted-foreground mb-2">
                              {project.tech}
                            </p>
                            <p className="text-xs text-muted-foreground leading-tight mb-1">
                              {project.description}
                            </p>
                            {expandedProjectDetails[project.name] && (
                              <div className="mt-2">
                                <p className="text-xs text-muted-foreground leading-tight">
                                  {project.details}
                                </p>
                              </div>
                            )}
                            <button
                              onClick={() => toggleProjectDetails(project.name)}
                              className="text-xs text-muted-foreground hover:text-foreground transition-colors mt-1 flex items-center gap-1"
                            >
                              {expandedProjectDetails[project.name] ? (
                                <>
                                  Hide Details
                                  <ChevronUp className="h-3 w-3" />
                                </>
                              ) : (
                                <>
                                  Show Details
                                  <ChevronDown className="h-3 w-3" />
                                </>
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
                <div className="flex-1 space-y-4">
                  {resumeData.projects
                    .filter((_, index) => index % 2 === 1)
                    .map((project, index) => (
                      <div
                        key={project.name}
                        className="bg-card border border-border rounded-lg p-3 hover:shadow-sm transition-shadow"
                      >
                        <div className="flex items-start gap-3 mb-2">
                          {project.image ? (
                            <div className="flex-shrink-0">
                              <Image
                                src={project.image}
                                alt={`${project.name} Logo`}
                                width={64}
                                height={64}
                                className="rounded"
                              />
                            </div>
                          ) : project.name === "Clipy AI" ? (
                            <div className="flex-shrink-0">
                              <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-[#F2C94C] text-black shadow-lg">
                                <Paperclip className="h-8 w-8" />
                              </div>
                            </div>
                          ) : project.name === "Alan AI" ? (
                            <div className="flex-shrink-0">
                              <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-blue-600 text-white shadow-lg">
                                <Pyramid className="h-8 w-8" />
                              </div>
                            </div>
                          ) : null}
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="text-base font-semibold text-foreground">
                                {project.name}
                              </h3>
                              <div className="flex gap-2">
                                <a
                                  href={project.website}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-xs text-blue-500 hover:underline"
                                >
                                  Website
                                </a>
                                {project.sourceCode && (
                                  <a
                                    href={project.sourceCode}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs text-blue-500 hover:underline"
                                  >
                                    Source
                                  </a>
                                )}
                              </div>
                            </div>
                            <p className="text-xs text-muted-foreground mb-2">
                              {project.tech}
                            </p>
                            <p className="text-xs text-muted-foreground leading-tight mb-1">
                              {project.description}
                            </p>
                            {expandedProjectDetails[project.name] && (
                              <div className="mt-2">
                                <p className="text-xs text-muted-foreground leading-tight">
                                  {project.details}
                                </p>
                              </div>
                            )}
                            <button
                              onClick={() => toggleProjectDetails(project.name)}
                              className="text-xs text-muted-foreground hover:text-foreground transition-colors mt-1 flex items-center gap-1"
                            >
                              {expandedProjectDetails[project.name] ? (
                                <>
                                  Hide Details
                                  <ChevronUp className="h-3 w-3" />
                                </>
                              ) : (
                                <>
                                  Show Details
                                  <ChevronDown className="h-3 w-3" />
                                </>
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="skills">
            <AccordionTrigger className="text-lg font-bold text-foreground">
              Technical Skills
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">
                    Languages
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {resumeData.skills.languages.map((skill) => (
                      <div
                        key={skill}
                        className="bg-card border border-border rounded-lg px-2 py-1 text-center hover:bg-accent transition-colors"
                      >
                        <span className="text-xs text-foreground font-medium">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">
                    Developer Tools
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {resumeData.skills.developerTools.map((tool) => (
                      <div
                        key={tool}
                        className="bg-card border border-border rounded-lg px-2 py-1 text-center hover:bg-accent transition-colors"
                      >
                        <span className="text-xs text-foreground font-medium">
                          {tool}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">
                    Libraries & Frameworks
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {resumeData.skills.librariesFrameworks.map((framework) => (
                      <div
                        key={framework}
                        className="bg-card border border-border rounded-lg px-2 py-1 text-center hover:bg-accent transition-colors"
                      >
                        <span className="text-xs text-foreground font-medium">
                          {framework}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>{" "}
        {/* Footer */}
        <footer className="text-center text-muted-foreground py-2 border-t border-border">
          <p className="text-xs">
            © 2024 {resumeData.profileCard.name}. Built with Next.js and
            Tailwind CSS.
          </p>
        </footer>
      </div>
    </div>
  );
}
