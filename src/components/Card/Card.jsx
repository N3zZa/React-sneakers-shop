import React, { useState,useContext } from "react";
import styles from "./Card.module.scss";
import ContentLoader from "react-content-loader";
import AppContext from "../../context";

function Card({
  id,
  title,
  imageUrl,
  price,
  onFavorite,
  onPlus,
  favorited = false,
  loading = false,
}) {
  const [isFavorite, setIsFavorite] = useState(favorited);
  const { isItemAdded } = useContext(AppContext);

  const onClickPlus = () => {
    onPlus({ title, imageUrl, price, id });
  };

  const onClickAddToFavorite = () => {
    onFavorite({ title, imageUrl, price, id });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={400}
          height={200}
          viewBox="0 0 400 200"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="411" y="39" rx="10" ry="10" width="150" height="91" />
          <rect x="0" y="107" rx="3" ry="3" width="150" height="15" />
          <rect x="0" y="126" rx="3" ry="3" width="93" height="15" />
          <rect x="0" y="163" rx="8" ry="8" width="80" height="24" />
          <rect x="118" y="156" rx="8" ry="8" width="32" height="32" />
          <rect x="0" y="0" rx="0" ry="0" width="150" height="91" />
        </ContentLoader>
      ) : (
        <>
          <div className={styles.favourite} onClick={onClickAddToFavorite}>
            <img
              src={isFavorite ? "/img/heart.svg" : "/img/whiteheart.svg"}
              alt="heart(unliked)"
            />
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
              src={isItemAdded(id) ? "/img/completed.svg" : "/img/plus.svg"}
              alt="plus"
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
