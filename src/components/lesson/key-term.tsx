'use client';

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import type { ReactNode } from 'react';

export interface KeyTermProps {
  term: string;
  brief: string;
  children: ReactNode;
}

export function KeyTerm({ term, brief, children }: KeyTermProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <span className="etymology-term" tabIndex={0} aria-label={`Definition of ${term}`}>
          {children}
        </span>
      </PopoverTrigger>
      <PopoverContent className="w-80" sideOffset={8}>
        <div className="space-y-1.5">
          <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">{term}</div>
          <p className="font-serif text-sm leading-relaxed">{brief}</p>
        </div>
      </PopoverContent>
    </Popover>
  );
}
