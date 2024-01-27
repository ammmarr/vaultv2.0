import MaxWidthWrapper from "../../components/maxWidthWrapper/MaxWidthWrapper";
import Navbar from "../../components/navbar/NavBar";
import CartItems from "./CartItems/CartItems";
import style from "./index.module.scss";
const Cart = () => {
  return (
    <>
      <Navbar />
      <div className={style.container}>
        <MaxWidthWrapper>
          <h1>Your Cart</h1>
          <CartItems />
        </MaxWidthWrapper>
      </div>
    </>
  );
};

export default Cart;
