export interface Project {
  id: number;
  title: string;
  description: string;
  stack: string;
  stack_1: string;
  stack_2: string;
  stack_3: string;
  link: string;
  image: string;
}

export interface Site {
  id: number;
  title: string;
  description: string;
  stack: string;
  stack_1: string;
  stack_2: string;
  stack_3: string;
  link: string;
  image: string;
  recommandation: string;
  recommandation_1: string;
}

export interface Experience {
  id: number;
  number: number;
  title: string;
  status: string;
  company: string;
  city: string;
  description: string;
  description_1: string;
  description_2: string;
  description_3: string;
  image: string;
  start: string;
  end: string;
  year: string;
  recommandation: string;
}

export interface DisplayProps {
  addClassDisplay: boolean;
  removeExtendClass: () => void;
}
