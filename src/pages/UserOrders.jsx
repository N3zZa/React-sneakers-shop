import Card from "../components/Card/Card";
import { Link } from "react-router-dom";
import React, {useState, useEffect} from "react";
import axios from "axios"

function UserOrders() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://628667a996bccbf32d74a8c9.mockapi.io/orders"
        );
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      } catch (error) {
        alert("Не удалось добавить в ваши заказы :(");
        console.error(error)
      }
    })();
  }, []);

  return (
    <div className="content">
      <div className="FirstBlockFavorites">
        <Link to="/">
          <img src="../../img/arrowfavorites.svg" alt="buttonarrow" />
        </Link>
        <h1>Мои заказы</h1>
      </div>
      <div className="cards">
        {(isLoading ? Array(8).fill({}) : orders).map((item, index) => (
          <Card
            key={index}
            loading={isLoading}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}

export default UserOrders;
