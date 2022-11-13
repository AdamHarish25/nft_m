import "./App.css";
import Navbar from "./Content/Components/Navbar";
import Home from "./Content/Home";
import LiveAuctions from "./Content/LiveAuctions";
import Offers from "./Content/Offers";
import Overline from "./Content/Overline";
import Overline2 from "./Content/Overline2";

function App() {
  return (
    <div className="App">
      <Home />
      <LiveAuctions />
      <Overline />
      <Offers />
      <Overline2/>
      <Navbar />
    </div>
  );
}

export default App;
