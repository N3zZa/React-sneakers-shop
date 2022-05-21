import styles from "./Drawer.module.scss";
import React, { useState } from 'react';


function Drawer({ onClose, items = []}) {
  const [isAdded, setIsAdded] = useState(false);

  const onClickPlus = () => {
    setIsAdded(!isAdded);
  };
  
  

  return (
    
    <div className={styles.drawerShadow}>
      <div className={styles.drawer}>
        <h2>
          Корзина
          <img
            onClick={onClose}
            className={styles.removeBtn}
            src="/img/btn-remove.svg"
            alt="remove"
          />
        </h2>
        <div className={styles.items}>
          {!isAdded
            ? items.map((obj) => (
                <div className={styles.cartItem}>
                  <div
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                    className={styles.cartItemsneakers}
                  ></div>
                  <div className={styles.cartItemInfo}>
                    <p>{obj.title}</p>
                    <b>{obj.price} руб.</b>
                  </div>
                  <img
                    onClick={onClickPlus}
                    className={styles.removeBtn}
                    src="/img/btn-remove.svg"
                    alt="remove"
                  />
                </div>
              ))
            : null}
        </div>

        <div className={styles.cartArrangeBlock}>
          <ul className={styles.cartArrangeInfo}>
            <li>
              <span>Итого: </span>
              <div></div>
              <b>21 498 руб. </b>
            </li>
            <li>
              <span>Налог 5%: </span>
              <div></div>
              <b>1074 руб. </b>
            </li>
          </ul>
          <button className={styles.greenButton}>
            Оформить заказ <img src="/img/arrow.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}


export default Drawer;
