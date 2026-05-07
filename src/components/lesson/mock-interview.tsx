'use client';

import { useState } from 'react';
import { Mic, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { ReactNode } from 'react';

export interface MockInterviewProps {
  /** The interviewer's question */
  question: string;
  /** Setup line (e.g. "An Anthropic FDE interviewer asks…") */
  setup?: string;
  /** A checklist of points a strong answer would cover */
  checklist: string[];
  /** A worked sample answer */
  sample: ReactNode;
}

/**
 * An interview-prep prompt. Shows the question, lets the learner think
 * out loud, and then reveals a checklist of points and a sample answer.
 *
 * Pedagogy: do NOT show the sample first. The point is for the learner
 * to attempt the answer in their head before comparing.
 */
export function MockInterview({ question, setup, checklist, sample }: MockInterviewProps) {
  const [checklistShown, setChecklistShown] = useState(false);
  const [sampleShown, setSampleShown] = useState(false);

  return (
    <div className="my-8 rounded-lg border-2 border-warning/40 overflow-hidden">
      <div className="border-b border-warning/30 bg-warning/5 px-5 py-3 flex items-start gap-3">
        <Mic className="h-4 w-4 text-warning mt-0.5 shrink-0" />
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-warning/80 mb-0.5">Mock interview</div>
          {setup && <p className="text-sm text-muted-foreground italic font-serif">{setup}</p>}
        </div>
      </div>

      <div className="p-5">
        <div className="rounded-md bg-warning/10 border border-warning/30 px-4 py-3 mb-4">
          <div className="text-xs font-mono uppercase tracking-wider text-warning/80 mb-1">Interviewer</div>
          <p className="font-serif text-[1.05rem] leading-relaxed">{question}</p>
        </div>

        <p className="text-sm text-muted-foreground italic font-serif mb-4">
          Think for a moment. Talk it out loud if you can. Then reveal the checklist.
        </p>

        <div className="flex gap-2 flex-wrap">
          <Button size="sm" variant="outline" className="gap-1.5" onClick={() => setChecklistShown((v) => !v)}>
            {checklistShown ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
            {checklistShown ? 'hide checklist' : 'show what to cover'}
          </Button>
          <Button size="sm" variant="outline" className="gap-1.5" onClick={() => setSampleShown((v) => !v)}>
            {sampleShown ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
            {sampleShown ? 'hide sample answer' : 'show sample answer'}
          </Button>
        </div>

        {checklistShown && (
          <div className="mt-4 rounded-md border border-success/30 bg-success/5 p-4">
            <div className="text-xs font-mono uppercase tracking-wider text-success/80 mb-2">A strong answer covers</div>
            <ul className="space-y-1.5 list-disc pl-5">
              {checklist.map((point, i) => (
                <li key={i} className="font-serif text-foreground/85">{point}</li>
              ))}
            </ul>
          </div>
        )}

        {sampleShown && (
          <div className="mt-4 rounded-md border border-primary/30 bg-primary/5 p-4">
            <div className="text-xs font-mono uppercase tracking-wider text-primary/80 mb-2">Sample answer</div>
            <div className="font-serif text-[1rem] leading-relaxed text-foreground/90">{sample}</div>
          </div>
        )}
      </div>
    </div>
  );
}
