const express = require("express");
const router = express.Router();
const { Op, ValidationError } = require("sequelize");
const db = require("../base-ORM/sequelize-init");

router.get("/api/alimentos", async function (req, res, next) {
  let where = {};
  if (req.query.IdAlimento != undefined && req.query.IdAlimento !== "") {
    where.IdAlimento = {
      [Op.like]: "%" + req.query.IdAlimento + "%",
    };
  }
  let items = await db.alimentos.findAndCountAll({
    attributes: [
      "IdAlimento",
      "Marca",
      "PrecioKilo",
      "FechaLote",
      "Recomendada",
    ],
    order: [["IdAlimento", "ASC"]],
    where,
  });

  res.json(items.rows);
});



router.get("/api/alimentos/:id", async function (req, res, next) {
    
    let data = await db.alimentos.findAll({
      attributes: ["IdAlimento", "Marca", "PrecioKilo","FechaLote","Recomendada",],
      where: { IdAlimento: req.params.id },
    });
    if (data.length > 0 ) res.json(data[0]);
    else res.status(404).json({mensaje:'No econtrado!!'})
  });

router.post("/api/alimentos/", async (req, res) => {
 
    let data = await db.alimentos.create({
      
      Marca: req.body.Marca,
      PrecioKilo: req.body.PrecioKilo,
      FechaLote: req.body.FechaLote,
      Recomendada: req.body.Recomendada,
      
    });
    res.status(200).json(data.dataValues);
  });
  
  router.put("/api/alimentos/:id", async (req, res) => {
    let item = await db.alimentos.findOne({
      attributes: [
        "IdAlimento",
        "Marca",
        "PrecioKilo",
        "FechaLote",
        "Recomendada",
        
      ],
      where: { IdAlimento: req.params.id },
    });
    if (!item) {
      res.status(404).json({ message: "Consulta no encontrada :(" });
      return;
    }
        (item.Marca = req.body.Marca),
      (item.PrecioKilo = req.body.PrecioKilo),
      (item.FechaLote = req.body.FechaLote),
      (item.Recomendada = req.body.Recomendada),
      await item.save();
    res.sendStatus(200);
  });
  
  router.delete("/api/alimentos/:id", async (req, res) => {
    let filasBorradas = await db.alimentos.destroy({
      where: { IdAlimento: req.params.id },
    });
    if (filasBorradas == 1) res.sendStatus(200);
    else res.sendStatus(404);
  });
  

module.exports = router;

