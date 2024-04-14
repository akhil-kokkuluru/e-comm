/** @format */

import "./App.css";
import Home from "./Home Component/Home";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  Routes,
} from "react-router-dom";
import FavProducts from "./FavProductsPage/FavProducts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          component={Home}
        />
        <Route
          exact
          path="/fav-products"
          component={FavProducts}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
