import Card from "../components/Card/Card";
import { Link } from "react-router-dom";

function Favorites({ onAddToFavorite, favorites }) {
  return (
    <div className="content">
      <div className="FirstBlockFavorites">
        <Link to='/'><img src="../../img/arrowfavorites.svg" alt="buttonarrow" /></Link>
        <h1>Избранное</h1>
      </div>
      <div className="cards">
        {favorites.map((item, index) => (
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
