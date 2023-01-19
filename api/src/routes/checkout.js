const express = require('express')
const router = express.Router()
require('dotenv').config();
// const Stripe = require("stripe");
// const stripe = new Stripe(process.env.KEY);

const stripe = require('stripe')(process.env.KEY);

router.post("/", async (req, res) => {

    const { id, amount } = req.body;

    console.log(id, amount)
    console.log(process.env.KEY)
    try {

        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: 'USD',
            payment_method: id,
            confirm: true, // Confirma el pago y lo registra automáticamente
        });

        console.log(paymentIntent)

        res.status(200).json({ message: "Recibido." });
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: error });
    }
});

module.exports = router