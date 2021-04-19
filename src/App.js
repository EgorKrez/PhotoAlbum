import List from "./Components/List";
import MenuPanel from "./Components/MenuPanel";
import TopPanel from "./Components/TopPanel";

function App() {
  return (
    <div className="wrapper">
    <MenuPanel />
    <div className="content-container">
    <TopPanel />
    <List />
    </div>
    </div>
  );
}

export default App;
