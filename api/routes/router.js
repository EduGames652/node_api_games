const express = require("express")
const router = express.Router();

router.get('/', function(req, res) { res.json({ Server: 'OK' } ) });

module.exports = router;