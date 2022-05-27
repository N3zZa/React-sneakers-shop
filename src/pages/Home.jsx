import Card from "../components/Card/Card";

function Home({
  items,
  search,
  onHandleChangeSearchInput,
  onAddToFavorite,
  onAddToCart,
  searchValue,
  setSearchValue,
}) {
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
        {items.map((item, index) => (
          <Card
            key={index}
            onFavorite={(obj) => onAddToFavorite(obj)}
            onPlus={(obj) => onAddToCart(obj)}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
