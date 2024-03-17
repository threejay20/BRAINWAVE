// This code represents the main application component, "App", which serves as the entry point for the website.
// It includes various sub-components such as Header, Hero, Benefits, Collaboration, Services, Pricing, Roadmap, and Footer,
// arranged in the desired order to compose the entire website layout.
// Additionally, it renders a ButtonGradient component at the end, likely serving as a floating action button or similar UI element.

import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
