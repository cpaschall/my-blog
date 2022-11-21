import React from "react";
// import {BrowserRouter as Router, Link } from "react-router-dom";
import "../styles/Home.css"

export default function Home() {
    return (
        <div className="homepage" style={{margin: "0 10%"}}>
            <header className="App-header">
                <h1>Cal's Blog</h1>
            </header>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <div className="article-section">
                    <div className="article">
                        <div>
                            <h1>Test Article 1</h1>
                            <p>Lorem Ipsum</p>
                        </div>
                        <div>
                            <h1>Test Article 2</h1>
                            <p>Lorem Ipsum</p>
                        </div>
                        <div>
                            <h1>Test Article 3</h1>
                            <p>Lorem Ipsum</p>
                        </div>
                    </div>
                </div>
                {/* <Router> */}
                    <div className="search">
                        <a href="/blog-post">
                            <button>Add New Article</button>
                        </a>  
                    </div>
                {/* </Router> */}
            </div>
        </div>
    );
};