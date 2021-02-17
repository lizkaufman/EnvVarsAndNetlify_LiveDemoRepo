import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetchQuote();
  }, []);

  async function fetchQuote() {
    const res = await fetch(`${process.env.REACT_APP_API_URL}`);
    const data = await res.json();
    setQuote(data.quote);
  }

  function handleClick() {
    fetchQuote();
  }

  return (
    <div className="App">
      <h1 className="quote">{quote}</h1>
      <img
        className="App-logo"
        alt="Kanye pic"
        src="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ed00f17d4a99d0006d2e738%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D154%26cropX2%3D4820%26cropY1%3D651%26cropY2%3D5314"
      />
      <button className="newQuoteButton" onClick={handleClick}>
        New quote
      </button>
    </div>
  );
}

export default App;
