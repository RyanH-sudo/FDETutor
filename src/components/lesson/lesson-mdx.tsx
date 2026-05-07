'use client';

import { useEffect, useState } from 'react';
import { MDXRemote, type MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import { mdxComponents } from './mdx-components';

export function LessonMDX({ source }: { source: string }) {
  const [serialized, setSerialized] = useState<MDXRemoteSerializeResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setSerialized(null);
    setError(null);
    serialize(source, { mdxOptions: { remarkPlugins: [remarkGfm] } })
      .then((r) => { if (!cancelled) setSerialized(r); })
      .catch((e: Error) => { if (!cancelled) setError(e.message); });
    return () => { cancelled = true; };
  }, [source]);

  if (error) {
    return (
      <div className="rounded border border-destructive bg-destructive/10 p-4 font-mono text-sm">
        Failed to render lesson: {error}
      </div>
    );
  }

  if (!serialized) {
    return <div className="text-muted-foreground text-sm font-mono">rendering lesson…</div>;
  }

  return <MDXRemote {...serialized} components={mdxComponents} />;
}
