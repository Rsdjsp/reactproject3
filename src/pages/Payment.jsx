import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { credentials } from "../config";
import { post } from "../api";
import FormPay from "../components/FormPay";

const stripe = loadStripe(credentials.stripe_pk);

export default function Payment() {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    post("/api/payments/intent", {
      amount: 100,
    }).then(({ data }) => setClientSecret(data));
  }, []);

  console.log(clientSecret);
  return (
    <div>
      {clientSecret && (
        <Elements stripe={stripe} options={{ clientSecret }}>
          <FormPay />
        </Elements>
      )}
    </div>
  );
}
