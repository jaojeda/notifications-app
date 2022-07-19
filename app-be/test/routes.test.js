const request = require("supertest");
const app = require("../lib/app");
const fs = require("fs/promises");
const path = require("path");

describe("app routes", () => {
  beforeAll(async () => {
    const fileName = path.join(__dirname, "../test.json");
    const data = await fs.readFile(fileName, "utf8");
    const formattedData = JSON.parse(data);
    formattedData.push({
      id: 5,
      content: "test string",
      snooze: { snoozed: false, lastSnooze: 0 },
    });
    const newData = JSON.stringify(formattedData);
    await fs.writeFile(fileName, newData);
  });

  it("gets data", async () => {
    const res = await request(app).get("/notifications");
    expect(JSON.parse(res.text)[0]).toEqual({
      id: 1,
      title: "Notification Title",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce felis nisi, euismod sed massa et, consectetur cursus ipsum. Curabitur imperdiet urna mauris, a vulputate quam eleifend quis.",
      snooze: { snoozed: false, lastSnooze: 0 },
    });
  });

  it("updates data", async () => {
    const res = await request(app)
      .put("/notifications/5")
      .send({ snoozed: true, lastSnooze: 0 });
    expect(JSON.parse(res.text)[4]).toEqual({
      id: 5,
      content: "test string",
      snooze: { snoozed: true, lastSnooze: 0 },
    });
  });

  it("deletes an entry", async () => {
    const res = await request(app).delete("/notifications/5");
    expect(JSON.parse(res.text).length).toEqual(4);
  });
});
