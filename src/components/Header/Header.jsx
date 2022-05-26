import styles from "./Header.module.scss";
import { Link } from "react-router-dom";


function Header({ onOpenCart }) {
  return (
    <header>
      <div className={styles.header}>
        <Link to="/">
          <div className={styles.headerlog}>
            <img width={40} height={40} src="/img/logo.png" alt="logo" />
            <div>
              <h3>React Sneakers</h3>
              <p>Магазин лучших кроссовок</p>
            </div>
          </div>
        </Link>
        <ul className={styles.headerlinks}>
          <li className={styles.headerfirstlink}>
            <img
              onClick={onOpenCart}
              width={18}
              height={18}
              src="/img/cart.svg"
              alt="cart"
            />
            <span>1205 руб.</span>
          </li>
          <li>
            <Link to="/favorites">
              <img width={18} height={18} src="/img/likes.svg" alt="likes" />
            </Link>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" alt="user" />
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
