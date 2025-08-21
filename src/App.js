import HeroBanner from "./components/HeroBanner";
import About from "./components/About";

function App() {
  return (
    <>
    <main>
      <HeroBanner />
      <div className="container">
        <About />
      </div>
    </main>
    </>
  );
}

export default App;