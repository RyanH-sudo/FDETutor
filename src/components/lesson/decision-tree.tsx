'use client';

import { GitBranch } from 'lucide-react';
import type { ReactNode } from 'react';

export interface DecisionNode {
  question: string;
  branches: { label: string; outcome: ReactNode }[];
}

export interface DecisionTreeProps {
  title: string;
  /** A single root question with branches; for deeper trees, branches can themselves be decisions. */
  root: DecisionNode;
  caption?: string;
}

/**
 * A simple decision tree for system design choices. Renders as a question
 * at the top with labeled branches below.
 */
export function DecisionTree({ title, root, caption }: DecisionTreeProps) {
  return (
    <div className="my-6 rounded-lg border border-primary/30 bg-primary/5 overflow-hidden">
      <div className="border-b border-primary/20 bg-primary/10 px-4 py-2.5 flex items-center gap-2">
        <GitBranch className="h-3.5 w-3.5 text-primary" />
        <span className="font-mono text-xs uppercase tracking-wider text-primary/80">{title}</span>
      </div>

      <div className="p-5">
        <div className="text-center mb-4">
          <div className="inline-block rounded-md bg-primary/15 border border-primary/30 px-4 py-2 font-serif text-[1.05rem] font-medium">
            {root.question}
          </div>
        </div>

        <div className="grid gap-3" style={{ gridTemplateColumns: `repeat(${root.branches.length}, 1fr)` }}>
          {root.branches.map((b, i) => (
            <div key={i} className="rounded-md border border-border bg-card p-4">
              <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1.5">
                If: {b.label}
              </div>
              <div className="font-serif text-[0.95rem] leading-relaxed text-foreground/85">
                {b.outcome}
              </div>
            </div>
          ))}
        </div>
      </div>

      {caption && (
        <div className="border-t border-primary/20 bg-primary/5 px-4 py-2.5 text-xs text-muted-foreground italic font-serif">
          {caption}
        </div>
      )}
    </div>
  );
}
