import styles from "./Drawer.module.scss";
import React,{useState,useContext} from "react";
import Info from "../info/info";
import AppContext from "../../context";
import axios from "axios";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

function Drawer({ onClose, onRemoveFromCart, items = [] }) {

  const {cartItems, setCartItems} = useContext(AppContext);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);

const onClickOrder = async () => {
  try {
    setIsLoading(true);
    const { data } = await axios.post(
    "https://628667a996bccbf32d74a8c9.mockapi.io/orders",
    {items:cartItems,}
  );
  setOrderId(data.id)
  setIsCompleted(true);
  setCartItems([])

  for (let i = 0; i < cartItems.length; i++) {
    const item = cartItems[i];
    await axios.delete("https://628667a996bccbf32d74a8c9.mockapi.io/cart/" + item.id)
    await delay(1000);
  } 
  } catch (error) {
    alert("Ошибка при оформлении заказа :(")
  }
  setIsLoading(false);
}


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

        {items.length > 0 ? (
          <div className={styles.parent}>
            <div className={styles.items}>
              {items.map((obj) => (
                <div key={obj.id} className={styles.cartItem}>
                  <div
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                    className={styles.cartItemsneakers}
                  ></div>
                  <div className={styles.cartItemInfo}>
                    <p>{obj.title}</p>
                    <b>{obj.price} руб.</b>
                  </div>
                  <img
                    onClick={() => onRemoveFromCart(obj.id)}
                    className={styles.removeBtn}
                    src="/img/btn-remove.svg"
                    alt="remove"
                  />
                </div>
              ))}
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
              <button disabled={isLoading} onClick={onClickOrder} className={styles.greenButton}>
                Оформить заказ <img src="/img/arrow.svg" alt="arrow" />
              </button>
            </div>
          </div>
        ) : (
          <Info
            title={isCompleted ? "Заказ оформлен!" : "Корзина пустая"}
            description={
              isCompleted
                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
            }
            image={
              isCompleted
                ? "../../../img/cartcompleted.jpg"
                : "../../../img/emptycart.png"
            }
          />
        )}
      </div>
    </div>
  );
}

export default Drawer;
