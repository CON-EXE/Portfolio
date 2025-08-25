import HeroBanner from "./components/HeroBanner";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <main>
      <HeroBanner />
      <div className="container">
        <About />
        <Experience />
        <Contact />
      </div>
      <Footer />
    </main>
    </>
  );
}

export default App;