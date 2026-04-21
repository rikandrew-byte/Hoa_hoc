export interface Question {
  id: string;
  text: string;
  options: string[];
  correctOption: number;
  explanation: string;
}

export interface Lesson {
  id: string;
  title: string;
  content: string;
  exercises?: Question[];
}

export interface Chapter {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Element {
  symbol: string;
  name: string;
  atomicNumber: number;
  atomicMass: number;
  category: 'metal' | 'non-metal' | 'gas' | 'rare-gas';
}
