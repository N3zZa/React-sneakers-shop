

function Card() {
  return (
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
  );
}

export default Card