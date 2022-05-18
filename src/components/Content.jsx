import Card from "./Card";

function Content() {
  return (
    <div className="content">
      <div className="FirstBlock">
        <h1>Все кроссовки</h1>
        <div className="search">
          <img src="/img/search.svg" alt="searchimg" />
          <input placeholder="Поиск..." type="search" />
        </div>
      </div>

      <div className="cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Content;
