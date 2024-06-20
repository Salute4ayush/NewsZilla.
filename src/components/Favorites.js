import React from "react";
import { useSelector } from "react-redux";
import NewsCard from "./NewsCard";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites.articles);

  return (
    <div>
      <h2 className="favorites-heading">Favorites</h2>
      <div className="cards-container container flex">
        {favorites.length ? (
          favorites.map((article, index) => <NewsCard key={index} article={article} />)
        ) : (
          <p>No favorite articles yet.</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
