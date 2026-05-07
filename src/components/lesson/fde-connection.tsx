'use client';

import { Briefcase } from 'lucide-react';
import type { ReactNode } from 'react';

export interface FDEConnectionProps {
  children: ReactNode;
}

/**
 * "How an FDE actually uses this" — links a concept to the real daily
 * practice of FDE work. Same shape as NetTutor's OpsConnection.
 */
export function FDEConnection({ children }: FDEConnectionProps) {
  return (
    <aside className="my-6 rounded-lg border border-customer/30 bg-customer/5 p-4">
      <div className="flex items-start gap-3">
        <div className="rounded-md bg-customer/15 p-1.5 mt-0.5">
          <Briefcase className="h-4 w-4 text-customer" />
        </div>
        <div className="flex-1">
          <div className="text-xs font-mono uppercase tracking-wider text-customer/80 mb-1.5">
            How an FDE uses this
          </div>
          <div className="font-serif text-[1.05rem] leading-relaxed text-foreground/90">{children}</div>
        </div>
      </div>
    </aside>
  );
}
