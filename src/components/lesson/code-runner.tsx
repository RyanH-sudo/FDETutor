'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { Play, RotateCcw, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { runPython, getPyodide, type RunResult } from '@/lib/runtime/pyodide';

const MonacoEditor = dynamic(() => import('@monaco-editor/react').then((m) => m.default), {
  ssr: false,
  loading: () => <div className="flex h-full items-center justify-center bg-card text-muted-foreground"><Loader2 className="h-5 w-5 animate-spin" /><span className="ml-2 text-sm">loading editor…</span></div>,
});

export interface CodeRunnerProps {
  initial: string;
  title?: string;
  rows?: number;
  readonly?: boolean;
  caption?: string;
}

export function CodeRunner({ initial, title, rows = 8, readonly = false, caption }: CodeRunnerProps) {
  const [code, setCode] = useState(initial);
  const [running, setRunning] = useState(false);
  const [result, setResult] = useState<RunResult | null>(null);
  const [pyStatus, setPyStatus] = useState<'idle' | 'loading' | 'ready'>('idle');
  const initialRef = useRef(initial);

  useEffect(() => {
    let cancelled = false;
    setPyStatus('loading');
    getPyodide().then(() => { if (!cancelled) setPyStatus('ready'); }).catch(() => { if (!cancelled) setPyStatus('idle'); });
    return () => { cancelled = true; };
  }, []);

  const onRun = async () => {
    setRunning(true);
    const r = await runPython(code);
    setResult(r);
    setRunning(false);
  };

  const onReset = () => { setCode(initialRef.current); setResult(null); };

  return (
    <div className="my-6 rounded-lg border border-border overflow-hidden bg-card">
      {title && (
        <div className="border-b border-border px-4 py-2.5 bg-muted/30">
          <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{title}</div>
        </div>
      )}

      <div style={{ height: `${rows * 22 + 16}px` }}>
        <MonacoEditor
          height="100%"
          defaultLanguage="python"
          value={code}
          onChange={(v) => setCode(v ?? '')}
          theme="vs-dark"
          options={{
            readOnly: readonly,
            minimap: { enabled: false },
            fontSize: 14,
            fontFamily: 'JetBrains Mono, ui-monospace, monospace',
            scrollBeyondLastLine: false,
            lineNumbers: 'on',
            tabSize: 4,
            insertSpaces: true,
            padding: { top: 8, bottom: 8 },
          }}
        />
      </div>

      <div className="flex items-center justify-between border-t border-border px-3 py-2 bg-muted/20">
        <div className="flex items-center gap-2">
          <Button size="sm" onClick={onRun} disabled={running || pyStatus !== 'ready' || readonly} className="gap-1.5">
            {running ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Play className="h-3.5 w-3.5 fill-current" />}
            {running ? 'running' : 'run'}
          </Button>
          <Button size="sm" variant="ghost" onClick={onReset} disabled={running || readonly} className="gap-1.5">
            <RotateCcw className="h-3.5 w-3.5" />
            reset
          </Button>
        </div>
        <div className="text-xs text-muted-foreground font-mono">
          {pyStatus === 'loading' && (
            <span className="flex items-center gap-1.5">
              <Loader2 className="h-3 w-3 animate-spin" />
              loading python…
            </span>
          )}
          {pyStatus === 'ready' && result && <span>ran in {Math.round(result.durationMs)}ms</span>}
        </div>
      </div>

      {result && (result.stdout || result.stderr) && (
        <div className="border-t border-border bg-background px-4 py-3 font-mono text-xs">
          {result.stdout && <pre className="whitespace-pre-wrap text-foreground">{result.stdout}</pre>}
          {result.stderr && <pre className="whitespace-pre-wrap text-destructive">{result.stderr}</pre>}
        </div>
      )}

      {caption && (
        <div className="border-t border-border bg-muted/20 px-4 py-2.5 text-xs text-muted-foreground italic font-serif">
          {caption}
        </div>
      )}
    </div>
  );
}
