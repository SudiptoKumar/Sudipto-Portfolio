import { ScrollTimeline } from "../lightswind/scroll-timeline";
import { Briefcase, Bot, BookOpen, Users } from "lucide-react";

export const CareerTimeline = () => {
  const careerEvents = [
    { year: "2023 – 2027 (Expected)", title: "BBA, Finance and Banking", subtitle: "Patuakhali Science and Technology University", description: "Studying Finance and Banking with coursework in financial analysis, financial accounting, banking and financial services, investment fundamentals, quantitative analysis, and business research.", icon: <BookOpen className="h-4 w-4 mr-2 text-primary" /> },
    { year: "Sep 2026 – Present", title: "Co-Director of Marketing & Branding", subtitle: "Finance Club PSTU", description: "Run the club's workshop program end-to-end: 2 workshops delivered with 150+ participants. Lead a 2-person team running the club's brand and outreach. Built a workshop automation system (Apps Script + Google Sheets) handling registration, certificates, and email.", icon: <Briefcase className="h-4 w-4 mr-2 text-primary" /> },
    { year: "2025 – Present", title: "Newsroom Automation Platform", subtitle: "Python · Telegram Bot API · GitHub Actions", description: "Built an automated pipeline that collects and ranks news articles, removing duplicates before publishing to multiple topic-focused Telegram channels, with scheduled execution, API failover, event-based duplicate protection, and image fallback handling.", icon: <Bot className="h-4 w-4 mr-2 text-primary" /> },
    { year: "2025 – Present", title: "StudyMart Digital Product Platform", subtitle: "Next.js · TypeScript · PostgreSQL", description: "Designing a mobile-first digital product platform covering storefront, payment processing, and order workflows, with a PostgreSQL-backed production-oriented architecture.", icon: <Briefcase className="h-4 w-4 mr-2 text-primary" /> },
    { year: "2025 – Present", title: "Study Campus OS", subtitle: "AI-Assisted Study Workflow · Prompt Engineering", description: "Built a structured framework that converts raw academic material into exam-ready notes, revision sheets, and retrieval-focused practice content using prompt engineering.", icon: <BookOpen className="h-4 w-4 mr-2 text-primary" /> },
    { year: "2016 – 2017", title: "Academic Achievements", subtitle: "General Knowledge & Debate", description: "First Place in a General Knowledge Competition (2016) and Second Place in an Inter-School Debate Tournament (2017).", icon: <Users className="h-4 w-4 mr-2 text-primary" /> },
  ];

  return (
    <div id="career">
      <ScrollTimeline
        events={careerEvents}
        title="Activities & Experience"
        subtitle="An evolving path combining business education, practical technology projects, and automation work"
        animationOrder="staggered"
        cardAlignment="alternating"
        cardVariant="elevated"
        parallaxIntensity={0.15}
        revealAnimation="fade"
        progressIndicator={true}
        lineColor="bg-primary/20"
        activeColor="bg-primary"
        progressLineWidth={3}
        progressLineCap="round"
      />
    </div>
  );
};
