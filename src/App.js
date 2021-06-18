import Navbar from "../src/Components/Navbar";
import Home from "../src/Components/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home/>
      </div>
    </div>
  );
}

export default App;
