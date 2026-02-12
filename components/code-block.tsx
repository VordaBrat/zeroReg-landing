interface CodeLine {
  number: number;
  content: React.ReactNode;
}

interface CodeBlockProps {
  filename: string;
  badge?: {
    text: string;
    variant: "error" | "success";
  };
  lines: CodeLine[];
  footer?: {
    text: string;
    label: string;
  };
}

export function CodeBlock({ filename, badge, lines, footer }: CodeBlockProps) {
  return (
    <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
      <div className="flex items-center justify-between px-6 py-4 border-b border-border">
        <div className="flex items-center gap-4">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-zinc-800" />
            <span className="w-3 h-3 rounded-full bg-zinc-800" />
            <span className="w-3 h-3 rounded-full bg-zinc-800" />
          </div>
          <span className="font-mono text-xs text-text-muted">{filename}</span>
        </div>
        {badge && (
          <span
            className={`text-[10px] font-medium tracking-wide uppercase px-3 py-1.5 rounded ${
              badge.variant === "error"
                ? "bg-red/10 text-red"
                : "bg-green/10 text-green"
            }`}
          >
            {badge.text}
          </span>
        )}
      </div>

      <div className="p-6">
        {lines.map((line) => (
          <div
            key={line.number}
            className="flex items-center py-1 font-mono text-base leading-8"
          >
            <span className="w-8 text-zinc-800 text-sm shrink-0 select-none">
              {line.number}
            </span>
            <span className="text-text">{line.content}</span>
          </div>
        ))}
      </div>

      {footer && (
        <div className="flex items-center justify-between px-6 py-4 border-t border-border bg-bg-elevated">
          <div className="flex items-center gap-2 text-sm text-text-muted">
            <span className="text-green">✓</span>
            {footer.text}
          </div>
          <div className="font-mono text-xs text-zinc-700">{footer.label}</div>
        </div>
      )}
    </div>
  );
}

// Syntax highlighting helpers
export const syntax = {
  keyword: (text: string) => <span className="text-purple-400">{text}</span>,
  string: (text: string) => <span className="text-lime-400">{text}</span>,
  function: (text: string) => <span className="text-blue-400">{text}</span>,
  method: (text: string) => <span className="text-cyan-400">{text}</span>,
  comment: (text: string) => (
    <span className="text-zinc-600 italic">{text}</span>
  ),
};
