import HowItWorks from "./components/HowItWorks";
import TopSection from "./components/TopSection";
import About from "./components/About";
import Categories from "./components/Categories";
import RecentlyAdded from "./components/RecentlyAdded"
import Feedback from "./components/Feedback";
import Footer from "./components/Footer"


export default function Home() {
  return (
    <main>
      <TopSection />
      <HowItWorks />
      <About />
      <Categories />
      <RecentlyAdded />
      <Feedback />
      <Footer />
    </main>
  );
}
