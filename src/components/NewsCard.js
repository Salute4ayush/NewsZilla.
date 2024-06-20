import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../redux/favoritesSlice";
import Modal from "./Modal";

const NewsCard = ({ article }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.articles);
  const [showModal, setShowModal] = useState(false);

  const isFavorited = favorites.some(
    (favoriteArticle) => favoriteArticle.url === article.url
  );

  const handleFavoriteClick = () => {
    dispatch(toggleFavorite(article));
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div className="card" onClick={openModal}>
        <div className="card-header">
          <img src={article.urlToImage} alt="news" />
        </div>
        <div className="card-content">
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <p className="news-source">Source: {article.source.name}</p>
          <button
            className={`favorite-button ${isFavorited ? "favorited" : ""}`}
            onClick={(e) => {
              e.stopPropagation();
              handleFavoriteClick();
            }}
          >
            {isFavorited ? "Unfavorite" : "Favorite"}
          </button>
        </div>
      </div>
      <Modal show={showModal} article={article} onClose={closeModal} />
    </div>
  );
};

export default NewsCard;
