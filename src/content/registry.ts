import type { LessonMetadata } from '@/lib/lessons/types';
import { parseFrontmatter } from './parse-frontmatter';

// Volume 0 — Welcome
import vol0_1 from './volume-00-welcome/00-1-the-letter.md';
import vol0_2 from './volume-00-welcome/00-2-how-to-use.md';
import vol0_3 from './volume-00-welcome/00-3-how-learning-works.md';
import vol0_4 from './volume-00-welcome/00-4-the-language-of-fdes.md';
import vol0_5 from './volume-00-welcome/00-5-history-in-brief.md';
import vol0_6 from './volume-00-welcome/00-6-fde-mindset.md';
import vol0_7 from './volume-00-welcome/00-7-mistakes-that-help.md';
import vol0_8 from './volume-00-welcome/00-8-the-pact.md';

// Volume 1 — The Role
import vol1_1 from './volume-01-the-role/01-1-what-an-fde-does.md';
import vol1_2 from './volume-01-the-role/01-2-customer-vs-product-engineering.md';
import vol1_3 from './volume-01-the-role/01-3-fde-vs-solutions-architect.md';
import vol1_4 from './volume-01-the-role/01-4-comp-bands.md';
import vol1_5 from './volume-01-the-role/01-5-career-trajectories.md';
import vol1_6 from './volume-01-the-role/01-6-the-three-companies.md';
import vol1_7 from './volume-01-the-role/01-7-typical-engagement-shape.md';
import vol1_8 from './volume-01-the-role/01-8-success-and-failure-modes.md';
import vol1_9 from './volume-01-the-role/01-9-tools-an-fde-uses.md';
import vol1_10 from './volume-01-the-role/01-10-volume-1-recap.md';

// Volume 2
import vol2_1 from './volume-02-customer-first/02-1-discovery-as-listening.md';

// Volume 3
import vol3_1 from './volume-03-system-design/03-1-design-under-constraints.md';

// Volume 4
import vol4_1 from './volume-04-ai-stack/04-1-how-llms-actually-work.md';

// Volume 5
import vol5_1 from './volume-05-rag/05-1-rag-introduction.md';

// Volume 6
import vol6_1 from './volume-06-agentic/06-1-when-agents.md';

// Volume 7
import vol7_1 from './volume-07-production/07-1-cost-monitoring.md';

// Volume 8
import vol8_1 from './volume-08-compliance/08-1-the-lethal-trifecta.md';

// Volume 9
import vol9_1 from './volume-09-communication/09-1-talking-to-executives.md';

// Volume 10
import vol10_1 from './volume-10-interviews/10-1-the-fde-interview-track.md';

// Volume 11
import vol11_1 from './volume-11-career/11-1-target-companies.md';

// Volume 12
import vol12_1 from './volume-12-capstone/12-1-overview.md';

const rawSources: { source: string; filepath: string }[] = [
  { source: vol0_1, filepath: 'volume-00-welcome/00-1-the-letter.md' },
  { source: vol0_2, filepath: 'volume-00-welcome/00-2-how-to-use.md' },
  { source: vol0_3, filepath: 'volume-00-welcome/00-3-how-learning-works.md' },
  { source: vol0_4, filepath: 'volume-00-welcome/00-4-the-language-of-fdes.md' },
  { source: vol0_5, filepath: 'volume-00-welcome/00-5-history-in-brief.md' },
  { source: vol0_6, filepath: 'volume-00-welcome/00-6-fde-mindset.md' },
  { source: vol0_7, filepath: 'volume-00-welcome/00-7-mistakes-that-help.md' },
  { source: vol0_8, filepath: 'volume-00-welcome/00-8-the-pact.md' },
  { source: vol1_1, filepath: 'volume-01-the-role/01-1-what-an-fde-does.md' },
  { source: vol1_2, filepath: 'volume-01-the-role/01-2-customer-vs-product-engineering.md' },
  { source: vol1_3, filepath: 'volume-01-the-role/01-3-fde-vs-solutions-architect.md' },
  { source: vol1_4, filepath: 'volume-01-the-role/01-4-comp-bands.md' },
  { source: vol1_5, filepath: 'volume-01-the-role/01-5-career-trajectories.md' },
  { source: vol1_6, filepath: 'volume-01-the-role/01-6-the-three-companies.md' },
  { source: vol1_7, filepath: 'volume-01-the-role/01-7-typical-engagement-shape.md' },
  { source: vol1_8, filepath: 'volume-01-the-role/01-8-success-and-failure-modes.md' },
  { source: vol1_9, filepath: 'volume-01-the-role/01-9-tools-an-fde-uses.md' },
  { source: vol1_10, filepath: 'volume-01-the-role/01-10-volume-1-recap.md' },
  { source: vol2_1, filepath: 'volume-02-customer-first/02-1-discovery-as-listening.md' },
  { source: vol3_1, filepath: 'volume-03-system-design/03-1-design-under-constraints.md' },
  { source: vol4_1, filepath: 'volume-04-ai-stack/04-1-how-llms-actually-work.md' },
  { source: vol5_1, filepath: 'volume-05-rag/05-1-rag-introduction.md' },
  { source: vol6_1, filepath: 'volume-06-agentic/06-1-when-agents.md' },
  { source: vol7_1, filepath: 'volume-07-production/07-1-cost-monitoring.md' },
  { source: vol8_1, filepath: 'volume-08-compliance/08-1-the-lethal-trifecta.md' },
  { source: vol9_1, filepath: 'volume-09-communication/09-1-talking-to-executives.md' },
  { source: vol10_1, filepath: 'volume-10-interviews/10-1-the-fde-interview-track.md' },
  { source: vol11_1, filepath: 'volume-11-career/11-1-target-companies.md' },
  { source: vol12_1, filepath: 'volume-12-capstone/12-1-overview.md' },
];

interface ParsedLesson {
  metadata: LessonMetadata;
  body: string;
  filepath: string;
}

function build(): ParsedLesson[] {
  return rawSources.map(({ source, filepath }) => {
    const { metadata, body } = parseFrontmatter(source);
    if (!metadata.id) {
      throw new Error(`Lesson at ${filepath} is missing 'id' in frontmatter.`);
    }
    return {
      metadata: {
        id: metadata.id as string,
        volume: metadata.volume ?? 'volume-00-welcome',
        chapter: (metadata.chapter as number) ?? 1,
        number: (metadata.number as number) ?? 1,
        title: metadata.title as string,
        subtitle: metadata.subtitle as string | undefined,
        estimatedMinutes: (metadata.estimatedMinutes as number) ?? 10,
        prerequisites: (metadata.prerequisites as string[]) ?? [],
        keyTerms: (metadata.keyTerms as string[]) ?? [],
        exerciseCount: (metadata.exerciseCount as number) ?? 0,
        checkpoint: (metadata.checkpoint as boolean) ?? false,
        tags: (metadata.tags as any) ?? ['theory'],
      } as LessonMetadata,
      body,
      filepath,
    };
  });
}

export const lessons: ParsedLesson[] = build();
