const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51HQDZqAc9LK2J26ZOy24ZXILc7CbveFHxvk1qI5qLzVURTIs2EcdtqgEoilGI7Q6WrITFEt1PiNHQEWbMISeZapN00abFjSqU5")



// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));
// app.get("/naheen", (request, response) => response.status(200).send("How's going Naheen...?"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd",
    });

      // OK - Created
      response.status(201).send({
        clientSecret: paymentIntent.client_secret,
      });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/challenge-e1137/us-central1/api
