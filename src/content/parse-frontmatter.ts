import type { LessonMetadata } from '@/lib/lessons/types';

/**
 * Tiny YAML frontmatter parser. Handles strings, numbers, booleans, and
 * single-line arrays. No external dependency, works in the browser.
 */
export function parseFrontmatter(raw: string): {
  metadata: Partial<LessonMetadata>;
  body: string;
} {
  if (!raw.startsWith('---')) return { metadata: {}, body: raw };
  const endMarker = raw.indexOf('\n---', 3);
  if (endMarker === -1) return { metadata: {}, body: raw };

  const fmText = raw.slice(3, endMarker).trim();
  const body = raw.slice(endMarker + 4).replace(/^\s*\n/, '');

  const metadata: Record<string, unknown> = {};
  const lines = fmText.split('\n');
  for (const line of lines) {
    if (!line.trim() || line.trim().startsWith('#')) continue;
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx).trim();
    let valueText = line.slice(colonIdx + 1).trim();

    if ((valueText.startsWith('"') && valueText.endsWith('"')) ||
        (valueText.startsWith("'") && valueText.endsWith("'"))) {
      valueText = valueText.slice(1, -1);
    }

    if (valueText.startsWith('[') && valueText.endsWith(']')) {
      const inside = valueText.slice(1, -1).trim();
      if (!inside) {
        metadata[key] = [];
      } else {
        metadata[key] = inside.split(',').map((s) => {
          s = s.trim();
          if ((s.startsWith('"') && s.endsWith('"')) || (s.startsWith("'") && s.endsWith("'"))) {
            return s.slice(1, -1);
          }
          return s;
        });
      }
      continue;
    }

    if (valueText === 'true') { metadata[key] = true; continue; }
    if (valueText === 'false') { metadata[key] = false; continue; }
    if (/^-?\d+(\.\d+)?$/.test(valueText)) {
      metadata[key] = parseFloat(valueText);
      continue;
    }
    metadata[key] = valueText;
  }

  return { metadata: normalizeKeys(metadata) as Partial<LessonMetadata>, body };
}

function normalizeKeys(raw: Record<string, unknown>): Record<string, unknown> {
  const map: Record<string, string> = {
    estimatedMinutes: 'estimatedMinutes',
    estimated_minutes: 'estimatedMinutes',
    keyTerms: 'keyTerms',
    key_terms: 'keyTerms',
    exerciseCount: 'exerciseCount',
    exercise_count: 'exerciseCount',
  };
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(raw)) {
    out[map[k] ?? k] = v;
  }
  return out;
}
