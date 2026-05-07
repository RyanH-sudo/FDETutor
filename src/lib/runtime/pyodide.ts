/**
 * Pyodide runtime for FDETutor — Python in the browser.
 *
 * Used in lessons that show code samples (mostly the AI engineering and
 * RAG volumes). The runtime is lazy-loaded on first use.
 */

declare global {
  interface Window {
    loadPyodide?: (options?: { indexURL?: string }) => Promise<PyodideInterface>;
  }
}

export interface PyodideInterface {
  runPython: (code: string) => unknown;
  runPythonAsync: (code: string) => Promise<unknown>;
  setStdout: (options: { batched: (s: string) => void }) => void;
  setStderr: (options: { batched: (s: string) => void }) => void;
  globals: { get: (name: string) => unknown; set: (name: string, value: unknown) => void };
  loadPackagesFromImports: (code: string) => Promise<void>;
  version: string;
}

export interface RunResult {
  stdout: string;
  stderr: string;
  durationMs: number;
  ok: boolean;
}

const PYODIDE_VERSION = '0.27.0';
const PYODIDE_CDN = `https://cdn.jsdelivr.net/pyodide/v${PYODIDE_VERSION}/full/`;

let pyodideInstance: PyodideInterface | null = null;
let loadPromise: Promise<PyodideInterface> | null = null;

function ensureLoaderScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') {
      reject(new Error('Pyodide can only be loaded in the browser.'));
      return;
    }
    if (window.loadPyodide) { resolve(); return; }
    const existing = document.querySelector('script[data-pyodide-loader]') as HTMLScriptElement | null;
    if (existing) {
      existing.addEventListener('load', () => resolve());
      existing.addEventListener('error', () => reject(new Error('Pyodide loader failed.')));
      return;
    }
    const s = document.createElement('script');
    s.src = `${PYODIDE_CDN}pyodide.js`;
    s.async = true;
    s.dataset.pyodideLoader = 'true';
    s.onload = () => resolve();
    s.onerror = () => reject(new Error('Failed to fetch Pyodide loader.'));
    document.head.appendChild(s);
  });
}

export async function getPyodide(): Promise<PyodideInterface> {
  if (pyodideInstance) return pyodideInstance;
  if (loadPromise) return loadPromise;
  loadPromise = (async () => {
    await ensureLoaderScript();
    if (!window.loadPyodide) throw new Error('window.loadPyodide missing.');
    const py = await window.loadPyodide({ indexURL: PYODIDE_CDN });
    pyodideInstance = py;
    return py;
  })();
  return loadPromise;
}

export async function runPython(code: string): Promise<RunResult> {
  const start = performance.now();
  const stdoutChunks: string[] = [];
  const stderrChunks: string[] = [];

  let py: PyodideInterface;
  try {
    py = await getPyodide();
  } catch (e) {
    return { stdout: '', stderr: `Could not load Python runtime: ${(e as Error).message}`, durationMs: performance.now() - start, ok: false };
  }

  py.setStdout({ batched: (s) => stdoutChunks.push(s) });
  py.setStderr({ batched: (s) => stderrChunks.push(s) });

  let ok = true;
  try {
    await py.loadPackagesFromImports(code);
    await py.runPythonAsync(code);
  } catch (e) {
    ok = false;
    stderrChunks.push((e as Error).message ?? String(e));
  }

  return { stdout: stdoutChunks.join(''), stderr: stderrChunks.join(''), durationMs: performance.now() - start, ok };
}
