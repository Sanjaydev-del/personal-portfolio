
export interface Project {
  id: string;
  title: string;
  problem: string;
  description: string;
  techStack: string[];
  outcome: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  category: 'Frontend' | 'Backend' | 'Tools & Platforms';
  items: {
    name: string;
    icon: string;
    level: number; // 0 to 100
  }[];
}

export interface TimelineEvent {
  id: string;
  type: 'Education' | 'Experience';
  title: string;
  organization: string;
  period: string;
  description: string[];
}

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  icon: string;
}
