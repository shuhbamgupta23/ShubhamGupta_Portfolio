import "./App.css";
import About from "./components/About/About";
import Main from "./components/Main/Main";
import NavBar from "./components/NavBar/NavBar";
import Project from "./components/Project/Project";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
      <About />
      <Project />
    </div>
  );
}

export default App;
