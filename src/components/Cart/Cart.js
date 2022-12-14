import { Button } from "@mui/material";
import React ,{ useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { CartContext1 } from "../../context/CartContext1";
 
import ItemCart from "../itemCart/ItemCart";
import "./Cart.scss";


const Cart = ({ product = [] }) => {
  
  const { cart, cartTotal, emptyCart, cartQuantity } = useContext(CartContext1);

  if (cart.length === 0) {
    return <Navigate to="/" />;
  }
  return (
    <div className="containerCart">
      <div className="containerWatches">
        <div className="containerTitle">
          <h2 className="h2Title">Your watches</h2>
        </div>
        <hr />
        <div className="containerItemCart">
          {cart.map((prod) => (
            <ItemCart product={prod} key={prod.id} />
          ))}
        </div>
        <hr />
      </div>
      <div className="containerSubclass">
        <h2>
          Subtotal: ({cartQuantity()} Watches) ${cartTotal()}
        </h2>
        <Link className="linkCheckout" to="/Checkout">
          <Button
            className="checkoutButton"
            variant="contained"
            color="secondary"
          >
            <p className="pCheckout">Proceed to Checkout</p>
          </Button>
        </Link>
        <div>
          <Button
            className="deleteAllButton"
            onClick={emptyCart}
            variant="contained"
            color="primary"
          >
            Delete all products
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
