import type { LessonContent } from './types';
import { lessons as authoredLessons } from '@/content/registry';

export function loadLesson(id: string): LessonContent | null {
  const found = authoredLessons.find((l) => l.metadata.id === id);
  if (!found) return null;
  return { ...found.metadata, body: found.body, filepath: found.filepath };
}
