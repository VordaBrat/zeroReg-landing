"use client";

import Link from "next/link";
import { useState } from "react";

type Language = "js" | "python";

export default function DocsPage() {
  const [lang, setLang] = useState<Language>("js");

  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-bold text-lg">
            zeroReg
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/docs" className="text-sm text-text font-medium">
              Docs
            </Link>
            <a
              href="https://github.com/yourusername/zeroreg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-muted hover:text-text transition-colors"
            >
              GitHub
            </a>
          </nav>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Hero */}
        <div className="mb-16">
          <h1 className="text-5xl sm:text-6xl font-black tracking-tight mb-4">
            Documentation
          </h1>
          <p className="text-xl text-text-muted max-w-2xl mb-8">
            Everything you need to write regex like a normal person. No PhD required.
          </p>
          
          {/* Global Language Toggle */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-text-muted mr-2">Language:</span>
            <button
              onClick={() => setLang("js")}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                lang === "js"
                  ? "bg-bg-elevated text-text border border-border"
                  : "text-text-muted hover:text-text"
              }`}
            >
              JavaScript / TypeScript
            </button>
            <button
              onClick={() => setLang("python")}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                lang === "python"
                  ? "bg-bg-elevated text-text border border-border"
                  : "text-text-muted hover:text-text"
              }`}
            >
              Python
            </button>
          </div>
        </div>

        {/* Quick Start */}
        <section id="quickstart" className="mb-20">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="text-text-muted">#</span> Quick Start
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Installation</h3>
              {lang === "js" ? (
                <CodeBlock>{`npm install zeroreg

# or
pnpm add zeroreg
yarn add zeroreg
bun add zeroreg`}</CodeBlock>
              ) : (
                <CodeBlock>{`pip install zeroreg`}</CodeBlock>
              )}
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Your first pattern</h3>
              {lang === "js" ? (
                <CodeBlock>{`import { digit } from 'zeroreg'

// Match a phone number: 123-456-7890
const phone = digit(3).then('-').then(digit(3)).then('-').then(digit(4))

phone.test('123-456-7890')  // true
phone.toRegex()             // /\\d{3}-\\d{3}-\\d{4}/`}</CodeBlock>
              ) : (
                <CodeBlock>{`from zeroreg import digit

# Match a phone number: 123-456-7890
phone = digit(3).then('-').then(digit(3)).then('-').then(digit(4))

phone.test('123-456-7890')  # True
phone.to_regex()            # re.compile(r'\\d{3}-\\d{3}-\\d{4}')`}</CodeBlock>
              )}
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Or use pre-built patterns</h3>
              {lang === "js" ? (
                <CodeBlock>{`import { email, url, phone } from 'zeroreg/patterns'

email.test('hello@world.com')     // true
url.test('https://github.com')    // true
phone.test('+1-234-567-8900')     // true`}</CodeBlock>
              ) : (
                <CodeBlock>{`from zeroreg.patterns import email, url, phone

email.test('hello@world.com')     # True
url.test('https://github.com')    # True
phone.test('+1-234-567-8900')     # True`}</CodeBlock>
              )}
            </div>
          </div>
        </section>

        {/* Character Classes */}
        <section id="characters" className="mb-20">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="text-text-muted">#</span> Character Classes
          </h2>

          <p className="text-text-muted mb-8">
            Match specific types of characters.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 pr-6 font-semibold">Function</th>
                  <th className="py-3 pr-6 font-semibold">Description</th>
                  <th className="py-3 font-semibold">Regex</th>
                </tr>
              </thead>
              <tbody className="font-mono text-sm">
                <Row fn={lang === "js" ? "digit(n?)" : "digit(n=None)"} desc="Match digits" regex="\\d or \\d{n}" />
                <Row fn="word()" desc="Word char (a-z, 0-9, _)" regex="\\w" />
                <Row fn="letter()" desc="Any letter a-z, A-Z" regex="[a-zA-Z]" />
                <Row fn="whitespace()" desc="Whitespace" regex="\\s" />
                <Row fn={lang === "js" ? "any()" : "any_char()"} desc="Any character" regex="." />
                <Row fn="literal(str)" desc="Exact match (escaped)" regex="str" />
                <Row fn={lang === "js" ? "charIn('abc')" : "char_in('abc')"} desc="Any char in set" regex="[abc]" />
                <Row fn={lang === "js" ? "charNotIn('abc')" : "char_not_in('abc')"} desc="Any char NOT in set" regex="[^abc]" />
                <Row fn={lang === "js" ? "range('a', 'z')" : "range_of('a', 'z')"} desc="Character range" regex="[a-z]" />
              </tbody>
            </table>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-3">Examples</h3>
            {lang === "js" ? (
              <CodeBlock>{`import { digit, letter, charIn, literal } from 'zeroreg'

// Match exactly 3 digits
digit(3).test('123')  // true

// Match a vowel
charIn('aeiou').test('e')  // true

// Match a literal dot (escaped automatically)
literal('.').test('.')  // true`}</CodeBlock>
            ) : (
              <CodeBlock>{`from zeroreg import digit, letter, char_in, literal

# Match exactly 3 digits
digit(3).test('123')  # True

# Match a vowel
char_in('aeiou').test('e')  # True

# Match a literal dot (escaped automatically)
literal('.').test('.')  # True`}</CodeBlock>
            )}
          </div>
        </section>

        {/* Quantifiers */}
        <section id="quantifiers" className="mb-20">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="text-text-muted">#</span> Quantifiers
          </h2>

          <p className="text-text-muted mb-8">
            Control how many times a pattern matches.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 pr-6 font-semibold">Method</th>
                  <th className="py-3 pr-6 font-semibold">Description</th>
                  <th className="py-3 font-semibold">Regex</th>
                </tr>
              </thead>
              <tbody className="font-mono text-sm">
                <Row fn={lang === "js" ? ".oneOrMore()" : ".one_or_more()"} desc="1 or more" regex="+" />
                <Row fn={lang === "js" ? ".zeroOrMore()" : ".zero_or_more()"} desc="0 or more" regex="*" />
                <Row fn=".optional()" desc="0 or 1" regex="?" />
                <Row fn=".times(n)" desc="Exactly n times" regex="{n}" />
                <Row fn={lang === "js" ? ".between(min, max)" : ".between(min, max)"} desc="Between min and max" regex="{min,max}" />
                <Row fn={lang === "js" ? ".atLeast(n)" : ".at_least(n)"} desc="n or more times" regex="{n,}" />
              </tbody>
            </table>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-3">Examples</h3>
            {lang === "js" ? (
              <CodeBlock>{`import { digit, letter, optional } from 'zeroreg'

// One or more digits
digit().oneOrMore().test('123')  // true

// Optional plus sign, then digits
optional('+').then(digit().oneOrMore()).test('+123')  // true
optional('+').then(digit().oneOrMore()).test('123')   // true

// Between 2 and 4 letters
letter().between(2, 4).test('abc')  // true`}</CodeBlock>
            ) : (
              <CodeBlock>{`from zeroreg import digit, letter, optional

# One or more digits
digit().one_or_more().test('123')  # True

# Optional plus sign, then digits
optional('+').then(digit().one_or_more()).test('+123')  # True
optional('+').then(digit().one_or_more()).test('123')   # True

# Between 2 and 4 letters
letter().between(2, 4).test('abc')  # True`}</CodeBlock>
            )}
          </div>
        </section>

        {/* Groups */}
        <section id="groups" className="mb-20">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="text-text-muted">#</span> Groups
          </h2>

          <p className="text-text-muted mb-8">
            Capture parts of your match or group patterns together.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 pr-6 font-semibold">Function</th>
                  <th className="py-3 pr-6 font-semibold">Description</th>
                  <th className="py-3 font-semibold">Regex</th>
                </tr>
              </thead>
              <tbody className="font-mono text-sm">
                <Row fn="capture(pattern)" desc="Capturing group" regex="(...)" />
                <Row fn="capture(pattern, 'name')" desc="Named capture" regex={lang === "js" ? "(?<n>...)" : "(?P<n>...)"} />
                <Row fn="group(pattern)" desc="Non-capturing group" regex="(?:...)" />
                <Row fn={lang === "js" ? "oneOf(a, b, c)" : "one_of(a, b, c)"} desc="Match any of" regex="(?:a|b|c)" />
              </tbody>
            </table>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-3">Examples</h3>
            {lang === "js" ? (
              <CodeBlock>{`import { capture, digit, oneOf, group, literal } from 'zeroreg'

// Extract year, month, day
const datePattern = capture(digit(4), 'year')
  .then('-')
  .then(capture(digit(2), 'month'))
  .then('-')
  .then(capture(digit(2), 'day'))

const match = '2024-03-15'.match(datePattern.toRegex())
match.groups.year   // '2024'
match.groups.month  // '03'
match.groups.day    // '15'

// Match "cat" or "dog" or "bird"
oneOf('cat', 'dog', 'bird').test('dog')  // true`}</CodeBlock>
            ) : (
              <CodeBlock>{`from zeroreg import capture, digit, one_of, group, literal

# Extract year, month, day
date_pattern = (
    capture(digit(4), 'year')
    .then('-')
    .then(capture(digit(2), 'month'))
    .then('-')
    .then(capture(digit(2), 'day'))
)

match = date_pattern.match('2024-03-15')
match.group('year')   # '2024'
match.group('month')  # '03'
match.group('day')    # '15'

# Match "cat" or "dog" or "bird"
one_of('cat', 'dog', 'bird').test('dog')  # True`}</CodeBlock>
            )}
          </div>
        </section>

        {/* Anchors */}
        <section id="anchors" className="mb-20">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="text-text-muted">#</span> Anchors
          </h2>

          <p className="text-text-muted mb-8">
            Match positions in the string, not characters.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 pr-6 font-semibold">Function</th>
                  <th className="py-3 pr-6 font-semibold">Description</th>
                  <th className="py-3 font-semibold">Regex</th>
                </tr>
              </thead>
              <tbody className="font-mono text-sm">
                <Row fn={lang === "js" ? "startOfLine()" : "start_of_line()"} desc="Start of string" regex="^" />
                <Row fn={lang === "js" ? "endOfLine()" : "end_of_line()"} desc="End of string" regex="$" />
                <Row fn={lang === "js" ? "wordBoundary()" : "word_boundary()"} desc="Word boundary" regex="\\b" />
              </tbody>
            </table>
          </div>
        </section>

        {/* Output Methods */}
        <section id="output" className="mb-20">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="text-text-muted">#</span> Output Methods
          </h2>

          <p className="text-text-muted mb-8">
            Convert your pattern to different formats and use it.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 pr-6 font-semibold">Method</th>
                  <th className="py-3 font-semibold">Returns</th>
                </tr>
              </thead>
              <tbody className="font-mono text-sm">
                <Row fn={lang === "js" ? ".toRegex(flags?)" : ".to_regex(flags=0)"} desc={lang === "js" ? "Native RegExp object" : "Compiled re.Pattern"} regex="" />
                <Row fn=".test(str)" desc="boolean — does it match?" regex="" />
                <Row fn=".match(str)" desc="First match or null/None" regex="" />
                <Row fn={lang === "js" ? ".matchAll(str)" : ".match_all(str)"} desc="Array/list of all matches" regex="" />
                <Row fn=".replace(str, replacement)" desc="String with replacements" regex="" />
              </tbody>
            </table>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-3">Examples</h3>
            {lang === "js" ? (
              <CodeBlock>{`import { digit } from 'zeroreg'

const pattern = digit().oneOrMore()

// Test if string matches
pattern.test('abc123')  // true

// Get all matches
pattern.matchAll('abc 123 def 456')  // [['123'], ['456']]

// Replace all matches
pattern.replace('abc 123 def 456', 'X')  // 'abc X def X'

// Get native RegExp with flags
pattern.toRegex('gi')  // /\\d+/gi`}</CodeBlock>
            ) : (
              <CodeBlock>{`from zeroreg import digit

pattern = digit().one_or_more()

# Test if string matches
pattern.test('abc123')  # True

# Get all matches
pattern.match_all('abc 123 def 456')  # ['123', '456']

# Replace all matches
pattern.replace('abc 123 def 456', 'X')  # 'abc X def X'

# Get compiled regex
pattern.to_regex()  # re.compile(r'\\d+')`}</CodeBlock>
            )}
          </div>
        </section>

        {/* Pre-built Patterns */}
        <section id="patterns" className="mb-20">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="text-text-muted">#</span> Pre-built Patterns
          </h2>

          <p className="text-text-muted mb-8">
            Import ready-to-use patterns for common use cases.
          </p>

          {lang === "js" ? (
            <CodeBlock>{`import { email, url, phone, date, uuid, ... } from 'zeroreg/patterns'`}</CodeBlock>
          ) : (
            <CodeBlock>{`from zeroreg.patterns import email, url, phone, date, uuid, ...`}</CodeBlock>
          )}

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <PatternCard name="email" example="user@domain.com" />
            <PatternCard name="url" example="https://example.com" />
            <PatternCard name="phone" example="+1-234-567-8900" />
            <PatternCard name="date" example="2024-03-15" />
            <PatternCard name="time" example="14:30:00" />
            <PatternCard name="ipv4" example="192.168.1.1" />
            <PatternCard name="uuid" example="550e8400-e29b-..." />
            <PatternCard name={lang === "js" ? "hexColor" : "hex_color"} example="#ff6600" />
            <PatternCard name="slug" example="my-post-title" />
            <PatternCard name="hashtag" example="#trending" />
            <PatternCard name="mention" example="@username" />
            <PatternCard name={lang === "js" ? "creditCard" : "credit_card"} example="4111111111111111" />
            <PatternCard name="username" example="user_123" />
            <PatternCard name={lang === "js" ? "strongPassword" : "strong_password"} example="MyP@ssw0rd" />
            <PatternCard name="semver" example="1.2.3-alpha" />
            <PatternCard name={lang === "js" ? "macAddress" : "mac_address"} example="00:1A:2B:3C:4D:5E" />
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border pt-12 mt-20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="text-text-muted text-sm">
              Built for developers who value their sanity.
            </p>
            <div className="flex gap-6">
              <a
                href="https://github.com/yourusername/zeroreg"
                className="text-sm text-text-muted hover:text-text transition-colors"
              >
                GitHub (JS)
              </a>
              <a
                href="https://github.com/yourusername/zeroreg-py"
                className="text-sm text-text-muted hover:text-text transition-colors"
              >
                GitHub (Python)
              </a>
              <a
                href="https://npmjs.com/package/zeroreg"
                className="text-sm text-text-muted hover:text-text transition-colors"
              >
                npm
              </a>
              <a
                href="https://pypi.org/project/zeroreg"
                className="text-sm text-text-muted hover:text-text transition-colors"
              >
                PyPI
              </a>
              <Link
                href="/"
                className="text-sm text-text-muted hover:text-text transition-colors"
              >
                Home
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

// Components

function CodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <pre className="bg-bg-card border border-border rounded-xl p-4 overflow-x-auto">
      <code className="text-sm font-mono text-text">{children}</code>
    </pre>
  );
}

function Row({ fn, desc, regex }: { fn: string; desc: string; regex: string }) {
  return (
    <tr className="border-b border-border/50">
      <td className="py-3 pr-6 text-green">{fn}</td>
      <td className="py-3 pr-6 text-text-muted font-sans">{desc}</td>
      <td className="py-3 text-text-muted">{regex}</td>
    </tr>
  );
}

function PatternCard({ name, example }: { name: string; example: string }) {
  return (
    <div className="bg-bg-card border border-border rounded-lg p-4">
      <code className="text-green font-semibold">{name}</code>
      <p className="text-text-muted text-sm mt-1 font-mono">{example}</p>
    </div>
  );
}