import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TopBar from "./components/TopBar";
import About from "./components/About";
import Contact from "./components/Contact";
import Policy from "./components/Policy";
import NavBar from "./components/NavBar";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import Registe from "./screens/Registe";
import Login from "./screens/Login";
import OrderScreen from "./screens/OrderScreen";
import AdminScreen from "./screens/AdminScreen";
import MobileFooter from "./components/MobileFooter";
import AppLoader from "./components/AppLoader"; 

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500); // 2.5 seconds ka loader effect
  }, []);

  return (
    <BrowserRouter>
      {loading ? (
        <AppLoader />
      ) : (
        <>
          <TopBar />
          <NavBar />
          <Switch>
            <Route path="/admin" component={AdminScreen} />
            <Route path="/orders" component={OrderScreen} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/register" component={Registe} exact />
            <Route path="/cart" component={CartScreen} exact />
            <Route path="/about" component={About} exact />
            <Route path="/contact" component={Contact} exact />
            <Route path="/policy" component={Policy} exact />
            <Route path="/" component={HomeScreen} />
          </Switch>
          <MobileFooter />
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
