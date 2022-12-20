import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [Color, setColor] = useState("Dark");

  const HandleColorChange = () => {
    if (Color == "Dark") {
      setColor("Light");
    } else {
      setColor("Dark");
    }
  };
  return (
    <>
      <Navbar color={Color} HandleColorChange={HandleColorChange} />
      <Component color={Color} {...pageProps} /> <Footer color={Color} />
    </>
  );
}

export default MyApp;
