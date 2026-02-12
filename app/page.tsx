import { Navbar, Hero, CodeDemo, InstallCommand } from "@/components";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CodeDemo />
        <InstallCommand />
      </main>
      {/* <Footer /> */}
    </>
  );
}