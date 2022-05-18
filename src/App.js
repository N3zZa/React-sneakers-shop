function App() {
  return (
    <div className="wrapper">
      <div className="drawerShadow">
        <div className="drawer">
          <h2>Корзина<img
                className="removeBtn"
                src="/img/btn-remove.svg"
                alt="remove"
              /></h2>
          <div className="items">
            <div className="cartItem">
              <div
                style={{ backgroundImage: "url(/img/sneakers/sneakers2.jpg)" }}
                className="cartItemsneakers"
              ></div>
              <div className="cartItemInfo">
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img
                className="removeBtn"
                src="/img/btn-remove.svg"
                alt="remove"
              />
            </div>
            <div className="cartItem">
              <div
                style={{ backgroundImage: "url(/img/sneakers/sneakers4.jpg)" }}
                className="cartItemsneakers"
              ></div>
              <div className="cartItemInfo">
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>8 499 руб.</b>
              </div>
              <img
                className="removeBtn"
                src="/img/btn-remove.svg"
                alt="remove"
              />
            </div>
          </div>

          <div className="cartArrangeBlock">
            <ul className="cartArrangeInfo">
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
            <button className="greenButton">
              Оформить заказ <img src="/img/arrow.svg" alt="arrow" />
            </button>
          </div>
        </div>
      </div>

      <header>
        <div className="header">
          <div className="headerlog">
            <img width={40} height={40} src="/img/logo.png" alt="logo" />
            <div>
              <h3>React Sneakers</h3>
              <p>Магазин лучших кроссовок</p>
            </div>
          </div>
          <ul className="headerlinks">
            <li className="headerfirstlink">
              <img width={18} height={18} src="/img/cart.svg" alt="cart" />
              <span>1205 руб.</span>
            </li>
            <li>
              <img width={18} height={18} src="/img/likes.svg" alt="likes" />
            </li>
            <li>
              <img width={18} height={18} src="/img/user.svg" alt="user" />
            </li>
          </ul>
        </div>
      </header>
      <div className="content">
        <div className="FirstBlock">
          <h1>Все кроссовки</h1>
          <div className="search">
            <img src="/img/search.svg" alt="searchimg" />
            <input placeholder="Поиск..." type="search" />
          </div>
        </div>

        <div className="cards">
          <div className="card">
            <div className="favourite">
              <img src="/img/whiteheart.svg" alt="heart(unliked)" />
            </div>
            <img
              width={133}
              height={112}
              src="/img/sneakers/sneakers1.jpg"
              alt="sneakers"
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="cardInfo">
              <div className="cardPrice">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/sneakers2.jpg"
              alt="sneakers"
            />
            <h5>Мужские Кроссовки Nike Air Max 270</h5>
            <div className="cardInfo">
              <div className="cardPrice">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/sneakers3.jpg"
              alt="sneakers"
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="cardInfo">
              <div className="cardPrice">
                <span>Цена:</span>
                <b>8 499 руб.</b>
              </div>
              <button>
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/sneakers4.jpg"
              alt="sneakers"
            />
            <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
            <div className="cardInfo">
              <div className="cardPrice">
                <span>Цена:</span>
                <b>8 999 руб.</b>
              </div>
              <button>
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
