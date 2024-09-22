import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import HowItWorks from "./sections/HowItWorks";
import KeyFeatures from "./sections/KeyFeatures";
import Pricing from "./sections/Pricing";
import Testimonials from "./sections/Testimonials";

function App() {
  return (
    <section className="text-neutral-300 antialiased">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div
          className="absolute top-0 z-[-2] h-screen
       w-screen bg-neutral-950 
       bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
        />
      </div>
      <Nav />
      <Hero />
      <HowItWorks />
      <KeyFeatures />
      <Pricing />
      <Testimonials />
    </section>
  );
}

export default App;
