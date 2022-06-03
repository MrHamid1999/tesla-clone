import Models from "./components/models";
import Menu from "./components/menu";
import { data } from "./data";
function App() {
  return (
    <div className="container">
      <Menu />
         {data.map(item => {
           return <Models key={new Date().getMilliseconds().toString()} props={item} />
         })}
    </div>
  );
}

export default App;
