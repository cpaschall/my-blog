import React from "react";
import "../styles/Home.css"

export default function Home() {
    return (
        <div className="homepage" style={{margin: "0 10%"}}>
            <header className="App-header">
                <h1>Cal's Blog</h1>
            </header>
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
        </div>
    );
};