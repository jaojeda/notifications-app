const { Router } = require("express");
const fs = require("fs/promises");

const fileName = "/Users/jose/practice/notifications-app/app-be/test.json";

module.exports = Router()
  .get("/", async (req, res, next) => {
    try {
      const data = await fs.readFile(fileName, "utf8");
      res.send(data);
    } catch (err) {
      return next(err);
    }
  })
  .delete("/:id", async (req, res, next) => {
    try {
      const data = await fs.readFile(fileName, "utf8");
      const formattedData = JSON.parse(data);
      const newData = JSON.stringify(
        formattedData.filter((obj) => obj.id !== Number(req.params.id))
      );
      await fs.writeFile(fileName, newData);
      res.send(newData);
    } catch (err) {
      return next(err);
    }
  });
