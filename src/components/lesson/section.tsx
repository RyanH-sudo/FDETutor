'use client';

import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

export interface SectionProps {
  label: string;
  icon?: string;
  children: ReactNode;
  dense?: boolean;
}

export function Section({ label, icon, children, dense }: SectionProps) {
  return (
    <section className={cn('my-10', dense && 'my-7')}>
      <div className="flex items-center gap-3 mb-4 select-none">
        <span className="h-px flex-1 bg-border" />
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
          {icon && <span className="mr-1">{icon}</span>}
          {label}
        </span>
        <span className="h-px flex-1 bg-border" />
      </div>
      <div>{children}</div>
    </section>
  );
}
