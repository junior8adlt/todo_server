require("dotenv").config();
const express = require("express");
const path = require("path");
const http = require("http");

// Variables de entorno
const PORT_HTTP = process.env.PORT || 4010;

// Rutas
const todosRouter = require("./routes/todos");

const app = express();

app.use(express.json()).use(express.urlencoded({ extended: false }));

//configurar cabeceras http
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Methods"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, DELETE, PATCH"
  );
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE, PATCH");
  next();
});

//rutas urls API Rest
app.use("/v1", todosRouter);

const httpServer = http.createServer(app);

httpServer.listen(PORT_HTTP, () =>
  console.log(`Server http app listening on port ${PORT_HTTP}!`)
);

module.exports = app;
