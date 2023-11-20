const request = require("supertest");
const app = require("../app");
const db = require("../base-ORM/sequelize-init");
describe("Endpoints /api/animales",()=>{

    describe("GET", () => {
        it("Deberia devolver una lista de Animales", async () => {
            const res = await request(app).get("/api/animales");
            expect(res.statusCode).toEqual(200);
            expect(res.body).toEqual(expect.any(Array));
        });
    });
    
    describe("GET By Id", () => {
        const id = 3
        it("Deberia devolver un solo Animal, que posee un id, o informar que no fue encontrado", async () => {
            const res = await request(app).get(`/api/animales/${id}`);
            if(res.status === 200){
                //expect(res.statusCode).toEqual(200);
                expect(res.body).toEqual(expect.objectContaining({
                    IdAnimal: expect.any(Number),
                    IdTipoAnimal: expect.any(Number),
                    IdCliente: expect.any(Number),
                    NombreAnimal: expect.any(String),
                    FechaNacAnimal: expect.any(String),
                    Peso: expect.any(Number)
                }));
            }else{
                expect(res.body).toEqual({message: "Animal no encontrado"});
            };

        });
    });
    
    describe("POST", () => {
        const animalNuevo = {
            IdTipoAnimal: 1,
            IdCliente: 3,
            NombreAnimal: "Fido",
            FechaNacAnimal: "2010-04-06",
            Peso: 17.3
        };
        it("Deberia devolver un nuevo Animal creado", async () => {
            const res = await request(app).post("/api/animales/").send(animalNuevo);
            expect(res.statusCode).toEqual(200);
            expect(res.body).toEqual(expect.objectContaining({
                IdAnimal: expect.any(Number),
                IdTipoAnimal: expect.any(Number),
                IdCliente: expect.any(Number),
                NombreAnimal: expect.any(String),
                FechaNacAnimal: expect.any(String),
                Peso: expect.any(Number)
            }));
        });
    });

    describe("PUT", () => {
        it("Deberia actualizar a un animal o informar que no fue encontrado", async () => {
            const animalNuevo = {
                IdTipoAnimal: 1,
                IdCliente: 3,
                NombreAnimal: "Fido",
                FechaNacAnimal: "2010-04-06",
                Peso: 17.3
            };
            const animalId = 8; 
            const res = await request(app).put(`/api/animales/${animalId}`).send(animalNuevo);
            if(res.status === 200){
                const animalActualizado = await db.animales.findOne({
                    attributes: ["IdAnimal","IdTipoAnimal","IdCliente", "NombreAnimal","FechaNacAnimal", "Peso"],
                    where: { IdAnimal: animalId },
                }); 

                expect(animalNuevo.IdTipoAnimal).toEqual(animalActualizado.IdTipoAnimal);
                expect(animalNuevo.IdCliente).toEqual(animalActualizado.IdCliente);
                expect(animalNuevo.NombreAnimal.toLowerCase()).toEqual(animalActualizado.NombreAnimal.toLowerCase());
                expect(new Date(animalNuevo.FechaNacAnimal)).toEqual(new Date(animalActualizado.FechaNacAnimal));
                expect(animalNuevo.Peso).toEqual(animalActualizado.Peso);
            }else{
                expect(res.body).toEqual({message: "Animal no encontrado"})
            }

        });
    
    });



    describe("DELETE", () => {
        it("Deberia eliminar a un animal o informar que no fue encontrado", async () => {
            const animalId = 7; 
            const res = await request(app).delete(`/api/animales/${animalId}`);
            //expect(res.status).toBe(200);
            if(res.status === 200){
                expect(res.body). toEqual({message: "Animal eliminado"})
            }else{
                expect(res.body). toEqual({message: "Animal no encontrado"})
            }
            

        });
    
    });
});


