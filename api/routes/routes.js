const express = require("express");

const routes = express.Router();

routes.get('/', (req, res) => res.json({ Server: 'OK'}));

module.exports = routes