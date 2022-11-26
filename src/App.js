import { useState } from "react";
import "./App.css";
import Navbar from "./Content/Components/Navbar";
import { useViewport } from "./Content/Components/Viewport";
import Home from "./Content/Home";
import LiveAuctions from "./Content/LiveAuctions";
import MobileWarning from "./Content/mobileWarning";
import Offers from "./Content/Offers";
import Overline from "./Content/Overline";
import Overline2 from "./Content/Overline2";
import Showcase from "./Content/Showcase";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const viewport = useViewport().windowSize;


  if(isMobile === false && viewport.innerWidth <= 847 ){
    setIsMobile(true);
  }else if(isMobile === true && viewport.innerWidth > 847){
    setIsMobile(false);
  }

  return isMobile ? (
  <div>
      <MobileWarning/>
  </div>
  ) : (
  <div className="overflow-x-hidden">
      <Home />
      <LiveAuctions />
      <Overline />
      <Offers />
      <Overline2/>
      <Showcase/>
      <Navbar />
  </div>);
}

export default App;
