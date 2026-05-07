'use client';

import { Briefcase } from 'lucide-react';
import type { ReactNode } from 'react';

export interface ScenarioCardProps {
  title: string;
  /** The customer industry/segment (e.g. "Healthcare provider, 5,000 employees") */
  context: string;
  /** What the customer is asking for in their words */
  ask: string;
  /** What you, the FDE, need to figure out */
  children: ReactNode;
}

/**
 * A customer-style scenario brief. Used throughout the customer-first
 * volume to practice scoping ambiguous requests.
 */
export function ScenarioCard({ title, context, ask, children }: ScenarioCardProps) {
  return (
    <div className="my-8 rounded-lg border-2 border-customer/40 overflow-hidden">
      <div className="border-b border-customer/30 bg-customer/5 px-5 py-3 flex items-start gap-3">
        <Briefcase className="h-4 w-4 text-customer mt-0.5 shrink-0" />
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-customer/80 mb-0.5">Customer scenario</div>
          <h4 className="font-sans text-base font-semibold">{title}</h4>
        </div>
      </div>

      <div className="p-5 space-y-4">
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">Context</div>
          <p className="font-serif text-foreground/90 italic">{context}</p>
        </div>
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">The ask</div>
          <p className="font-serif text-foreground/90 border-l-2 border-customer/40 pl-3">"{ask}"</p>
        </div>
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">Your work</div>
          <div className="font-serif text-[1.05rem] leading-relaxed text-foreground/90">{children}</div>
        </div>
      </div>
    </div>
  );
}
