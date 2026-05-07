import type { LessonMetadata } from './types';
import { lessons as authoredLessons } from '@/content/registry';

export function getAllLessons(): LessonMetadata[] {
  return [...authoredLessons]
    .map((l) => l.metadata)
    .sort((a, b) => {
      const va = parseInt(a.volume.split('-')[1] ?? '0', 10);
      const vb = parseInt(b.volume.split('-')[1] ?? '0', 10);
      if (va !== vb) return va - vb;
      return a.number - b.number;
    });
}

export function getLessonsByVolume(volumeId: string): LessonMetadata[] {
  return getAllLessons().filter((l) => l.volume === volumeId);
}

export function getLessonById(id: string): LessonMetadata | undefined {
  return getAllLessons().find((l) => l.id === id);
}

export function getLessonNeighbors(id: string) {
  const all = getAllLessons();
  const idx = all.findIndex((l) => l.id === id);
  if (idx === -1) return { previous: null, next: null };
  return {
    previous: idx > 0 ? all[idx - 1] : null,
    next: idx < all.length - 1 ? all[idx + 1] : null,
  };
}

export function getFirstLesson(): LessonMetadata | undefined {
  return getAllLessons()[0];
}
