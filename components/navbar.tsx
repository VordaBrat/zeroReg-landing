import Link from "next/link";
import { StarIcon } from "./icons";
import { GITHUB_URL, DOCS_URL } from "@/lib/constants";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-bold text-lg tracking-tight">
          zeroReg
        </Link>

        {/* Links */}
        <div className="flex items-center gap-4 sm:gap-6">
          <Link
            href={DOCS_URL}
            className="text-sm text-text-muted hover:text-text transition-colors hidden sm:block"
          >
            Docs
          </Link>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-muted hover:text-text transition-colors hidden sm:block"
          >
            GitHub
          </a>
          
          {/* Star Button */}
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 sm:px-6 py-2 rounded-md text-sm font-medium border border-gold text-gold bg-gold-dim hover:bg-gold hover:text-bg transition-all"
          >
            <StarIcon />
            <span className="hidden sm:inline">Star on GitHub</span>
            <span className="sm:hidden">Star</span>
          </a>
        </div>
      </div>
    </nav>
  );
}