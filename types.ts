export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  letter: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  tags: string[];
}