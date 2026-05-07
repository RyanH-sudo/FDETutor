'use client';

import { Layers } from 'lucide-react';
import type { ReactNode } from 'react';

export interface ArchitectureSketchProps {
  title?: string;
  caption?: string;
  /** Inline SVG content provided by the lesson author */
  children: ReactNode;
  width?: number;
  height?: number;
}

/**
 * A framed container for inline SVG architecture diagrams. Same pattern
 * as NetTutor's NetworkDiagram, but for FDE-style system designs.
 */
export function ArchitectureSketch({ title, caption, children, width = 600, height = 320 }: ArchitectureSketchProps) {
  return (
    <figure className="my-6 rounded-lg border border-border bg-card overflow-hidden">
      {title && (
        <div className="border-b border-border px-4 py-2.5 bg-muted/30 flex items-center gap-2">
          <Layers className="h-3.5 w-3.5 text-muted-foreground" />
          <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{title}</span>
        </div>
      )}
      <div className="p-4 overflow-x-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={`0 0 ${width} ${height}`}
          className="w-full max-w-full h-auto"
          style={{ fontFamily: 'var(--font-jetbrains), ui-monospace, monospace' }}
        >
          {children}
        </svg>
      </div>
      {caption && (
        <figcaption className="border-t border-border bg-muted/20 px-4 py-2.5 text-xs text-muted-foreground italic font-serif">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/** Convenience: a labeled box for a service/component */
export function Box({ x, y, w, h, label, sub, color = 'primary' }: {
  x: number; y: number; w: number; h: number;
  label: string; sub?: string;
  color?: 'primary' | 'customer' | 'history' | 'etymology';
}) {
  const colorMap: Record<string, string> = {
    primary: 'hsl(35, 80%, 42%)',
    customer: 'hsl(145, 60%, 38%)',
    history: 'hsl(200, 60%, 45%)',
    etymology: 'hsl(280, 50%, 50%)',
  };
  const stroke = colorMap[color] ?? colorMap.primary;
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={6}
            fill={`${stroke}26`} stroke={stroke} strokeWidth={1.5} />
      <text x={x + w / 2} y={y + h / 2 + (sub ? -4 : 4)} fontSize={13} fontWeight={600}
            textAnchor="middle" fill="currentColor">{label}</text>
      {sub && (
        <text x={x + w / 2} y={y + h / 2 + 12} fontSize={9} textAnchor="middle"
              fill="currentColor" opacity={0.7}>{sub}</text>
      )}
    </g>
  );
}

/** Convenience: an arrow between two points with optional label */
export function Arrow({ x1, y1, x2, y2, label }: { x1: number; y1: number; x2: number; y2: number; label?: string }) {
  const mx = (x1 + x2) / 2; const my = (y1 + y2) / 2;
  return (
    <g>
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" opacity={0.6} />
        </marker>
      </defs>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth={1.5} opacity={0.5} markerEnd="url(#arrowhead)" />
      {label && <text x={mx} y={my - 6} fontSize={10} textAnchor="middle" fill="currentColor" opacity={0.7}>{label}</text>}
    </g>
  );
}
