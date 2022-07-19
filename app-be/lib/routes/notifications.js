const { Router } = require("express");
const fs = require("fs/promises");

const fileName = "/Users/jose/practice/notifications-app/app-be/test.json";

module.exports = Router().get("/", async (req, res, next) => {
  try {
    const data = await fs.readFile(fileName, "utf8");
    res.send(data);
  } catch (err) {
    return next(err);
  }
});
