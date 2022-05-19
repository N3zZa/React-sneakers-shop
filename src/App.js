import React, {useState} from 'react';
import Content from "./components/Content/Content";
import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header/Header";


function App() {

  const [cartOpened, setCartOpened] = useState(false);
  return (
    <div className="wrapper">
      {cartOpened && <Drawer onClose={() => setCartOpened(false)} />}
      <Header onOpenCart={() => setCartOpened(true)} />
      <Content />
    </div>
  );
}

export default App;
