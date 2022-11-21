// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav'
import Home from './pages/Home'
import BlogPost from './pages/BlogPost'


function App() {
  return (
    <div className="App">
      <main style={{display: "flex"}}>
        <Nav />
        {/* <Home /> */}
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog-post" element={<BlogPost />} />
          </Routes>
        </Router>
        
      </main>
      
    </div>
  );
}

export default App;
