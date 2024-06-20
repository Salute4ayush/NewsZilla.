import React from 'react';
import './Modal.css';

const Modal = ({ show, article, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title">{article.title}</h4>
        </div>
        <div className="modal-body">
          <img src={article.urlToImage} alt="news" className="modal-image"/>
          <p>{article.content}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
        </div>
        <div className="modal-footer">
          <button onClick={onClose} className="button">Close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
