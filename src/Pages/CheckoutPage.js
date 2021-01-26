import React from "react";
import { Route, Switch } from "react-router-dom";
import CheckoutCart from "../Components/CheckoutComponents/Cart/Index";
import CheckoutPayment from "../Components/CheckoutComponents/Payment/Index";
import CheckoutHeading from "../Components/CheckoutComponents/CheckoutHeader/Index";
import CheckoutShipping from "../Components/CheckoutComponents/Shipping/Index";
import CheckoutSummary from "../Components/CheckoutComponents/Summary/Index";

function CheckoutPage() {
  return (
    <>
      <CheckoutHeading />
      <Switch>
        <Route path="/checkout" exact component={CheckoutCart} />
        <Route path="/checkout/shipping" component={CheckoutShipping} />
        <Route path="/checkout/payment" component={CheckoutPayment} />
        <Route path="/checkout/summary" component={CheckoutSummary} />
      </Switch>
    </>
  );
}

export default CheckoutPage;
