import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import Footer from "./Footer";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //USER LOGGED IN
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //USER LOGGED OUT
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      //CLEAN-UP PROCESS
      unSubscribe();
    };
  }, []);
  console.log("USER IS >>>>>> ", user);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
