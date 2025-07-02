import HowItWorks from "./components/HowItWorks";
import TopSection from "./components/TopSection";
import About from "./components/About";

export default function Home() {
  return (
    <main>
      <TopSection/>
      <HowItWorks />
      <About />
    </main>
  );
}
