'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, Eye, EyeOff, ClipboardList } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { ReactNode } from 'react';

export interface ExerciseProps {
  title: string;
  prompt: ReactNode;
  /** Hints, revealed one at a time */
  hints?: string[];
  /** Reference answer, hidden until requested */
  answer?: ReactNode;
}

/**
 * A self-paced exercise.
 *
 * NetTutor exercises are open-ended (subnet this address, identify the
 * misconfiguration, predict the output) so they don't run code. The
 * learner thinks, checks the hint, eventually reveals the answer, and
 * compares.
 */
export function Exercise({ title, prompt, hints = [], answer }: ExerciseProps) {
  const [hintsRevealed, setHintsRevealed] = useState(0);
  const [answerShown, setAnswerShown] = useState(false);

  return (
    <div className="my-8 rounded-lg border-2 border-primary/30 overflow-hidden">
      <div className="border-b border-primary/20 bg-primary/5 px-5 py-3 flex items-center gap-2">
        <ClipboardList className="h-4 w-4 text-primary" />
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-primary/80">Exercise</div>
          <h4 className="font-sans text-base font-semibold">{title}</h4>
        </div>
      </div>

      <div className="p-5">
        <div className="font-serif text-[1.05rem] leading-relaxed text-foreground mb-4">{prompt}</div>

        {hints.length > 0 && (
          <div className="mt-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                Hints ({hintsRevealed} / {hints.length})
              </span>
              {hintsRevealed < hints.length && (
                <Button
                  size="sm"
                  variant="ghost"
                  className="gap-1.5 h-7 text-xs"
                  onClick={() => setHintsRevealed((v) => v + 1)}
                >
                  <Lightbulb className="h-3.5 w-3.5" />
                  reveal next hint
                </Button>
              )}
            </div>
            <AnimatePresence>
              {hints.slice(0, hintsRevealed).map((hint, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="rounded-md bg-muted/40 px-4 py-2.5 mb-2 text-sm font-serif italic text-muted-foreground">
                    Hint {i + 1}: {hint}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {answer && (
          <div className="mt-4">
            <Button
              size="sm"
              variant="outline"
              className="gap-1.5"
              onClick={() => setAnswerShown((v) => !v)}
            >
              {answerShown ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
              {answerShown ? 'hide reference answer' : 'show reference answer'}
            </Button>
            <AnimatePresence>
              {answerShown && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="mt-3 rounded-md bg-success/10 border border-success/30 p-4">
                    <div className="text-xs font-mono uppercase tracking-wider text-success/80 mb-2">
                      Reference answer
                    </div>
                    <div className="font-serif text-[1rem] leading-relaxed text-foreground">
                      {answer}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}
