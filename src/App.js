import React, { useEffect, useState } from "react";
import NewsArticles from "./NewsArticles";
import axios from "axios";
import { Card, Button } from "antd";

// const { Meta } = Cards;

function App() {
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    const loadNews = async () => {
      const response = await axios.get(
        "https://jehanzebsapp3.herokuapp.com/api/articles"
      );
      setNewsArticles(response.data.articles);
    };
    loadNews();
  }, []);

  return (
    <div className="App">
      <h1>Daily news</h1>

      <NewsArticles articles={newsArticles} />
      <input type="text" />
      <button>Search articles</button>
      <button>Clear article search</button>
    </div>
  );
}

export default App;
