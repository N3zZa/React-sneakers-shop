import React, { useState } from 'react';
import styles from './Card.module.scss'

function Card(props) {
  const [isAdded, setIsAdded] = useState(false);

  const onClickPlus= () => {
    setIsAdded(!isAdded);
  }

  return (
    <div className={styles.card}>
      <div className={styles.favourite} onClick={props.onFavorite}>
        <img src="/img/whiteheart.svg" alt="heart(unliked)" />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt="sneakers" />
      <h5>{props.title}</h5>
      <div className={styles.cardInfo}>
        <div className={styles.cardPrice}>
          <span>Цена:</span>
          <b>{props.price} руб.</b>
        </div>
        <img onClick={onClickPlus} src={isAdded ? '/img/completed.svg' : '/img/plus.svg'} alt="plus" />
      </div>
    </div>
  );
}

export default Card