import HeroBanner from "./components/HeroBanner";
import About from "./components/About";
import Experience from "./components/Experience";

function App() {
  return (
    <>
    <main>
      <HeroBanner />
      <div className="container">
        <About />
        <Experience />
      </div>
    </main>
    </>
  );
}

export default App;