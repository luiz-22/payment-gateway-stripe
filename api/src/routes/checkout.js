const express = require('express')
const router = express.Router()
require('dotenv').config();
// const Stripe = require("stripe");
// const stripe = new Stripe(process.env.KEY);

const stripe = require('stripe')(process.env.KEY);

router.post("/", async (req, res) => {

    const { id, amount } = req.body;

    try {

        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: 'USD',
            payment_method: id,
            confirm: true, // Confirma el pago y lo registra automáticamente
        });

        res.status(200).json({ message: "Successful Payment" });
    } catch (error) {
        console.log(error)
        res.json({ message: error.raw.message });
    }
});

module.exports = router