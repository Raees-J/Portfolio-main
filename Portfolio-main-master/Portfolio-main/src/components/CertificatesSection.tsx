import React from "react";
import { InfiniteMovingCards } from "./InfiniteMovingCards";

const certificates = [
  {
    title: "Introduction to Cyber Security",
    issuer: "Certified Training",
    date: "Certificate of Completion",
    image: "/assets/Introduction to cyber security.jpg",
    description: "Comprehensive introduction to cybersecurity fundamentals, covering threat analysis, security protocols, and best practices for protecting digital assets.",
  },
  {
    title: "Advanced SQL: Project Design and Manage a Database",
    issuer: "LinkedIn Learning",
    date: "Certificate of Completion",
    image: "/assets/advanced-sql.png",
    description: "Advanced database design principles, optimization techniques, and complex query development for enterprise-level database management.",
  },
  {
    title: "Agile Testing",
    issuer: "LinkedIn Learning",
    date: "Certificate of Completion",
    image: "/assets/agile-testing.png",
    description: "Modern agile testing methodologies, test-driven development, and continuous integration practices for software quality assurance.",
  },
  {
    title: "Blockchain Basics",
    issuer: "LinkedIn Learning",
    date: "Certificate of Completion",
    image: "/assets/blockchain.png",
    description: "Foundational understanding of blockchain technology, distributed ledgers, smart contracts, and cryptocurrency principles.",
  },
  {
    title: "Level Up: Advanced SQL",
    issuer: "LinkedIn Learning",
    date: "Certificate of Completion",
    image: "/assets/level-up-sql.png",
    description: "Mastery of advanced SQL techniques including window functions, CTEs, subqueries, and performance optimization strategies.",
  },
  {
    title: "Programming Foundations: Software Testing/QA",
    issuer: "LinkedIn Learning",
    date: "Certificate of Completion",
    image: "/assets/software-testing.png",
    description: "Comprehensive software testing fundamentals covering unit testing, integration testing, QA processes, and defect management.",
  },
  {
    title: "Project Management Foundations: Requirements",
    issuer: "LinkedIn Learning",
    date: "Certificate of Completion",
    image: "/assets/project-management.png",
    description: "Essential project management skills focusing on requirements gathering, stakeholder analysis, and project scope definition.",
  },
  {
    title: "Software Architecture Foundations",
    issuer: "LinkedIn Learning",
    date: "Certificate of Completion",
    image: "/assets/software-architecture.png",
    description: "Core principles of software architecture, design patterns, system scalability, and architectural decision-making frameworks.",
  },
  {
    title: "Coursera Certified",
    issuer: "Coursera",
    date: "EWL4XLMU69PA",
    image: "/assets/coursera-1.png",
    description: "Specialized certification demonstrating proficiency in advanced technical concepts and practical application of industry standards.",
  },
  {
    title: "Coursera Certified",
    issuer: "Coursera",
    date: "U1K88S4WE6WA",
    image: "/assets/coursera-2.png",
    description: "Professional certification validating expertise in cutting-edge technologies and modern software development practices.",
  },
];

export const CertificatesSection = () => {
  return (
    <section id="certificates" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuously learning and growing my skills through industry-recognized certifications
          </p>
        </div>

        <div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={certificates}
            direction="left"
            speed="normal"
          />
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
