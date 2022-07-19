const request = require("supertest");
const app = require("../lib/app");

describe("app routes", () => {
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
});
