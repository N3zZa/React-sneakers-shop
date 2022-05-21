import React, { useState } from 'react';
import styles from './Card.module.scss'

function Card({ title, imageUrl, price, onFavorite, onPlus }) {
  const [isAdded, setIsAdded] = useState(false);

  const onClickPlus = () => {
    onPlus({ title, imageUrl, price });
    setIsAdded(!isAdded);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favourite} onClick={onFavorite}>
        <img src="/img/whiteheart.svg" alt="heart(unliked)" />
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