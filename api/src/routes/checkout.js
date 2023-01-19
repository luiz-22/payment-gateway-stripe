const express = require('express')
const router = express.Router()

router.post("/", async (req, res) => {
    console.log(req.body)
    res.status(200).json({ message: "Recibido." });
});

module.exports = router