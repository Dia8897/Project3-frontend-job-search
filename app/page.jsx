import HowItWorks from "./components/HowItWorks";
import TopSection from "./components/TopSection";
import About from "./components/About";
import Categories from "./components/Categories";

export default function Home() {
  return (
    <main>
      <TopSection />
      <HowItWorks />
      <About />
      <Categories />
    </main>
  );
}
