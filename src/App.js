import "./App.css";
import Navbar from "./Content/Components/Navbar";
import Home from "./Content/Home";
import LiveAuctions from "./Content/LiveAuctions";
import Overline from "./Content/Overline";

function App() {
  console.log(23 * 60 * 60 * 1000 + new Date().getTime());
  return (
    <div className="App">
      <Home />
      <LiveAuctions />
      <Overline />
      <Navbar />
    </div>
  );
}

export default App;
