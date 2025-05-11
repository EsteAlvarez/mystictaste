import { useState, useEffect } from "react";
import {
  Header,
  Dishes,
  Gallery,
  History,
  Ratings,
  OurEssence,
  Footer,
} from "./components/";
import "./styles/extra.css";
import "@fontsource-variable/lora";
import "@fontsource/great-vibes";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen bg-[#111111]">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          <Header />
          <Dishes />
          <Gallery />
          <History />
          <Ratings />
          <OurEssence />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
