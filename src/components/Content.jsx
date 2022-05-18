import Card from "./Card";


const arr = [
  { title: "Мужские Кроссовки Nike Blazer Mid Suede", price: 12999, imageUrl:'/img/sneakers/sneakers1.jpg' },
  { title: "Мужские Кроссовки Nike Air Max 270", price: 16500, imageUrl:'/img/sneakers/sneakers2.jpg' },
  { title: "Мужские Кроссовки Nike Blazer Mid Suede", price: 8499, imageUrl:'/img/sneakers/sneakers3.jpg' },
  { title: "Кроссовки Puma X Aka Boku Future Rider", price: 8999, imageUrl:'/img/sneakers/sneakers4.jpg' },
];


function Content() {
  return (
    <div className="content">
      <div className="FirstBlock">
        <h1>Все кроссовки</h1>
        <div className="search">
          <input placeholder="Поиск..." type="search" />
        </div>
      </div>

      <div className="cards">       
        {arr.map((obj) => (
          <Card
            title={obj.title}
            price={obj.price}
            imageUrl={obj.imageUrl}
            onClick={() => console.log(obj)}
          />
        ))}
      </div>
    </div>
  );
};

export default Content;
