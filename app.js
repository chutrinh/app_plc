const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Server Node.js đang chạy!");
});

app.listen(3000, () => {
  console.log("Server chạy cổng 3000");
});

console.log(123);
console.log(123);
console.log(123);
console.log(123);
