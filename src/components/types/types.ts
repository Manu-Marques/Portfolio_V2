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
  mission: {
    id: number;
    title: string;
    company: string;
    city: string;
    description: string;
    description_1: string;
    description_2: string;
    description_3: string;
    start: string;
    end: string;
    year: string;
  };
  oclock: {
    id: number;
    title: string;
    company: string;
    city: string;
    description: string;
    description_1: string;
    description_2: string;
    description_3: string;
    start: string;
    end: string;
    year: string;
  };
  bus: {
    id: number;
    title: string;
    company: string;
    city: string;
    description: string;
    description_1: string;
    description_2: string;
    description_3: string;
    start: string;
    end: string;
    year: string;
  };
  stage: {
    id: number;
    title: string;
    company: string;
    city: string;
    description: string;
    description_1: string;
    description_2: string;
    description_3: string;
    start: string;
    end: string;
    year: string;
  };
}

export interface DisplayProps {
  addClassDisplay: boolean;
  removeExtendClass: () => void
}
