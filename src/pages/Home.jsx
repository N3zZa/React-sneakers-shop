import Card from "../components/Card/Card";
import React,{useContext} from 'react';
import AppContext from "../context";

function Home({
  onHandleChangeSearchInput,
  onAddToFavorite,
  onAddToCart,
  searchValue,
  isLoading
}) {

  const { search } = useContext(AppContext);

  return (
    <div className="content">
      <div className="FirstBlock">
        <h1>
          {searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}
        </h1>
        <div className="search">
          <input
            onChange={onHandleChangeSearchInput}
            value={searchValue}
            placeholder="Поиск..."
            type="search"
          />
        </div>
      </div>
      <div className="cards">
        {(isLoading ? Array(8).fill({}) : search).map((item, index) => (
          <Card
            key={index}
            onFavorite={(obj) => onAddToFavorite(obj)}
            onPlus={(obj) => onAddToCart(obj)}
            loading={isLoading}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
