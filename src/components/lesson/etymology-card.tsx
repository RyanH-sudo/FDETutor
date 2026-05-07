'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { BookOpen, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface EtymologyCardProps {
  term: string;
  origin: string;
  rootForm: string;
  rootMeaning: string;
  story: string;
  entryToComputing?: string;
  insight?: string;
  defaultOpen?: boolean;
}

export function EtymologyCard({
  term,
  origin,
  rootForm,
  rootMeaning,
  story,
  entryToComputing,
  insight,
  defaultOpen = false,
}: EtymologyCardProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="my-6 rounded-lg border border-etymology/30 bg-etymology/5 overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className={cn(
          'w-full flex items-center justify-between px-4 py-3 text-left transition-colors hover:bg-etymology/10',
          open && 'bg-etymology/10'
        )}
        aria-expanded={open}
      >
        <span className="flex items-center gap-2.5">
          <BookOpen className="h-4 w-4 text-etymology" />
          <span className="text-xs font-mono uppercase tracking-wider text-etymology/80">Etymology</span>
          <span className="font-serif text-base italic text-foreground">{term}</span>
          <span className="text-xs text-muted-foreground font-sans">
            <span className="opacity-60">←</span> {origin}, <em>{rootForm}</em>
          </span>
        </span>
        <ChevronDown className={cn('h-4 w-4 text-muted-foreground transition-transform', open && 'rotate-180')} />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-1 space-y-4 font-serif text-[1.05rem] leading-relaxed">
              <div className="grid grid-cols-[max-content_1fr] gap-x-4 gap-y-1.5 text-sm">
                <span className="font-sans uppercase tracking-wider text-xs text-muted-foreground self-center">Origin</span>
                <span>{origin}</span>
                <span className="font-sans uppercase tracking-wider text-xs text-muted-foreground self-center">Root form</span>
                <span className="font-mono"><em>{rootForm}</em></span>
                <span className="font-sans uppercase tracking-wider text-xs text-muted-foreground self-center">Literal meaning</span>
                <span>"{rootMeaning}"</span>
              </div>
              <p className="text-foreground/90">{story}</p>
              {entryToComputing && (
                <div className="border-l-2 border-etymology/40 pl-4 py-1">
                  <div className="text-xs font-sans uppercase tracking-wider text-muted-foreground mb-1">Into networking</div>
                  <p className="text-foreground/85 text-[1rem]">{entryToComputing}</p>
                </div>
              )}
              {insight && (
                <div className="border-l-2 border-primary/50 pl-4 py-1">
                  <div className="text-xs font-sans uppercase tracking-wider text-muted-foreground mb-1">Why this matters</div>
                  <p className="text-foreground/85 text-[1rem]">{insight}</p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
