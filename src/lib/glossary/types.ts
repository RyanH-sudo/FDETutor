export interface GlossaryEntry {
  term: string;
  display?: string;
  origin?: string;
  rootForm?: string;
  rootMeaning?: string;
  brief: string;
  long?: string;
  introducedIn?: string[];
  category: GlossaryCategory;
  aliases?: string[];
}

export type GlossaryCategory = 'role' | 'concept' | 'tool' | 'compliance' | 'pattern' | 'industry';
