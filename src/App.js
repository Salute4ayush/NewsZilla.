import React, { useState, useEffect } from "react";
import "./App.css";
import logo from "./logo-news.png";
import NewsCard from "./components/NewsCard";
import Favorites from "./components/Favorites";

const API_KEY = "524b9a0051d3442e88412303afdc0d00";
const url = "https://newsapi.org/v2/everything?q=";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState("India");
  const [selectedNav, setSelectedNav] = useState(null);

  useEffect(() => {
    fetchNews(query);
  }, [query]);

  const fetchNews = async (query) => {
    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const data = await res.json();
    setArticles(data.articles);
  };

  const onNavItemClick = (id) => {
    setQuery(id);
    setSelectedNav(id);
  };

  const handleSearch = () => {
    const searchText = document.getElementById("search-text").value;
    if (!searchText) return;
    setQuery(searchText);
    setSelectedNav(null);
  };

  return (
    <div>
      <nav className="main-nav container flex">
        <a href="/" onClick={() => window.location.reload()} className="company-logo">
          <img src={logo} alt="company logo" />
          <h3>Newszilla</h3>
        </a>
        <div className="nav-links">
          <ul className="flex">
            {["Education", "Sports", "Bihar", "Finance", "Politics"].map((item) => (
              <li
                key={item}
                className={`hover-link nav-item ${selectedNav === item ? "active" : ""}`}
                id={item}
                onClick={() => onNavItemClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="search-bar flex">
          <input id="search-text" type="text" className="news-input" placeholder="e.g. Science" />
          <button id="search-button" className="search-button" onClick={handleSearch}>
            Search
          </button>
        </div>
      </nav>

      <main>
        <div className="cards-container container flex" id="cards-container">
          {articles.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))}
        </div>
        <Favorites />
      </main>
    </div>
  );
};

export default App;
