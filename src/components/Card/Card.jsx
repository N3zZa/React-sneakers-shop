import React, { useState } from 'react';
import styles from './Card.module.scss'

function Card({ id, title, imageUrl, price, onFavorite, onPlus, favorited = false }) {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(favorited);

  const onClickPlus = () => {
    onPlus({ title, imageUrl, price, id });
    setIsAdded(!isAdded);
  };

  const onClickAddToFavorite = () => {
    onFavorite({ title, imageUrl, price, id });
    setIsFavorite(!isFavorite);
  }

  return (
    <div className={styles.card}>
      <div className={styles.favourite} onClick={onClickAddToFavorite}>
        <img src={isFavorite ? "/img/heart.svg" : "/img/whiteheart.svg"} alt="heart(unliked)" />
      </div>
      <img width={133} height={112} src={imageUrl} alt="sneakers" />
      <h5>{title}</h5>
      <div className={styles.cardInfo}>
        <div className={styles.cardPrice}>
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <img
          onClick={onClickPlus}
          src={isAdded ? "/img/completed.svg" : "/img/plus.svg"}
          alt="plus"
        />
      </div>
    </div>
  );
}

export default Card