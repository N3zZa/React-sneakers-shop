import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import AppContext from "./context"

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  
  
  
  useEffect(() => {
    /*  fetch("https://628667a996bccbf32d74a8c9.mockapi.io/items") // можно использовать вместо axios
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      setItems(json);
    }); */
    
    async function fetchData() {
      const cartResponse = await axios.get(
        "https://628667a996bccbf32d74a8c9.mockapi.io/cart"
      );
      const favoritesResponse = await axios.get(
        "https://628667a996bccbf32d74a8c9.mockapi.io/favorites"
      );
      setIsLoading(false);
      const itemsResponse = await axios.get(
        "https://628667a996bccbf32d74a8c9.mockapi.io/items"
        );
      setCartItems(cartResponse.data);
      setFavorites(favoritesResponse.data);
      setItems(itemsResponse.data);
    }

    fetchData();
  }, []);

  const onAddToCart = (obj) => {
     try {
        if (cartItems.find((cartObj) => +cartObj.id === +obj.id)) {
        axios.delete(
          `https://628667a996bccbf32d74a8c9.mockapi.io/cart/${obj.id}`
        );
        setCartItems((prev) => prev.filter((item) => +item.id !== +obj.id));
      } else {
        axios.post("https://628667a996bccbf32d74a8c9.mockapi.io/cart", obj);
        setCartItems((prev) => [...prev, obj]);
      }
     } catch {
       alert("Не удалось добавить в корзину")
     }
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://628667a996bccbf32d74a8c9.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => +item.id !== +id));
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => +favObj.id === +obj.id)) {
        axios.delete(
          `https://628667a996bccbf32d74a8c9.mockapi.io/favorites/${obj.id}`
        );
        setFavorites((prev) => prev.filter((item) => +item.id !== +obj.id));
      } else {
        const { data } = await axios.post(
          "https://628667a996bccbf32d74a8c9.mockapi.io/favorites",
          obj
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Не удалось добавить в избранное");
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

  const isItemAdded = (id) => {
    return cartItems.some((obj) => +obj.id === +id);
  };

  return (
    <Router>
      <AppContext.Provider
        value={{
          items,
          cartItems,
          favorites,
          search,
          isItemAdded,
          onAddToFavorite,
          setCartOpened,
          setCartItems
        }}
      >
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
                  onHandleChangeSearchInput={onHandleChangeSearchInput}
                  onAddToFavorite={onAddToFavorite}
                  onAddToCart={onAddToCart}
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                  isLoading={isLoading}
                />
              }
            ></Route>
            <Route
              exact
              path="/favorites"
              element={<Favorites onAddToCart={onAddToCart} />}
            ></Route>
          </Routes>
        </div>
      </AppContext.Provider>
    </Router>
  );
}

export default App;
