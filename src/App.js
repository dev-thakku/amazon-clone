import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import "./App.css";

import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Orders from "./Orders";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import Footer from "./Footer";
import Payment from "./Payment";
const promise = loadStripe(
  "pk_test_51HQCEqEkyZimy8Tz5iopOFCJEufjlDjnVuJ2OCcIOHVohRuz2pkdJJQ59U07wZtuCuZh3L8MsYoyv6Ck6Uk7VYtv007U8qEdCT"
);

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
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
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
