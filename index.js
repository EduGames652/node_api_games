const express = require("express");
const dotenv = require("dotenv").config();
const path = require('path');
const { normalize } = require("path");
const router = require("./api/routes/router")
const api = express();

api.use(router)

const port = normalize(process.env.PORT || '3333');
api.set('port', port);

/* .Env Host or Manual Host set */
const hosted = normalize(process.env.HOSTED || 'localhost')
api.set('hosted', hosted);

/* Listen Port and Host */
api.listen(port, hosted, (err) => {
  if(err) {
    console.log('[-] | Servidor Parado! ==>' + err);
  } else {
    console.log(`[+] Servidor Iniciado | URL: http://${hosted}:${port}`)
  }
})