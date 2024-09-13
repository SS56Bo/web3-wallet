import "./App.css";
//import Hello from "./components/Hello";
import Navbar from "./components/Navbar";
import SeedPhrase from "./components/SeedPhrase";

function App() {
  return (
    <>
      <div className="root">
        <Navbar />
        <SeedPhrase />
      </div>
    </>
  );
}

export default App;
