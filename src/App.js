import Content from "./components/Content";
import Drawer from "./components/Drawer";
import Header from "./components/Header";


function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />
      <Content />
    </div>
  );
}

export default App;
