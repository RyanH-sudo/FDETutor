'use client';

import { MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface DialogueLine {
  speaker: 'customer' | 'engineer' | 'note';
  /** Who specifically (e.g. "VP Engineering", "the FDE") */
  label?: string;
  text: string;
  /** Optional annotation explaining what's happening */
  note?: string;
}

export interface DialogueExchangeProps {
  title?: string;
  lines: DialogueLine[];
  caption?: string;
}

/**
 * An annotated customer-engineer dialogue. Used to show what good
 * conversations look like and what each line is *doing*.
 */
export function DialogueExchange({ title, lines, caption }: DialogueExchangeProps) {
  return (
    <div className="my-6 rounded-lg border border-border bg-card overflow-hidden">
      <div className="border-b border-border px-4 py-2.5 bg-muted/30 flex items-center gap-2">
        <MessageSquare className="h-3.5 w-3.5 text-muted-foreground" />
        <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
          {title ?? 'Sample dialogue'}
        </span>
      </div>

      <div className="p-4 space-y-3">
        {lines.map((line, i) => {
          if (line.speaker === 'note') {
            return (
              <div key={i} className="text-xs italic text-muted-foreground font-serif border-l-2 border-muted pl-3 ml-4">
                {line.text}
              </div>
            );
          }
          const isCustomer = line.speaker === 'customer';
          return (
            <div key={i} className={cn('flex gap-3', isCustomer ? 'justify-start' : 'justify-end')}>
              <div className={cn('max-w-[80%]', isCustomer ? '' : 'text-right')}>
                <div className={cn(
                  'text-xs font-mono uppercase tracking-wider mb-1',
                  isCustomer ? 'text-customer/80' : 'text-primary/80'
                )}>
                  {line.label ?? (isCustomer ? 'Customer' : 'Engineer')}
                </div>
                <div className={cn(
                  'rounded-lg px-3.5 py-2 font-serif text-[1rem] leading-relaxed',
                  isCustomer ? 'bg-customer/10 border border-customer/30 text-foreground' : 'bg-primary/10 border border-primary/30 text-foreground'
                )}>
                  {line.text}
                </div>
                {line.note && (
                  <div className="text-xs italic text-muted-foreground mt-1 px-1 font-serif">
                    {line.note}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {caption && (
        <div className="border-t border-border bg-muted/20 px-4 py-2.5 text-xs text-muted-foreground italic font-serif">
          {caption}
        </div>
      )}
    </div>
  );
}
