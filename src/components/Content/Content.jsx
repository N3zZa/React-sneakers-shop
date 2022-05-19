import React, {useState} from 'react';
import Card from "./Card/Card";
import styles from './Content.module.scss'



function Content() {

  const [items, setItems] = useState([]);

  

  return (
    <div className={styles.content}>
      <div className={styles.FirstBlock}>
        <h1>Все кроссовки</h1>
        <div className={styles.search}>
          <input placeholder="Поиск..." type="search" />
        </div>
      </div>

      <div className={styles.cards}>
        {items.map((obj) => (
          <Card
            title={obj.title}
            price={obj.price}
            imageUrl={obj.imageUrl}
            onFavorite={() => console.log("Добавили в закладки")}
            onPlus={() => console.log("Добавили в понравившиеся")}
          />
        ))}
      </div>
    </div>
  );
};

export default Content;
