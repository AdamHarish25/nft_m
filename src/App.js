import "./App.css";
import Navbar from "./Content/Components/Navbar";
import Home from "./Content/Home";
import LiveAuctions from "./Content/LiveAuctions";
import Offers from "./Content/Offers";
import Overline from "./Content/Overline";

function App() {
  return (
    <div className="App">
      <Home />
      <LiveAuctions />
      <Overline />
      <Offers />
      <Navbar />
    </div>
  );
}

export default App;
