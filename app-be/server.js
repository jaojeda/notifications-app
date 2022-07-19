const express = require("express");
const fs = require("fs/promises");

const port = 3200;

const app = express();

const fileName = "/Users/jose/practice/notifications-app/app-be/test.json";

app.get("/notifications", async (req, res) => {
  try {
    const data = await fs.readFile(fileName, "utf8");
    res.send(data);
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
