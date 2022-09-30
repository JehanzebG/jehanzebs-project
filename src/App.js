import React, { useEffect, useState } from "react";
import NewsArticles from "./NewsArticles";
import axios from "axios";
import Topics from "./Topics";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
    <BrowserRouter>
      <div className="App">
        <h1>Daily news</h1>
        <Routes>
          <Route path="/" element={<NewsArticles articles={newsArticles} />} />
          <Route path="/topics" element={<Topics />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
