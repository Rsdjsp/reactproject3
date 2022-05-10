import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { post } from "../api";
import Carousel from "../components/Carousel";
import { userCart } from "../features/userSlice";

const Cover = styled.div`
  width: 100%;
  height: fit-content;
  padding: 140px 70px 50px 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, #e9e9e9 50%, #f2f2f2 100%);
`;

const ProdImg = styled.img`
  max-height: 100%;
  width: 25%;
  object-fit: contain;
  margin: 0;
  box-shadow: 0 0 8px 8px #ffffff inset;
`;

const Features = styled.div`
  margin: 0;
  margin-left: 50px;

  & > div {
    border-bottom: 2px solid #36363661;
    width: 500px;

    & > h1 {
      font-family: "Playfair Display", serif;
      font-size: 32px;
      text-transform: capitalize;
    }
    & > h2 {
      font-size: 24px;
      font-weight: 500;
      text-transform: capitalize;
    }
  }

  & > section {
    width: 500px;
    border-bottom: 2px solid #36363661;

    & > p {
      color: #a6a6a6;
    }

    & > button {
      width: fit-content;
      height: 29px;
      font-size: 13px;
      margin-right: 20px;
      margin-bottom: 20px;
      border: 2px solid #a6a6a6;
      cursor: pointer;
      background-color: #ffffff;
      :hover,
      :focus {
        border: 2px solid #e4563c;
        color: #ffffff;
        background-color: #e4563c;
      }
    }

    & > #size {
      width: fit-content;
      border: none;
      background-color: transparent;
      font-size: 14px;
      :hover,
      :focus {
        font-weight: bold;
        text-decoration: underline;
        text-underline-offset: 4px;
        color: #363636;
      }
    }
  }

  & > article {
    & > p {
      color: #a6a6a6;
      & > span {
        color: #363636;
      }
    }

    & > div {
      width: fit-content;
      height: 29px;
      font-size: 13px;
      margin-right: 20px;
      margin-bottom: 20px;
      border: 2px solid #a6a6a6;
      cursor: pointer;
      background-color: #ffffff;
      display: flex;
      align-items: center;
      padding-left: 5px;

      & > select {
        border: none;
        margin-left: 50px;
        outline: none;
      }
    }
    & > button {
      width: 500px;
      height: 54px;
      border: none;
      font-size: 15px;
      text-transform: uppercase;
      color: #ffffff;
      background-color: #e4563c;
      border-radius: 0.125rem;
      box-shadow: 0px 11px 11px 0px rgba(50, 50, 50, 0.1);
      cursor: pointer;
      margin-bottom: 0px;
      :hover {
        background-color: #f7a293;
        font-size: 16px;
      }
    }
  }
`;

const Titles = styled.h2`
  font-family: "Playfair Display", serif;
  font-size: 32px;
  width: 100%;
  text-align: center;
  text-transform: capitalize;
  margin-top: 50px;
`;

const Products = () => {
  const { products } = useSelector((state) => state.products);
  const { id } = useParams();
  const findProd = products.find((prod) => prod._id === id);
  const [product, setProduct] = useState(findProd);
  const [amount, setAmount] = useState(1);
  const { cart } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userCart());
    setProduct(findProd);
  }, [dispatch, findProd]);

  const addProduct = (idProduct) => {
    const verify = cart.products.find(
      (product) => product.product._id === idProduct
    );

    if (verify !== undefined) {
      const newAmount = parseInt(amount) + parseInt(verify.quantity);
      post("/api/cart/update", {
        amount: newAmount,
        product: idProduct,
      });
      dispatch(userCart());
    } else {
      post("/api/cart", {
        products: idProduct,
        quantity: amount,
      });
    }
  };

  console.log(cart.products);
  return (
    <>
      {product && (
        <>
          <Cover>
            <ProdImg src={product.img} />
            <Features>
              <div>
                <h1>{product.name}</h1>
                <h2>$ {product.price}</h2>
              </div>
              <section>
                <p>Colors:</p>
                {product.colors.map((color, index) => (
                  <button key={index}>{color}</button>
                ))}
                <p>Sizes:</p>
                {product.sizes.map((size, index) => (
                  <button id="size" key={index}>
                    {size.filterCode.slice(-4)}
                  </button>
                ))}
              </section>
              <article>
                <p>
                  Stock: <span>{product.stock}0</span>
                </p>
                <div>
                  Amount:
                  <select onChange={(event) => setAmount(event.target.value)}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                  </select>
                </div>
                <button onClick={() => addProduct(product._id)}>
                  add to cart
                </button>
              </article>
            </Features>
          </Cover>
          <Titles>your might also like</Titles>
          <Carousel />
        </>
      )}
    </>
  );
};

export default Products;
