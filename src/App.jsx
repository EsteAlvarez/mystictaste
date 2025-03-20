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
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="min-h-[100vh] min-w-[100%] bg-[#111] flex justify-center items-center">
          <div className="loader"></div>
        </div>
      ) : (
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
