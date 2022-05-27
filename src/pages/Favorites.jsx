import Card from "../components/Card/Card";

function Favorites({ onAddToFavorite, onAddToCart, items }) {
  return (
    <div className="content">
      <div className="FirstBlockFavorites">
        <img src="../../img/arrowfavorites.svg" alt="buttonarrow" />
        <h1>Избранное</h1>
      </div>
      <div className="cards">
        {items.map((item, index) => (
          <Card
            key={index}
            favorited={true}
            onFavorite={onAddToFavorite}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
