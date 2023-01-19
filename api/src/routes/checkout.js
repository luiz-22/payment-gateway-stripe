const express = require('express')
const router = express.Router()
const Stripe = require("stripe");
const stripe = new Stripe("sk_test_51KZFYxGVqYV1yoOdVlvmdUHfot4xkZQIYVMjtEx6sJ7DVyeW7iwiK97uF7C62BcSWiLIJfsucc0CDrAwYL31vxc000x5nDd9wH");

router.post("/", async (req, res) => {

    const { id, amount } = req.body;

    console.log(id, amount)
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: 1099,
            currency: 'usd',
            payment_method_types: ['card']
        });
        // console.log(paymentIntent)

        // const payment = await stripe.paymentIntents.create({ // Confirma el pago y devuelve un objeto con el pago registrado
        //     // amount: amount.toFixed(2),
        //     // currency: "USD",
        //     // payment_method: id,
        //     confirm: true, // Confirma el pago y lo registra automáticamente
        // });

        // console.log(payment)

        res.status(200).json({ message: "Recibido." });
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: error });
    }
});

module.exports = router