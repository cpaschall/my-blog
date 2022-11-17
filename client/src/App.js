// import logo from './logo.svg';
// import './App.css';
import Nav from "./components/Nav"
import Home from "./pages/Home"

function App() {
  return (
    <div className="App">
      <main style={{display: "flex"}}>
        <Nav />
        <Home />
      </main>
      
    </div>
  );
}

export default App;
