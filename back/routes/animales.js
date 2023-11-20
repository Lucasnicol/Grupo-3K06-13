const express = require("express");
const router = express.Router();
const { Op, ValidationError } = require("sequelize");
const db = require("../base-ORM/sequelize-init");

router.get("/api/animales", async (req, res)=> {
    let where = {};
    if (req.query.NombreAnimal != undefined && req.query.NombreAnimal !== "") {
        where.NombreAnimal = {
            //[Op.like]:req.query.IdAnimal,
            [Op.like]: "%" + req.query.NombreAnimal + "%",
        };
    }

    let data = await db.animales.findAll({
    attributes: ["IdAnimal","IdTipoAnimal","IdCliente", "NombreAnimal","FechaNacAnimal", "Peso"],
    where,
    });
    res.json(data);
});

router.get("/api/animales/:id", async (req,res)=>{
    let animal = await db.animales.findOne({
        attributes: ["IdAnimal","IdTipoAnimal","IdCliente", "NombreAnimal","FechaNacAnimal", "Peso"],
        where:{IdAnimal: req.params.id},
    });
    if(animal){
        res.json(animal)
    }else{
        res.status(404).json({message: "Animal no encontrado"});
    }
    
});

router.post("/api/animales/", async (req,res)=>{
    let data = await db.animales.create({
    IdAnimal: req.body.IdAnimal,
    IdTipoAnimal: req.body.IdTipoAnimal,
    IdCliente: req.body.IdCliente,
    NombreAnimal: req.body.NombreAnimal,
    FechaNacAnimal: req.body.FechaNacAnimal,
    Peso: req.body.Peso,
    });
    res.status(200).json(data.dataValues); 
});

router.put("/api/animales/:id", async (req,res)=>{
    let animal = await db.animales.findOne({
        attributes: ["IdAnimal","IdTipoAnimal","IdCliente", "NombreAnimal","FechaNacAnimal", "Peso"],
        where: { IdAnimal: req.params.id },
        });
        if (!animal) {
        res.status(404).json({ message: "Animal no encontrado" });
        return;
        }
        animal.IdTipoAnimal = req.body.IdTipoAnimal;
        animal.IdCliente = req.body.IdCliente;
        animal.NombreAnimal = req.body.NombreAnimal;
        animal.FechaNacAnimal = req.body.FechaNacAnimal;
        animal.Peso = req.body.Peso;
        await animal.save();
        res.sendStatus(200);
});

router.delete("/api/animales/:id", async (req,res)=>{
    let filasBorradas = await db.animales.destroy({
        where: {IdAnimal: req.params.id},
    });
    if(filasBorradas == 1) res.status(200).json({message:"Animal eliminado"});
    //if(filasBorradas == 1) res.sendStatus(200);
    else res.status(404).json({message:"Animal no encontrado"});
});



module.exports = router;
