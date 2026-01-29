
import React from 'react';
import { 
  Code2, 
  Terminal, 
  Cpu, 
  Globe, 
  Database, 
  Cloud, 
  Award, 
  GraduationCap, 
  Briefcase 
} from 'lucide-react';
import { Project, Skill, TimelineEvent, Achievement } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Nexus Cloud Dashboard',
    problem: 'Enterprises lacked a unified view of multi-cloud resource health.',
    description: 'Developed a real-time monitoring dashboard with advanced data visualization and incident alerting.',
    techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
    outcome: 'Reduced incident response time by 30% for a pilot group of 50 users.',
    image: 'https://picsum.photos/seed/nexus/800/600',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: '2',
    title: 'AI Smart Recruiter',
    problem: 'HR teams spent 20+ hours weekly manual sorting through irrelevant resumes.',
    description: 'Built an NLP-powered engine that ranks candidates based on project complexity and semantic fit.',
    techStack: ['Python', 'Gemini API', 'Next.js', 'Tailwind CSS'],
    outcome: 'Improved candidate screening efficiency by 65% with 92% accuracy in skill mapping.',
    image: 'https://picsum.photos/seed/recruiter/800/600',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: '3',
    title: 'SafeStream Finance',
    problem: 'Cryptocurrency transactions often fail due to high slippage and lack of transparency.',
    description: 'Created a decentralized payment gateway with real-time slippage protection and audit trails.',
    techStack: ['Solidity', 'Ethers.js', 'React', 'Firebase'],
    outcome: 'Successfully processed $10k+ in testnet transactions with zero slippage-related failures.',
    image: 'https://picsum.photos/seed/finance/800/600',
    liveUrl: '#',
    githubUrl: '#'
  }
];

export const SKILLS: Skill[] = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: 'Globe', level: 95 },
      { name: 'TypeScript', icon: 'Code2', level: 90 },
      { name: 'Tailwind CSS', icon: 'Cpu', level: 95 },
      { name: 'Next.js', icon: 'Globe', level: 85 }
    ]
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: 'Terminal', level: 88 },
      { name: 'Python', icon: 'Terminal', level: 82 },
      { name: 'PostgreSQL', icon: 'Database', level: 85 },
      { name: 'GraphQL', icon: 'Database', level: 75 }
    ]
  },
  {
    category: 'Tools & Platforms',
    items: [
      { name: 'Docker', icon: 'Cloud', level: 80 },
      { name: 'AWS', icon: 'Cloud', level: 75 },
      { name: 'Git/GitHub', icon: 'Terminal', level: 95 },
      { name: 'CI/CD', icon: 'Cpu', level: 82 }
    ]
  }
];

export const TIMELINE: TimelineEvent[] = [
  {
    id: 'exp1',
    type: 'Experience',
    title: 'Software Engineer Intern',
    organization: 'Technosprint Info Solution',
    period: 'Sept 2025 - Present',
    description: [
      'Collaborating on a scalable SaaS platform using React and Node.js.',
      'Optimizing API endpoints resulting in a 15% reduction in latency.',
      'Participating in daily standups and peer code reviews.'
    ]
  },
  {
    id: 'edu1',
    type: 'Education',
    title: 'B.Tech Computer and Communication Engineering',
    organization: 'University of Technology',
    period: '2025 - 2029 (Expected)',
    description: [
      'Focusing on Algorithms, Machine Learning, and Cloud Computing.',
      'Maintaining a 8.9 GPA.',
      'Active member of the ACM Student Chapter.'
    ]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'a1',
    title: '1st Place Winner - HackGenesis',
    issuer: 'Google Developer Group',
    date: 'Dec 2023',
    description: 'Led a team of 4 to build an AI-driven disaster relief app in 48 hours.',
    icon: 'Award'
  },
  {
    id: 'a2',
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'Aug 2023',
    description: 'Validated foundational knowledge of AWS Cloud platform and services.',
    icon: 'Cloud'
  },
  {
    id: 'a3',
    title: 'Open Source Contributor',
    issuer: 'Various Projects',
    date: 'Ongoing',
    description: 'Contributed 50+ PRs to popular React and Tailwind libraries.',
    icon: 'Terminal'
  }
];
