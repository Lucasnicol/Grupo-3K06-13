const request = require("supertest");
const app = require("../app");

const alimentos = {
    Marca: "Jumbo",
    PrecioKilo: 1500,
    FechaLote: "2022-10-10",
    Recomendada: "Perros pequenos",

};
const alimentosModificada = {
    IdAlimento: 10,
    Marca: "Jumbito",
    PrecioKilo: 1200,
    FechaLote: "2022-12-12",
    Recomendada: "Perros grandes",
};

describe("GET /api/alimentos", function () {
  it("Devolveria todos los alimentos", async function () {
    const res = await request(app)
      .get("/api/alimentos")
      .set("content-type", "application/json");
    expect(res.headers["content-type"]).toEqual(
      "application/json; charset=utf-8"
    );
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          IdAlimento: expect.any(Number),
          Marca: expect.any(String),
          PrecioKilo: expect.any(Number),
          FechaLote: expect.any(String),
          Recomendada: expect.any(String),
        }),
      ])
    );
  });
});

describe("GET /api/alimentos/:id", () => {
  it("Deberia devolver la alimentos con el IdAlimento 2", async () => {
    const res = await request(app).get("/api/alimentos/2");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(
      expect.objectContaining({
        IdAlimento: expect.any(Number),
        Marca: expect.any(String),
        PrecioKilo: expect.any(Number),
        FechaLote: expect.any(String),
        Recomendada: expect.any(String),
      })
    );
  });
});

describe("POST /api/alimentos", () => {
  it("Deberia devolver la alimentos que acabo de crear", async () => {
    const res = await request(app).post("/api/alimentos").send(alimentos);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(
      expect.objectContaining({
        IdAlimento: expect.any(Number),
          Marca: expect.any(String),
          PrecioKilo: expect.any(Number),
          FechaLote: expect.any(String),
          Recomendada: expect.any(String),
      })
    );
  });
});

describe("PUT /api/alimentos/:id", () => {
  it("Deberia devolver la alimentos con el IdAlimento 3 modificada", async () => {
    const res = await request(app)
      .put("/api/alimentos/3")
      .send(alimentosModificada);
    expect(res.statusCode).toEqual(200);
  });
});

describe("DELETE /api/alimentos/:id", () => {
  it("Deberia devolver la alimentos con el IdAlimento 11 borrada", async () => {
    const res = await request(app).delete("/api/alimentos/10");
    expect(res.statusCode).toEqual(200);
  });
});