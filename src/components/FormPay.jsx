import React, { useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

export default function FormPayment() {
  const [ready, setReady] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const makePayment = async (event) => {
    event.preventDefault();
    const response = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:3000",
      },
    });

    console.log(response);
  };
  return (
    <>
      {stripe && (
        <form
          className=" bg-zinc-100 w-1/2 mx-auto mt-20 p-10 flex flex-col rounded-md"
          onSubmit={makePayment}
        >
          <PaymentElement onReady={() => setReady(true)} id="pay" />
          {ready && (
            <button className=" bg-indigo-900 hover:bg-indigo-700 text-white py-2 px-20 w-1/2 mx-auto mt-10 rounded-md">
              submit
            </button>
          )}
        </form>
      )}
    </>
  );
}
