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
  img: string;
  categories: string[];
  description: string;
  timeTaken: string;
  startDate: string;
  completionDate: string;
  methods: string[];
  technologies: string[];
}

export const projects: Project[] = [
  {
    title: 'Innovative Digital Retail Platform',
    img: '/images/project-002.png',
    categories: ['E-commerce', 'Web Design & Development', 'SaaS'],
    description:
      'We built a groundbreaking e-commerce platform for our client, that seamlessly changes the digital selling narrative worldwide. With an intuitive user interface and secure payment gateways, this project revolutionizes online shopping.',
    timeTaken: '3 Months',
    startDate: 'January 2022',
    completionDate: 'April 2022',
    methods: ['Agile Development', 'User Testing', 'A/B Testing'],
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
  },
  {
    title: ' Enhanced Logistics Solutions for Small and Medium DIspatch Businesses',
    img: '/images/project-001.png',
    categories: ['Energy', 'Dashboard', 'Web App'],
    description:
      'Our client came to us with an idea to disrupt dispatch/courier services with technology in Nigeria. With a map and secure payment gateway, building 4 intuitive user interface apps.',
    timeTaken: '3 Months',
    startDate: 'March 2022',
    completionDate: 'June 2022',
    methods: ['Data Visualization', 'User Research'],
    technologies: ['Vue.js', 'D3.js', 'Python', 'PostgreSQL'],
  },
  // {
  //   title: "Mobile Fitness App",
  //   img: "/images/project-001.png",
  //   categories: ["Mobile App", "Health & Fitness"],
  //   description: "A fitness app offering personalized workout plans and tracking features, designed to improve user engagement with gamified elements.",
  //   timeTaken: "5 Months",
  //   startDate: "March 10, 2023",
  //   completionDate: "August 10, 2023",
  //   methods: ["Mobile Development", "Gamification", "User Feedback"],
  //   technologies: ["React Native", "Firebase", "TensorFlow Lite"]
  // },
];
