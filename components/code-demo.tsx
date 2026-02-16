"use client";

import { useState } from "react";
import { CodeBlock, syntax } from "./code-block";

const { keyword, string, function: fn, method, comment } = syntax;

type Language = "js" | "python";

export function CodeDemo() {
  const [language, setLanguage] = useState<Language>("js");

  return (
    <section className="px-6 pb-24 max-w-4xl mx-auto">
      {/* The Problem */}
      <CodeBlock
        filename="validate-email.js"
        badge={{ text: "The Problem", variant: "error" }}
        lines={[
          {
            number: 1,
            content: (
              <span className="text-red break-all">
                {"/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/"}
              </span>
            ),
          },
        ]}
        footer={{
          text: '"ah yes, perfectly clear" — no one ever',
          label: "",
        }}
      />

      {/* Transform Divider */}
      <div className="flex items-center justify-center py-8 gap-6">
        <div className="flex-1 max-w-36 h-px bg-border" />
        <span className="text-[11px] tracking-[0.1em] uppercase text-text-muted whitespace-nowrap">
          same thing, but make it make sense
        </span>
        <div className="flex-1 max-w-36 h-px bg-border" />
      </div>

      {/* Language Toggle for Solution */}
      <div className="flex justify-center mb-6">
        <div className="flex items-center gap-1 bg-bg-card rounded-lg p-1">
          <button
            onClick={() => setLanguage("js")}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
              language === "js"
                ? "bg-bg-elevated text-text"
                : "text-text-muted hover:text-text"
            }`}
          >
            JavaScript
          </button>
          <button
            onClick={() => setLanguage("python")}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
              language === "python"
                ? "bg-bg-elevated text-text"
                : "text-text-muted hover:text-text"
            }`}
          >
            Python
          </button>
        </div>
      </div>

      {/* The Solution - JS */}
      {language === "js" && (
        <CodeBlock
          filename="validate-email.js"
          lines={[
            {
              number: 1,
              content: (
                <>
                  {keyword("import")} {"{ email }"} {keyword("from")}{" "}
                  {string("'zeroreg/patterns'")}
                </>
              ),
            },
            { number: 2, content: "" },
            {
              number: 3,
              content: comment("// that's it. that's the whole thing."),
            },
            {
              number: 4,
              content: (
                <>
                  {fn("email")}.{method("test")}({string("'yo@dev.io'")}) {comment("// true")}
                </>
              ),
            },
          ]}
          footer={{
            text: "Your future self will thank you",
            label: "zeroreg v0.1.0",
          }}
        />
      )}

      {/* The Solution - Python */}
      {language === "python" && (
        <CodeBlock
          filename="validate_email.py"
          lines={[
            {
              number: 1,
              content: (
                <>
                  {keyword("from")} zeroreg.patterns {keyword("import")} email
                </>
              ),
            },
            { number: 2, content: "" },
            {
              number: 3,
              content: comment("# that's it. that's the whole thing."),
            },
            {
              number: 4,
              content: (
                <>
                  email.{method("test")}({string("'yo@dev.io'")}) {comment("# True")}
                </>
              ),
            },
          ]}
          footer={{
            text: "Your future self will thank you",
            label: "zeroreg v0.1.0",
          }}
        />
      )}

      {/* Section Break */}
      <div className="py-32 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4 leading-tight">
          Or build your own patterns<br className="hidden sm:block" /> like a normal person
        </h2>
        <p className="font-serif text-xl text-text-muted italic">
          No PhD in hieroglyphics required. Just functions that say what they do.
        </p>
      </div>

      {/* Language Toggle for Custom Example */}
      <div className="flex justify-center mb-6">
        <div className="flex items-center gap-1 bg-bg-card rounded-lg p-1">
          <button
            onClick={() => setLanguage("js")}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
              language === "js"
                ? "bg-bg-elevated text-text"
                : "text-text-muted hover:text-text"
            }`}
          >
            JavaScript
          </button>
          <button
            onClick={() => setLanguage("python")}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
              language === "python"
                ? "bg-bg-elevated text-text"
                : "text-text-muted hover:text-text"
            }`}
          >
            Python
          </button>
        </div>
      </div>

      {/* Custom Pattern Example - JS */}
      {language === "js" && (
        <CodeBlock
          filename="phone-number.js"
          lines={[
            {
              number: 1,
              content: (
                <>
                  {keyword("import")} {"{ digit, optional }"}{" "}
                  {keyword("from")} {string("'zeroreg'")}
                </>
              ),
            },
            { number: 2, content: "" },
            {
              number: 3,
              content: (
                <>
                  {keyword("const")} phone = {fn("optional")}({string("'+'")})</>
              ),
            },
            {
              number: 4,
              content: (
                <>
                  {"  "}.{method("then")}({fn("digit")}(3))
                </>
              ),
            },
            {
              number: 5,
              content: (
                <>
                  {"  "}.{method("then")}({string("'-'")})
                </>
              ),
            },
            {
              number: 6,
              content: (
                <>
                  {"  "}.{method("then")}({fn("digit")}(3))
                </>
              ),
            },
            {
              number: 7,
              content: (
                <>
                  {"  "}.{method("then")}({string("'-'")})
                </>
              ),
            },
            {
              number: 8,
              content: (
                <>
                  {"  "}.{method("then")}({fn("digit")}(4))
                </>
              ),
            },
            { number: 9, content: "" },
            {
              number: 10,
              content: (
                <>
                  phone.{method("test")}({string("'123-456-7890'")}) {comment("// true")}
                </>
              ),
            },
            {
              number: 11,
              content: (
                <>
                  phone.{method("toRegex")}() {comment("// /\\+?\\d{3}-\\d{3}-\\d{4}/")}
                </>
              ),
            },
          ]}
          footer={{
            text: "You can actually read this in 6 months",
            label: "0 headaches",
          }}
        />
      )}

      {/* Custom Pattern Example - Python */}
      {language === "python" && (
        <CodeBlock
          filename="phone_number.py"
          lines={[
            {
              number: 1,
              content: (
                <>
                  {keyword("from")} zeroreg {keyword("import")} digit, optional
                </>
              ),
            },
            { number: 2, content: "" },
            {
              number: 3,
              content: (
                <>
                  phone = {fn("optional")}({string("'+'")})</>
              ),
            },
            {
              number: 4,
              content: (
                <>
                  {"    "}.{method("then")}({fn("digit")}(3))
                </>
              ),
            },
            {
              number: 5,
              content: (
                <>
                  {"    "}.{method("then")}({string("'-'")})
                </>
              ),
            },
            {
              number: 6,
              content: (
                <>
                  {"    "}.{method("then")}({fn("digit")}(3))
                </>
              ),
            },
            {
              number: 7,
              content: (
                <>
                  {"    "}.{method("then")}({string("'-'")})
                </>
              ),
            },
            {
              number: 8,
              content: (
                <>
                  {"    "}.{method("then")}({fn("digit")}(4))
                </>
              ),
            },
            { number: 9, content: "" },
            {
              number: 10,
              content: (
                <>
                  phone.{method("test")}({string("'123-456-7890'")}) {comment("# True")}
                </>
              ),
            },
            {
              number: 11,
              content: (
                <>
                  phone.{method("to_regex")}() {comment("# re.compile(r'\\+?\\d{3}-\\d{3}-\\d{4}')")}
                </>
              ),
            },
          ]}
          footer={{
            text: "You can actually read this in 6 months",
            label: "0 headaches",
          }}
        />
      )}
    </section>
  );
}