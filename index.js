const express = require("express");
const router = require("./src/router");

const app = express();

const serverPort = 3310;

app.use(express.json());

app.use(router);

app.listen(serverPort, (err) => {
  if (err) {
    console.error("Something went wrong");
    return;
  }

  console.log(`Server is listenin on ${serverPort}`);
});
