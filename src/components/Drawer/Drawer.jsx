import styles from "./Drawer.module.scss";

function Drawer(props) {
  return (
    <div className={styles.drawerShadow}>
      <div className={styles.drawer}>
        <h2>
          Корзина
          <img
            onClick={props.onClose}
            className={styles.removeBtn}
            src="/img/btn-remove.svg"
            alt="remove"
          />
        </h2>
        <div className={styles.items}>
          <div className={styles.cartItem}>
            <div
              style={{ backgroundImage: "url(/img/sneakers/sneakers2.jpg)" }}
              className={styles.cartItemsneakers}
            ></div>
            <div className={styles.cartItemInfo}>
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img
              className={styles.removeBtn}
              src="/img/btn-remove.svg"
              alt="remove"
            />
          </div>
          <div className={styles.cartItem}>
            <div
              style={{ backgroundImage: "url(/img/sneakers/sneakers4.jpg)" }}
              className={styles.cartItemsneakers}
            ></div>
            <div className={styles.cartItemInfo}>
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>8 499 руб.</b>
            </div>
            <img
              className={styles.removeBtn}
              src="/img/btn-remove.svg"
              alt="remove"
            />
          </div>
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
