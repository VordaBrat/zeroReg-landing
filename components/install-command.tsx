"use client";

import { useState } from "react";
import { CopyIcon, CheckIcon } from "./icons";
import { INSTALL_COMMANDS, type PackageManager } from "@/lib/constants";
import { copyToClipboard } from "@/lib/utils";

const PACKAGE_MANAGERS: PackageManager[] = ["npm", "pnpm", "yarn", "bun"];

export function InstallCommand() {
  const [activePM, setActivePM] = useState<PackageManager>("npm");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const success = await copyToClipboard(INSTALL_COMMANDS[activePM]);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className="py-24 px-6 flex flex-col items-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-12 text-center">
        Move on. Get zeroReg.
      </h2>

      <div className="flex items-center gap-4 bg-bg-card border  border-border rounded-xl px-6 py-5 mb-6 min-w-[320px]">
        <code className="font-mono text-lg text-text flex-1 flex gap-2">
          <span className="text-text-muted">$</span>
          <span className="mx-auto">{INSTALL_COMMANDS[activePM]}</span>
        </code>
        <button
          onClick={handleCopy}
          aria-label="Copy to clipboard"
          className="p-2 rounded-md text-text-muted hover:text-text hover:bg-bg-elevated transition-all"
        >
          {copied ? <CheckIcon /> : <CopyIcon />}
        </button>
      </div>

      <div className="flex items-center gap-1 bg-bg-card rounded-lg p-1">
        {PACKAGE_MANAGERS.map((pm) => (
          <button
            key={pm}
            onClick={() => setActivePM(pm)}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
              activePM === pm
                ? "bg-bg-elevated text-text"
                : "text-text-muted hover:text-text"
            }`}
          >
            {pm}
          </button>
        ))}
      </div>
    </section>
  );
}
