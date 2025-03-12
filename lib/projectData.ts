import {
  ShoppingCart,
  Globe,
  Cloud,
  Smartphone,
  Leaf,
  BarChart,
  Dumbbell,
  Briefcase,
  Zap,
  PenTool,
} from 'lucide-react';
import { type LucideIcon } from 'lucide-react';

export interface Category {
  name: string;
  icon: LucideIcon;
}

export const categories: Category[] = [
  { name: 'E-commerce', icon: ShoppingCart },
  { name: 'Web Design & Development', icon: Globe },
  { name: 'SaaS', icon: Cloud },
  { name: 'Mobile App', icon: Smartphone },
  { name: 'Energy', icon: Leaf },
  { name: 'Dashboard', icon: BarChart },
  { name: 'Health & Fitness', icon: Dumbbell },
  { name: 'Business', icon: Briefcase },
  { name: 'Technology', icon: Zap },
  { name: 'Design', icon: PenTool },
];
export interface Project {
  title: string;
  img: {
    asset: {
      url: string;
    };
    alt: string;
  };
  description: string;
  timeTaken: string;
  startDate: string;
  completionDate: string;
  methods: string[];
  technologies: string[];
  _id: string;
  categories: string[];
}

export interface ProjectsProp {
  projects: Project[];
}
