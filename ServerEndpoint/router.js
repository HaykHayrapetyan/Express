const express = require('express');
const router = express.Router();

router.get('/myroute/:param', (req, res, next) => {
    console.log(req.params);
    next();
});


module.exports = router;