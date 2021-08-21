import TopBar from "./components/TopBar";
import DashBoard from "./components/DashBoard";
import AddEmployee from "./components/AddEmployee";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <TopBar />
        <Switch>
          <Route exact path="/" component={DashBoard}></Route>
          <Route exact path="/add-employee" component={AddEmployee}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
