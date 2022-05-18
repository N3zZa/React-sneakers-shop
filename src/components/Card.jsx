

function Card(props) {

  return (
    <div className="card">
      <div className="favourite">
        <img src="/img/whiteheart.svg" alt="heart(unliked)" />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt="sneakers" />
      <h5>{props.title}</h5>
      <div className="cardInfo">
        <div className="cardPrice">
          <span>Цена:</span>
          <b>{props.price} руб.</b>
        </div>
        <button onClick={props.onClick}>
          <img width={11} height={11} src="/img/plus.svg" alt="plus" />
        </button>
      </div>
    </div>
  );
}

export default Card