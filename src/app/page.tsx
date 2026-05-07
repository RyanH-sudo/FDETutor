import Link from 'next/link';
import { AppShell } from '@/components/shell/app-shell';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Briefcase, Compass } from 'lucide-react';
import { volumes, totalLessons, totalEstimatedHours } from '@/lib/lessons/volumes';
import { getFirstLesson } from '@/lib/lessons/registry';

export default function HomePage() {
  const firstLesson = getFirstLesson();
  const startHref = firstLesson ? `/lessons/${firstLesson.id}/` : '/lessons/';
  const total = totalLessons();
  const hours = totalEstimatedHours();

  return (
    <AppShell>
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <div className="animate-fade-in">
          <div className="text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground mb-4">Welcome</div>
          <h1 className="font-sans font-bold tracking-tight text-4xl md:text-6xl leading-tight mb-6">
            Learn the FDE Craft.
            <br />
            <span className="text-muted-foreground italic font-serif font-normal">From customer-facing zero to applied AI senior.</span>
          </h1>
          <p className="font-serif text-lg md:text-xl leading-relaxed text-foreground/80 max-w-2xl mb-8">
            FDETutor is a slow-paced learning suite for the Forward Deployed / Applied AI / Solutions Architect role. Every lesson explains <em>why</em> the work is shaped this way, <em>what</em> a senior engineer does in each situation, and <em>how</em> to talk about it in interviews. From "what is the FDE role" up to capstone customer-style engagements you ship to GitHub.
          </p>
          <div className="flex flex-wrap gap-3 mb-12">
            <Button asChild size="lg" className="gap-2">
              <Link href={startHref}>Begin <ArrowRight className="h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/glossary/">Browse glossary</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            <Stat label="Volumes" value="13" sublabel="from foundations to capstone" />
            <Stat label="Planned lessons" value={total.toString()} sublabel="paced for understanding" />
            <Stat label="Estimated hours" value={`~${hours}`} sublabel="of patient study" />
          </div>
        </div>

        <section className="border-t border-border pt-16">
          <h2 className="font-sans text-2xl font-semibold tracking-tight mb-8">How this is different</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard icon={BookOpen} title="Etymology built in" body="Every key term — FDE, RAG, harness, scoping, eval — comes with the story of where the word came from. Knowing why the words mean what they mean makes them stick." />
            <FeatureCard icon={Briefcase} title="Customer-style scenarios" body="Each volume includes scenario cards modeled on real customer engagements. You practice scoping, system design under constraints, and communication with executives, engineers, and end users." />
            <FeatureCard icon={Compass} title="Built for interviews" body="Volume 10 is a full mock-interview track. Each lesson includes 'Talk About It' framing — how to articulate concepts aloud the way an FDE interviewer expects." />
          </div>
        </section>

        <section className="border-t border-border pt-16 mt-16">
          <h2 className="font-sans text-2xl font-semibold tracking-tight mb-8">The thirteen volumes</h2>
          <div className="space-y-4">
            {volumes.map((v) => (
              <Link key={v.id} href={`/lessons/?volume=${v.id}`} className="block group">
                <article className="rounded-lg border border-border bg-card p-5 hover:border-primary/40 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="font-mono text-sm text-muted-foreground w-8 shrink-0 pt-1">{String(v.number).padStart(2, '0')}</div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-sans text-lg font-semibold tracking-tight group-hover:text-primary transition-colors">{v.title}</h3>
                      <p className="text-sm text-muted-foreground italic font-serif mb-2">{v.subtitle}</p>
                      <p className="font-serif text-[1rem] leading-relaxed text-foreground/80">{v.description}</p>
                      <div className="text-xs font-mono text-muted-foreground mt-3">{v.lessonCount} lessons · ~{v.estimatedHours} hours</div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </AppShell>
  );
}

function Stat({ label, value, sublabel }: { label: string; value: string; sublabel: string }) {
  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="text-3xl font-sans font-bold tracking-tight mt-1">{value}</div>
      <div className="text-xs text-muted-foreground italic font-serif mt-1">{sublabel}</div>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, body }: { icon: typeof BookOpen; title: string; body: string }) {
  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <div className="rounded-md bg-primary/10 p-2 w-fit mb-3"><Icon className="h-4 w-4 text-primary" /></div>
      <h3 className="font-sans font-semibold mb-2">{title}</h3>
      <p className="font-serif text-[0.95rem] leading-relaxed text-foreground/80">{body}</p>
    </div>
  );
}
