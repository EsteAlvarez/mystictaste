import {
  Header,
  Dishes,
  Gallery,
  History,
  OurEssence,
  Ratings,
  Footer,
} from "./components/";
import "./styles/extra.css";
import "@fontsource-variable/lora";
import "@fontsource/great-vibes";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      // Esperar un poco para dar sensación de transición suave
      setTimeout(() => {
        setLoading(false);
      }, 500);
    };

    // Espera a que todo haya cargado (html, css, imágenes, fuentes, etc.)
    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <>
      <div className={`preloader ${!loading ? "fade-out" : ""}`}>
        <div className="loader"></div>
      </div>

      {!loading && (
        <div>
          <Header />
          <Dishes />
          <Gallery />
          <History />
          <Ratings />
          <OurEssence />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
