import request from "supertest";

// tslint:disable-next-line:no-console
console.log(process.env.SERVER_PORT);
// tslint:disable-next-line:no-console
console.log(process.env.DB_PASSWORD);

import app from "../src/app";

describe("GET /api", () => {
  test("should return 200 OK", () => {
    return request(app).get("/api/v2/medias")
          .expect(200);
  })
})