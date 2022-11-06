import "./App.css";
import Navbar from "./Content/Components/Navbar";
import Home from "./Content/Home";
import LiveAuctions from "./Content/LiveAuctions";

function App() {
  return (
    <div className="App">
      <Home />
      <LiveAuctions />
      <Navbar />
    </div>
  );
}

export default App;
