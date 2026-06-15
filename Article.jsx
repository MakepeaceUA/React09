import React from 'react';
import './Article.css';

const Article = ({ data, settings }) => {
  const { title, author, text, date, imageUrl } = data;
  const {
    titleFont, titleColor, titleSize, titleAlign, titleBg,
    authorFont, authorColor, authorSize, authorBg,
    textFont, textColor, textSize, textBg,
    articleBg, imagePosition
  } = settings;

  const articleStyle = {
    backgroundColor: articleBg,
    flexDirection: imagePosition === 'right' ? 'row' : 'row-reverse',
  };

  const titleStyle = {
    fontFamily: titleFont,
    color: titleColor,
    fontSize: `${titleSize}px`,
    textAlign: titleAlign,
    backgroundColor: titleBg, 
  };

  const authorStyle = {
    fontFamily: authorFont,
    color: authorColor,
    fontSize: `${authorSize}px`,
    backgroundColor: authorBg,
  };

  const textStyle = {
    fontFamily: textFont,
    color: textColor,
    fontSize: `${textSize}px`,
    backgroundColor: textBg,
  };

  return (
    <article className="article-wrapper" style={articleStyle}>
      {imageUrl && (
        <div className="article-image-container">
          <img src={imageUrl} alt={title} className="article-image" />
        </div>
      )}

      <div className="article-content">
        <h1 style={titleStyle} className="article-title">
          {title || "Без названия"}
        </h1>
        
        <div style={authorStyle} className="article-meta">
          <span>Автор: {author || "Неизвестен"}</span>
          <span className="separator">|</span>
          <span>Дата: {date || "Не указана"}</span>
        </div>

        <p style={textStyle} className="article-text">
          {text || "Текст статьи отсутствует."}
        </p>
      </div>
    </article>
  );
};

export default Article;