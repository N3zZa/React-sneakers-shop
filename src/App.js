import React, { useState, useEffect } from "react";
import {  Route, Routes} from 'react-router-dom'
import axios from "axios";
import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header/Header";
import Card from "./components/Content/Card/Card";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    /*  fetch("https://628667a996bccbf32d74a8c9.mockapi.io/items") // можно использовать вместо axios
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      }); */

    axios
      .get("https://628667a996bccbf32d74a8c9.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });
    axios
      .get("https://628667a996bccbf32d74a8c9.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });
      axios
        .get("https://628667a996bccbf32d74a8c9.mockapi.io/favorites")
        .then((res) => {
          setFavorites(res.data);
        });
  }, []);

  const onAddToCart = (obj) => {
    axios.post("https://628667a996bccbf32d74a8c9.mockapi.io/cart", obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://628667a996bccbf32d74a8c9.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorite = (obj) => {
    axios.post("https://628667a996bccbf32d74a8c9.mockapi.io/favorites", obj);
    setFavorites((prev) => [...prev, obj]);
  };

  const onHandleChangeSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = cartOpened ? "hidden" : "auto";
  }, [cartOpened]);

  const search = items.filter((item) =>
    item.title.toLowerCase().includes(searchValue)
  );

  return (
      <div className="wrapper">
        {cartOpened && (
          <Drawer
            items={cartItems}
            onClose={() => setCartOpened(false)}
            onRemoveFromCart={onRemoveItem}
          />
        )}
        <Header onOpenCart={() => setCartOpened(true)} />

        <Routes>
          <Route exact path="/favorites"></Route>
        </Routes>

        <div className="content">
          <div className="FirstBlock">
            <h1>
              {searchValue
                ? `Поиск по запросу: "${searchValue}"`
                : "Все кроссовки"}
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
            {search.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                onFavorite={(obj) => onAddToFavorite(obj)}
                onPlus={(obj) => onAddToCart(obj)}
              />
            ))}
          </div>
        </div>
      </div>
  );
}

export default App;
