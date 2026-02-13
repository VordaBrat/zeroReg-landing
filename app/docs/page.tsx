import Link from "next/link";

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-bg flex flex-col items-center justify-center px-6 text-center">
      {/* Animated construction icon */}
      <div className="relative mb-8">
        <div className="text-8xl animate-bounce">🚧</div>
      </div>

      {/* Main heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-4">
        Docs are cooking
      </h1>

      {/* Subtext */}
      <p className="text-text-muted text-lg sm:text-xl max-w-md mb-2">
        We're writing documentation so good, you'll actually read it.
      </p>
      <p className="text-text-muted/60 text-sm italic mb-10">
        (just kidding, nobody reads docs)
      </p>

      {/* ASCII art construction zone */}
      <pre className="text-text-muted/30 text-xs sm:text-sm font-mono mb-10 hidden sm:block">
        {`
    ██████╗  ██████╗  ██████╗███████╗
    ██╔══██╗██╔═══██╗██╔════╝██╔════╝
    ██║  ██║██║   ██║██║     ███████╗
    ██║  ██║██║   ██║██║     ╚════██║
    ██████╔╝╚██████╔╝╚██████╗███████║
    ╚═════╝  ╚═════╝  ╚═════╝╚══════╝
         [ UNDER CONSTRUCTION ]
`}
      </pre>

      {/* Progress bar */}
      <div className="w-full max-w-xs mb-8">
        <div className="flex justify-between text-xs text-text-muted mb-2">
          <span>Progress</span>
          <span>42%</span>
        </div>
        <div className="h-2 bg-bg-card rounded-full overflow-hidden border border-border">
          <div
            className="h-full bg-linear-to-r from-text-muted to-text rounded-full transition-all duration-1000"
            style={{ width: "42%" }}
          />
        </div>
        <p className="text-[10px] text-text-muted/40 mt-2 italic">
          (this percentage is totally made up)
        </p>
      </div>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <Link
          href="/"
          className="px-6 py-3 bg-accent text-bg rounded-md font-medium hover:opacity-90 transition-all"
        >
          Back to Home
        </Link>
        <a
          href="https://github.com/zenweb3/zeroReg"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-border text-text-muted rounded-md font-medium hover:border-text-muted hover:text-text transition-all"
        >
          Star on GitHub (to speed us up)
        </a>
      </div>

      {/* Footer note */}
      <p className="absolute bottom-8 text-text-muted/40 text-xs">
        ETA: Soon™ — when it's ready, you'll know
      </p>
    </div>
  );
}
