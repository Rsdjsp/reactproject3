import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { products } from "./features/productsSlice";
import Home from "./pages/Home";
import Payment from "./pages/Payment";

import Category from "./pages/Category";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { userCart, validateUser } from "./features/userSlice";

function App() {
  const dispatch = useDispatch();
  const { bestSellers, offers, newCollection, liquidation } = useSelector(
    (state) => state.products
  );
  const { logged } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(validateUser());
    dispatch(products());
    if (logged) {
      dispatch(userCart());
    }
  }, [dispatch, logged]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/bestSellers"
          element={
            <Category
              focusedProducts={bestSellers}
              name={"Best Sellers"}
              color={"#DAF1FD"}
            />
          }
        />
        <Route
          path="/offers"
          element={
            <Category
              focusedProducts={offers}
              name={"Offers"}
              color={"#FDD9AC"}
            />
          }
        />
        <Route
          path="/newCollection"
          element={
            <Category
              focusedProducts={newCollection}
              name={"New Collection"}
              color={"#83A1A2"}
            />
          }
        />
        <Route
          path="/liquidation"
          element={
            <Category
              focusedProducts={liquidation}
              name={"Liquidation"}
              color={"#FDFFB8"}
            />
          }
        />
        <Route path="/products/:id" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payments/:amount" element={<Payment />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
