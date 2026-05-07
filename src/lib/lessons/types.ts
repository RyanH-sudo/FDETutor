/**
 * Lesson types for FDETutor.
 */

export type VolumeId =
  | 'volume-00-welcome'
  | 'volume-01-the-role'
  | 'volume-02-customer-first'
  | 'volume-03-system-design'
  | 'volume-04-ai-stack'
  | 'volume-05-rag'
  | 'volume-06-agentic'
  | 'volume-07-production'
  | 'volume-08-compliance'
  | 'volume-09-communication'
  | 'volume-10-interviews'
  | 'volume-11-career'
  | 'volume-12-capstone';

export interface Volume {
  id: VolumeId;
  number: number;
  title: string;
  subtitle: string;
  description: string;
  estimatedHours: number;
  lessonCount: number;
}

export interface LessonMetadata {
  id: string;
  volume: VolumeId;
  chapter: number;
  number: number;
  title: string;
  subtitle?: string;
  estimatedMinutes: number;
  prerequisites: string[];
  keyTerms: string[];
  exerciseCount: number;
  checkpoint: boolean;
  tags: LessonTag[];
}

export type LessonTag =
  | 'theory'
  | 'practice'
  | 'history'
  | 'etymology'
  | 'customer'
  | 'interview'
  | 'capstone';

export interface LessonContent extends LessonMetadata {
  body: string;
  filepath: string;
}

export interface LessonState {
  lessonId: string;
  status: 'not-started' | 'in-progress' | 'completed';
  startedAt: number | null;
  completedAt: number | null;
  exercisesPassed: number;
  exercisesTotal: number;
  notes: string;
  mastery: number;
}
