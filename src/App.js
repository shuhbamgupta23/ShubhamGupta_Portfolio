import "./App.css";
import About from "./components/About/About";
import Main from "./components/Main/Main";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
      <About />
    </div>
  );
}

export default App;
