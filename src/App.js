import "./App.css";
import {
  Hero,
  Attractions,
  Features,
  Testimonials,
  Contributors,
  Footer,
} from "./container";

function App() {
  return (
    <div className="app">
      <Hero />
      <Attractions />
      <Features />
      <Testimonials />
      <Contributors />
      <Footer />
    </div>
  );
}

export default App;
