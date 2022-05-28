import Card from "../components/Card/Card";


function Home({
  search,
  onHandleChangeSearchInput,
  onAddToFavorite,
  onAddToCart,
  searchValue,
  cartItems,
  isLoading
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
        {(isLoading
          ? [...Array(8)]
          : search
        ).map((item, index) => (
          <Card
            key={index}
            onFavorite={(obj) => onAddToFavorite(obj)}
            onPlus={(obj) => onAddToCart(obj)}
            added={cartItems.some((obj) => +obj.id === +item.id)}
            loading={isLoading}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
