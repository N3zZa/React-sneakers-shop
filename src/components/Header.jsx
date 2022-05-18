
function Header() {
  return (
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
  );
}

export default Header