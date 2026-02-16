"use client";

import { useState } from "react";
import { CopyIcon, CheckIcon } from "./icons";
import { copyToClipboard } from "@/lib/utils";

type Language = "js" | "python";
type PackageManager = "npm" | "pnpm" | "yarn" | "bun" | "pip";

const JS_COMMANDS: Record<string, string> = {
  npm: "npm install zeroreg",
  pnpm: "pnpm add zeroreg",
  yarn: "yarn add zeroreg",
  bun: "bun add zeroreg",
};

const PYTHON_COMMANDS: Record<string, string> = {
  pip: "pip install zeroreg",
};

const JS_MANAGERS: PackageManager[] = ["npm", "pnpm", "yarn", "bun"];
const PYTHON_MANAGERS: PackageManager[] = ["pip"];

export function InstallCommand() {
  const [language, setLanguage] = useState<Language>("js");
  const [activePM, setActivePM] = useState<PackageManager>("npm");
  const [copied, setCopied] = useState(false);

  const commands = language === "js" ? JS_COMMANDS : PYTHON_COMMANDS;
  const managers = language === "js" ? JS_MANAGERS : PYTHON_MANAGERS;
  const currentCommand = commands[activePM] || commands[managers[0]];

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setActivePM(lang === "js" ? "npm" : "pip");
  };

  const handleCopy = async () => {
    const success = await copyToClipboard(currentCommand);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className="py-24 px-6 flex flex-col items-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-6 text-center">
        Move on. Get zeroReg.
      </h2>

      <p className="text-text-muted text-center mb-10 max-w-md">
        Available for JavaScript, TypeScript, and Python.
      </p>

      {/* Language Toggle */}
      <div className="flex items-center gap-1 bg-bg-card rounded-lg p-1 mb-6">
        <button
          onClick={() => handleLanguageChange("js")}
          className={`px-5 py-2.5 text-sm font-medium rounded-md transition-all flex items-center gap-2 ${
            language === "js"
              ? "bg-bg-elevated text-text"
              : "text-text-muted hover:text-text"
          }`}
        >
          JavaScript
        </button>
        <button
          onClick={() => handleLanguageChange("python")}
          className={`px-5 py-2.5 text-sm font-medium rounded-md transition-all flex items-center gap-2 ${
            language === "python"
              ? "bg-bg-elevated text-text"
              : "text-text-muted hover:text-text"
          }`}
        >
          Python
        </button>
      </div>

      {/* Command Display */}
      <div className="flex items-center gap-4 bg-bg-card border border-border rounded-xl px-6 py-5 mb-6 min-w-[320px]">
        <code className="font-mono text-lg text-text flex-1 flex gap-2">
          <span className="text-text-muted">$</span>
          <span>{currentCommand}</span>
        </code>
        <button
          onClick={handleCopy}
          aria-label="Copy to clipboard"
          className="p-2 rounded-md text-text-muted hover:text-text hover:bg-bg-elevated transition-all"
        >
          {copied ? <CheckIcon /> : <CopyIcon />}
        </button>
      </div>

      {/* Package Manager Switcher (JS only) */}
      {language === "js" && (
        <div className="flex items-center gap-1 bg-bg-card rounded-lg p-1">
          {managers.map((pm) => (
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
      )}
    </section>
  );
}
