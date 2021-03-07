import React from "react";
import { Route, Switch } from "react-router-dom";
import CheckoutCart from "../Components/CheckoutComponents/Cart/Index";
import CheckoutPayment from "../Components/CheckoutComponents/Payment/Index";
import CheckoutHeading from "../Components/CheckoutComponents/CheckoutHeader/Index";
import CheckoutShipping from "../Components/CheckoutComponents/Shipping/Index";
import CheckoutSummary from "../Components/CheckoutComponents/Summary/Index";
import { useStateValue } from "../StateProvider";

function CheckoutPage() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <>
      <CheckoutHeading />
      <Switch>
        <Route path="/checkout" exact component={CheckoutCart} />
        <Route path="/checkout/shipping" component={CheckoutShipping} />
        <Route path="/checkout/payment" component={CheckoutPayment} />
        <Route path="/checkout/summary" component={CheckoutSummary} />
      </Switch>
      {/* {basket?.length === 0 ? (
        <h2>your cart is empty</h2>
      ) : (
       
      )} */}
    </>
  );
}

export default CheckoutPage;
