const express = require("express");

const app = express();

const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  console.log("Hello form the route '/'");
  res.send("Hello AWS :)");
});

app.get("/health", (req, res) => {
  console.log("Hello form the route '/health'");
  res.send({
    status: "OK",
    message: "Healthy :)",
  });
});

app.listen(port, () => {
  console.log(`Example app listening at ${port}`);
});
