import { Navbar, Hero, CodeDemo } from "@/components";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CodeDemo />
        {/* <InstallCommand /> */}
      </main>
      {/* <Footer /> */}
    </>
  );
}