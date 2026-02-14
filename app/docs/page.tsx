import Link from "next/link";
import { Navbar } from "@/components";
export default function DocsPage() {
  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <div className="max-w-5xl mx-auto my-8  px-6 py-16">
        <div className="mb-20">
          <h1 className="text-5xl sm:text-6xl font-black tracking-tight mb-4">
            Documentation
          </h1>
          <p className="text-xl text-text-muted max-w-2xl">
            Everything you need to write regex like a normal person. No PhD
            required.
          </p>
        </div>

        {/* Quick Start */}
        <section id="quickstart" className="mb-20">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="text-text-muted">#</span> Quick Start
          </h2>

          <div className="space-y-6">
            <CodeBlock>{`# npm
npm install zeroreg

# pnpm
pnpm add zeroreg

# yarn
yarn add zeroreg

# bun
bun add zeroreg`}</CodeBlock>

            <div>
              <h3 className="text-lg font-semibold mb-3">Your first pattern</h3>
              <CodeBlock>{`import { digit, literal } from 'zeroreg'

// Match a phone number: 123-456-7890
const phone = digit(3).then('-').then(digit(3)).then('-').then(digit(4))

phone.test('123-456-7890')  // true
phone.toRegex()             // /\\d{3}-\\d{3}-\\d{4}/`}</CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">
                Or use pre-built patterns
              </h3>
              <CodeBlock>{`import { email, url, phone } from 'zeroreg/patterns'

email.test('hello@world.com')     // true
url.test('https://github.com')    // true
phone.test('+1-234-567-8900')     // true`}</CodeBlock>
            </div>
          </div>
        </section>

        {/* Core Concepts */}
        <section id="concepts" className="mb-20">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="text-text-muted">#</span> Core Concepts
          </h2>

          <div className="prose prose-invert max-w-none">
            <p className="text-text-muted text-lg mb-6">
              zeroReg is built on one simple idea:{" "}
              <strong className="text-text">
                regex should read like English
              </strong>
              . Every function returns a <code>Pattern</code> object that you
              can chain, combine, and convert to native RegExp.
            </p>

            <div className="bg-bg-card border border-border rounded-xl p-6 mb-6">
              <h4 className="font-semibold mb-3">The Pattern Object</h4>
              <p className="text-text-muted mb-4">
                Every builder function returns a Pattern. Patterns are immutable
                and chainable:
              </p>
              <CodeBlock>{`const pattern = digit()      // Create a pattern
  .oneOrMore()                // Chain quantifier
  .then('-')                  // Chain more patterns
  .then(letter().times(3))    // Nest patterns

// Convert to RegExp when ready
const regex = pattern.toRegex()  // /\\d+-[a-zA-Z]{3}/`}</CodeBlock>
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
                <Row fn="digit()" desc="Any digit 0-9" regex="\\d" />
                <Row fn="digit(n)" desc="Exactly n digits" regex="\\d{n}" />
                <Row fn="nonDigit()" desc="Any non-digit" regex="\\D" />
                <Row fn="word()" desc="Word char (a-z, 0-9, _)" regex="\\w" />
                <Row fn="nonWord()" desc="Non-word char" regex="\\W" />
                <Row
                  fn="letter()"
                  desc="Any letter a-z, A-Z"
                  regex="[a-zA-Z]"
                />
                <Row fn="lowercase()" desc="Lowercase letter" regex="[a-z]" />
                <Row fn="uppercase()" desc="Uppercase letter" regex="[A-Z]" />
                <Row
                  fn="alphanumeric()"
                  desc="Letter or digit"
                  regex="[a-zA-Z0-9]"
                />
                <Row fn="whitespace()" desc="Whitespace" regex="\\s" />
                <Row fn="nonWhitespace()" desc="Non-whitespace" regex="\\S" />
                <Row fn="any()" desc="Any character" regex="." />
                <Row
                  fn="literal(str)"
                  desc="Exact match (escaped)"
                  regex="str"
                />
                <Row fn="charIn('abc')" desc="Any char in set" regex="[abc]" />
                <Row
                  fn="charNotIn('abc')"
                  desc="Any char NOT in set"
                  regex="[^abc]"
                />
                <Row
                  fn="range('a', 'z')"
                  desc="Character range"
                  regex="[a-z]"
                />
              </tbody>
            </table>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-3">Examples</h3>
            <CodeBlock>{`import { digit, letter, charIn, literal } from 'zeroreg'

// Match exactly 3 digits
digit(3).test('123')  // true

// Match a vowel
charIn('aeiou').test('e')  // true

// Match a literal dot (escaped automatically)
literal('.').test('.')  // true
literal('.').test('a')  // false`}</CodeBlock>
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
                <Row fn=".oneOrMore()" desc="1 or more" regex="+" />
                <Row fn=".zeroOrMore()" desc="0 or more" regex="*" />
                <Row fn=".optional()" desc="0 or 1" regex="?" />
                <Row fn=".times(n)" desc="Exactly n times" regex="{n}" />
                <Row
                  fn=".between(min, max)"
                  desc="Between min and max"
                  regex="{min,max}"
                />
                <Row fn=".atLeast(n)" desc="n or more times" regex="{n,}" />
                <Row fn=".atMost(n)" desc="0 to n times" regex="{0,n}" />
              </tbody>
            </table>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-3">Examples</h3>
            <CodeBlock>{`import { digit, letter, optional } from 'zeroreg'

// One or more digits
digit().oneOrMore().test('123')  // true

// Optional plus sign, then digits
optional('+').then(digit().oneOrMore()).test('+123')  // true
optional('+').then(digit().oneOrMore()).test('123')   // true

// Between 2 and 4 letters
letter().between(2, 4).test('abc')  // true`}</CodeBlock>
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
                <Row
                  fn="capture(pattern)"
                  desc="Capturing group"
                  regex="(...)"
                />
                <Row
                  fn="capture(pattern, 'name')"
                  desc="Named capture"
                  regex="(?<name>...)"
                />
                <Row
                  fn="group(pattern)"
                  desc="Non-capturing group"
                  regex="(?:...)"
                />
                <Row
                  fn="oneOf(a, b, c)"
                  desc="Match any of"
                  regex="(?:a|b|c)"
                />
              </tbody>
            </table>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-3">Examples</h3>
            <CodeBlock>{`import { capture, digit, oneOf, group } from 'zeroreg'

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
oneOf('cat', 'dog', 'bird').test('dog')  // true

// Group without capturing (for quantifiers)
group(literal('ab').or('cd')).oneOrMore().test('abcdab')  // true`}</CodeBlock>
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
                <Row fn="startOfLine()" desc="Start of string" regex="^" />
                <Row fn="endOfLine()" desc="End of string" regex="$" />
                <Row fn="wordBoundary()" desc="Word boundary" regex="\\b" />
                <Row
                  fn="nonWordBoundary()"
                  desc="Non-word boundary"
                  regex="\\B"
                />
              </tbody>
            </table>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-3">Examples</h3>
            <CodeBlock>{`import { startOfLine, endOfLine, literal, digit, wordBoundary } from 'zeroreg'

// Match "hello" at start of string
startOfLine().then(literal('hello')).test('hello world')  // true
startOfLine().then(literal('hello')).test('say hello')    // false

// Match exactly 3 digits (nothing more)
startOfLine().then(digit(3)).then(endOfLine()).test('123')   // true
startOfLine().then(digit(3)).then(endOfLine()).test('1234')  // false

// Match whole word "cat" (not "category")
wordBoundary().then(literal('cat')).then(wordBoundary())
  .toRegex().test('the cat sat')  // true`}</CodeBlock>
          </div>
        </section>

        {/* Lookahead & Lookbehind */}
        <section id="lookaround" className="mb-20">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="text-text-muted">#</span> Lookahead & Lookbehind
          </h2>

          <p className="text-text-muted mb-8">
            Assert what comes before or after without including it in the match.
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
                <Row
                  fn="lookahead(pattern)"
                  desc="Followed by"
                  regex="(?=...)"
                />
                <Row
                  fn="negativeLookahead(pattern)"
                  desc="NOT followed by"
                  regex="(?!...)"
                />
                <Row
                  fn="lookbehind(pattern)"
                  desc="Preceded by"
                  regex="(?<=...)"
                />
                <Row
                  fn="negativeLookbehind(pattern)"
                  desc="NOT preceded by"
                  regex="(?<!...)"
                />
              </tbody>
            </table>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-3">Examples</h3>
            <CodeBlock>{`import { digit, lookahead, lookbehind, literal } from 'zeroreg'

// Match digits followed by "px"
digit().oneOrMore().then(lookahead(literal('px')))
  .toRegex().exec('100px')  // ['100']

// Match digits preceded by "$"
lookbehind(literal('$')).then(digit().oneOrMore())
  .toRegex().exec('$500')  // ['500']`}</CodeBlock>
          </div>
        </section>

        {/* Chaining */}
        <section id="chaining" className="mb-20">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="text-text-muted">#</span> Chaining with .then()
          </h2>

          <p className="text-text-muted mb-8">
            The <code>.then()</code> method lets you chain patterns together
            sequentially.
          </p>

          <CodeBlock>{`import { digit, literal, letter, optional } from 'zeroreg'

// Build complex patterns step by step
const productCode = literal('PRD')
  .then('-')
  .then(digit(4))
  .then('-')
  .then(letter().times(2))

productCode.test('PRD-1234-AB')  // true
productCode.toRegex()            // /PRD-\\d{4}-[a-zA-Z]{2}/

// .then() accepts strings (auto-escaped) or patterns
digit(3).then('.').then(digit(3))  // Matches "123.456"`}</CodeBlock>
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
                <Row
                  fn=".toRegex(flags?)"
                  desc="Native RegExp object"
                  regex=""
                />
                <Row
                  fn=".test(string)"
                  desc="boolean — does it match?"
                  regex=""
                />
                <Row fn=".match(string)" desc="First match or null" regex="" />
                <Row
                  fn=".matchAll(string)"
                  desc="Array of all matches"
                  regex=""
                />
                <Row
                  fn=".replace(string, replacement)"
                  desc="String with replacements"
                  regex=""
                />
                <Row fn=".toString()" desc="Regex pattern string" regex="" />
              </tbody>
            </table>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-3">Examples</h3>
            <CodeBlock>{`import { digit } from 'zeroreg'

const pattern = digit().oneOrMore()

// Test if string matches
pattern.test('abc123')  // true

// Get first match
pattern.match('abc 123 def 456')  // ['123']

// Get all matches
pattern.matchAll('abc 123 def 456')  // [['123'], ['456']]

// Replace all matches
pattern.replace('abc 123 def 456', 'X')  // 'abc X def X'

// Get native RegExp with flags
pattern.toRegex('gi')  // /\\d+/gi

// Get pattern string
pattern.toString()  // '\\d+'`}</CodeBlock>
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

          <CodeBlock>{`import { email, url, phone, date, uuid, ... } from 'zeroreg/patterns'`}</CodeBlock>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <PatternCard name="email" example="user@domain.com" />
            <PatternCard name="url" example="https://example.com" />
            <PatternCard name="phone" example="+1-234-567-8900" />
            <PatternCard name="date" example="2024-03-15" />
            <PatternCard name="time" example="14:30:00" />
            <PatternCard name="ipv4" example="192.168.1.1" />
            <PatternCard name="ipv6" example="2001:0db8:..." />
            <PatternCard name="uuid" example="550e8400-e29b-..." />
            <PatternCard name="hexColor" example="#ff6600" />
            <PatternCard name="hex" example="a1b2c3" />
            <PatternCard name="slug" example="my-post-title" />
            <PatternCard name="hashtag" example="#trending" />
            <PatternCard name="mention" example="@username" />
            <PatternCard name="creditCard" example="4111111111111111" />
            <PatternCard name="ssn" example="123-45-6789" />
            <PatternCard name="zipCode" example="12345-6789" />
            <PatternCard name="username" example="user_123" />
            <PatternCard name="strongPassword" example="MyP@ssw0rd" />
            <PatternCard name="semver" example="1.2.3-alpha" />
            <PatternCard name="macAddress" example="00:1A:2B:3C:4D:5E" />
          </div>
        </section>

        {/* Real World Examples */}
        <section id="examples" className="mb-20">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="text-text-muted">#</span> Real World Examples
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Phone Number with Optional Country Code
              </h3>
              <CodeBlock>{`import { digit, optional } from 'zeroreg'

const phone = optional('+')
  .then(digit(3))
  .then('-')
  .then(digit(3))
  .then('-')
  .then(digit(4))

phone.test('123-456-7890')   // true
phone.test('+123-456-7890')  // true`}</CodeBlock>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Extract Date Parts</h3>
              <CodeBlock>{`import { digit, capture } from 'zeroreg'

const datePattern = capture(digit(4), 'year')
  .then('-')
  .then(capture(digit(2), 'month'))
  .then('-')
  .then(capture(digit(2), 'day'))

const match = '2024-03-15'.match(datePattern.toRegex())
console.log(match.groups)
// { year: '2024', month: '03', day: '15' }`}</CodeBlock>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                Password Validation
              </h3>
              <CodeBlock>{`import { startOfLine, endOfLine, any, digit, letter, lookahead, charIn } from 'zeroreg'

const password = startOfLine()
  .then(lookahead(any().zeroOrMore().then(digit())))       // has digit
  .then(lookahead(any().zeroOrMore().then(letter())))      // has letter
  .then(lookahead(any().zeroOrMore().then(charIn('@$!%*?&')))) // has special
  .then(any().between(8, 32))
  .then(endOfLine())

password.test('MyP@ssw0rd')  // true
password.test('weakpass')    // false`}</CodeBlock>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Match Prices</h3>
              <CodeBlock>{`import { literal, digit, lookbehind } from 'zeroreg'

// Match price amount after "$"
const price = lookbehind(literal('$'))
  .then(digit().oneOrMore())
  .then(literal('.').then(digit(2)).optional())

const matches = price.matchAll('Items: $10, $25.99, $100.00')
// ['10'], ['25.99'], ['100.00']`}</CodeBlock>
            </div>
          </div>
        </section>

        {/* TypeScript */}
        <section id="typescript" className="mb-20">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="text-text-muted">#</span> TypeScript
          </h2>

          <p className="text-text-muted mb-8">
            Full TypeScript support out of the box. All functions are fully
            typed.
          </p>

          <CodeBlock>{`import { digit, capture, type Pattern } from 'zeroreg'

// Pattern type
const phone: Pattern = digit(3).then('-').then(digit(4))

// Named captures are type-safe
const date = capture(digit(4), 'year')
  .then('-')
  .then(capture(digit(2), 'month'))

const regex = date.toRegex()
const match = '2024-03'.match(regex)

if (match?.groups) {
  const { year, month } = match.groups  // TypeScript knows these exist
}`}</CodeBlock>
        </section>

        {/* Footer */}
        <footer className="border-t border-border pt-12 mt-20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="text-text-muted text-sm">
              Built for developers who value their sanity.
            </p>
            <div className="flex gap-6">
              <a
                href="https://github.com/zenweb3/zeroreg-landing"
                className="text-sm text-text-muted hover:text-text transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://npmjs.com/package/zeroreg"
                className="text-sm text-text-muted hover:text-text transition-colors"
              >
                npm
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
