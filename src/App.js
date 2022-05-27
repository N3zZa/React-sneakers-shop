import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [searchValue, setSearchValue] = useState("");

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

  const onAddToFavorite = async (obj) => {
    if (favorites.find((favObj) => favObj.id === obj.id)) {
      axios.delete(
        `https://628667a996bccbf32d74a8c9.mockapi.io/favorites/${obj.id}`
      );
    } else {
      const {data} = await axios.post(
        "https://628667a996bccbf32d74a8c9.mockapi.io/favorites",
        obj
      );
      setFavorites((prev) => [...prev, data]);
    }
  };

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = cartOpened ? "hidden" : "auto";
  }, [cartOpened]);

  const search = items.filter((item) =>
    item.title.toLowerCase().includes(searchValue)
  );

  const onHandleChangeSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

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
        <Route
          exact
          path="/"
          element={
            <Home
              items={items}
              search={search}
              onHandleChangeSearchInput={onHandleChangeSearchInput}
              onAddToFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          }
        ></Route>
        <Route
          exact
          path="/favorites"
          element={
            <Favorites
              search={search}
              onAddToFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
              items={favorites}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
