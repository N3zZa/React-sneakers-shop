import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import AppContext from "./context"
import UserOrders from "./pages/UserOrders";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  
  
  
  useEffect(() => {
    
    async function fetchData() {
     try {
       const [cartResponse, favoritesResponse, itemsResponse] =
         await Promise.all([
           axios.get("https://628667a996bccbf32d74a8c9.mockapi.io/cart"),
           axios.get("https://628667a996bccbf32d74a8c9.mockapi.io/favorites"),
           axios.get("https://628667a996bccbf32d74a8c9.mockapi.io/items"),
         ]);
        setIsLoading(false);
        setCartItems(cartResponse.data);
        setFavorites(favoritesResponse.data);
        setItems(itemsResponse.data);
     } catch (error) {
       alert("Ошибка при запросе данных");
       console.error(error);
     }
    }

    fetchData();
  }, []);

  const onAddToCart = async (obj) => {
     try {
      const findItem = cartItems.find((cartObj) => +cartObj.parentId === +obj.id)
        if (findItem) {
          setCartItems((prev) => prev.filter((item) => +item.parentId !== +obj.id));
          await axios.delete(
            `https://628667a996bccbf32d74a8c9.mockapi.io/cart/${findItem.id}`
          );
        } else {
          setCartItems((prev) => [...prev, obj]);
          const { data } = await axios.post(
            "https://628667a996bccbf32d74a8c9.mockapi.io/cart",
            obj
          );
          setCartItems((prev) => prev.map(item => {
            if (item.parentId === data.parentId) {
              return {
                ...item,
                id: data.id
              };
            }
            return item;
          }));
        } 
     } catch (error) {
       alert("Не удалось добавить в корзину")
       console.error(error);
     }
  };

  const onRemoveItem = (id) => {
    try {
      axios.delete(`https://628667a996bccbf32d74a8c9.mockapi.io/cart/${id}`);
      setCartItems((prev) => prev.filter((item) => +item.id !== +id));
    } catch (error) {
      alert("Ошибка при удалении товара из корзины");
      console.error(error);
    }
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
      console.error(error);
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
    return cartItems.some((obj) => +obj.parentId === +id);
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
          onAddToCart,
          setCartOpened,
          setCartItems,
        }}
      >
        <div className="wrapper">
          <Drawer
            items={cartItems}
            onClose={() => setCartOpened(false)}
            onRemoveFromCart={onRemoveItem}
            opened={cartOpened}
          />
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
            <Route exact path="/userOrders" element={<UserOrders />}></Route>
          </Routes>
        </div>
      </AppContext.Provider>
    </Router>
  );
}

export default App;
