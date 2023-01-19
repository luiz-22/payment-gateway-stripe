const { Router } = require('express');
const router = Router();

const checkout = require('./checkout.js');

router.use('/api/checkout', checkout);

module.exports = router;
