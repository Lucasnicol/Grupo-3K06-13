const db = require("aa-sqlite");

async function CrearBDSiNoExiste() {
  await db.open("./.data/veterinaria.db");

  let existe = false;
  let res = null;

  res = await db.get(
    "SELECT count(*) as contar FROM sqlite_schema WHERE type = 'table' and name= 'consultas'",
    []
  );

  if (res.contar > 0) existe = true;
  if (!existe) {
    await db.run(
      `CREATE table consultas (
        IdConsulta INTEGER PRIMARY KEY AUTOINCREMENT, 
        Fecha TEXT NOT NULL,
        Observacion TEXT NOT NULL, 
        Precio REAL NOT NULL, 
        IdMascota INTEGER NOT NULL, 
        IdCliente INTEGER NOT NULL, 
        LegajoVeter INTEGER NOT NULL)
        `
    );
    console.log("Tabla Consultas creada! :D");
    await db.run(
      `insert into consultas values 
        (1,'2023-05-25','Estaba resfriado, se receto medicamento',150,7,4,1245),
        (2,'2023-05-25','Tenia una astilla en la pata, se retiro y receto medicamento',150,2,5,1456),
        (3,'2023-05-25','Problemas estomacales, se receto medicamento',150,5,8,1890),
        (4,'2023-05-26','Estaba resfriado, se receto medicamento',150,4,9,1458),
        (5,'2023-05-26','Control de rutina',150,6,3,1280),
        (6,'2023-05-26','Control de rutina',150,2,5,1254),
        (7,'2023-05-26','Tenia una herida en la pata, se curo y receto medicamento',150,1,7,1268),
        (8,'2023-05-27','Estaba resfriado, se receto medicamento',150,9,1,1220),
        (9,'2023-05-27','Control de rutina',150,3,6,1281),
        (10,'2023-05-27','Problemas estomacales, se receto medicamento',125,8,8,1239)
      `
    );
  }
{
  let existe = false;
  let res = null;
  //Crear Tabla para Animales
  res = await db.get(
      "SELECT count(*) as contar FROM sqlite_schema WHERE type = 'table' and name = 'animales'",
      []
  );
  if (res.contar > 0) existe = true;
  if (!existe) {
      await db.run(
          "CREATE TABLE animales( IdAnimal INTEGER PRIMARY KEY AUTOINCREMENT, IdTipoAnimal INTEGER , IdCliente INTEGER NOT NULL, NombreAnimal TEXT NOT NULL, FechaNacAnimal DATE, Peso REAL, FOREIGN KEY(IdTipoAnimal) REFERENCES tipoanimal(IdTipoAnimal), FOREIGN KEY(IdCliente) REFERENCES clientes(Id))"
      );
      
      console.log("Tabla para Animales Creada!");
      
      await db.run(
          `INSERT INTO animales VALUES
          (1, 1, 1, "Oso", DATE("2012-10-12"), 40.4),
          (2, 1, 2, "Ciro", DATE("2014-11-20"), 30.0),
          (3, 1, 3, "Rocco", DATE("2007-08-09"), 35.6),
          (4, 1, 4, "Luna", DATE("2010-02-17"), 20.5),
          (5, 1, 5, "Bolt", DATE("2013-12-19"), 10.0),
          (6, 1, 1, "Lola", DATE("2012-10-12"), 23.7),
          (7, 1, 2, "Duke", DATE("2016-06-03"), 45.1),
          (8, 1, 3, "Molly", DATE("2018-05-08"), 15.9),
          (9, 1, 4, "Laika", DATE("1957-11-03"), 20.0),
          (10, 1, 5, "Daisy", DATE("2020-10-12"), 40.4),
          (11, 2, 1, "Tom", DATE("2019-04-02"), 5.2),
          (12, 2, 2, "Simba", DATE("2017-08-15"), 4.8),
          (13, 2, 3, "Nala", DATE("2020-01-30"), 6.5),
          (14, 2, 4, "Whiskers", DATE("2016-05-10"), 7.1),
          (15, 2, 5, "Garfield", DATE("1978-06-19"), 10.0)
          ;`
      );
  }

  existe = false
  //Crear tabla para Tipo Animal
  res = await db.get(
      "SELECT count(*) as contar FROM sqlite_schema WHERE type = 'table' and name= 'tipoanimal'",
      []
  );
  if (res.contar > 0) existe = true;
  if (!existe) {
      await db.run(
      "CREATE table tipoanimal( IdTipoAnimal INTEGER PRIMARY KEY, Descripcion text NOT NULL UNIQUE);"
      );
      console.log("tabla Tipos de Animales creada!");
      await db.run(
      "insert into tipoanimal values	(1,'Perro'),(2,'Gato');"
      );
  }
  
  existe = false;
  res = null;
  res = await db.get(
    "SELECT count(*) as contar FROM sqlite_schema WHERE type = 'table' and name= 'clientes'",
    []
  );
  if (res.contar > 0) existe = true;
  if (!existe) {
    await db.run(
      "CREATE table clientes( id INTEGER PRIMARY KEY AUTOINCREMENT, apellido text NOT NULL, nombre text NOT NULL, fechaNacimiento text NOT NULL, direccion text);"
    );
    console.log("tabla clientes creada!");
    await db.run(
      "insert into clientes values (1,'Ochoa', 'Johanna','1987/05/14', 'Punta del este 4519'),(2,'Aranda', 'Edith','1957/06/23','Punta del este 4523'),(3,'Gonzalez', 'Vanesa','1984/12/21', 'Bermudas 285'),(4,'Gallo', 'Alexia','1990/11/07', 'Mar de ajo 345'),(5,'Degani', 'Luciano','1984/07/20','Tahiti 1982'),(6,'Goyeneche', 'Uxue','1988/11/17','Bahamas 2345'),(7,'Barrionuevo', 'Liliana','1964/06/03','Viña del mar 987'),(8,'Lopez', 'Diego','1986/07/12', 'Miramar 4567'),(9,'Tauro', 'Mercedes','1994/01/15','Las vegas 123'),(10,'Scott', 'William','1985/04/12','Tenerife 3987')"
    );
    }

    existe = false;
    res = null;
    res = await db.get(
      "SELECT count(*) as contar FROM sqlite_schema WHERE type = 'table' and name= 'alimentos'",
      []
    );
    if (res.contar > 0) existe = true;
    if (!existe) {
      await db.run(
        "CREATE table alimentos( IdAlimento INTEGER PRIMARY KEY AUTOINCREMENT, Marca text NOT NULL, PrecioKilo REAL NOT NULL, FechaLote text NOT NULL, Recomendada text NOT NULL);"
      );
      console.log("tabla alimentos creada!");
      await db.run(
        `insert into alimentos values	(1,'Cat Chow', 1400, '2023-01-15','Gatos adultos'),(2,'Excelent', 990, '2022-8-20', 'Gatos adultos'),
        (3,'Sabrositos', 900, '2023-03-15','Gatos bebe'), (4, 'Royal Canin', 1200, '2022-11-15','Perros adultos'),
        (5, 'Dog Chow', 1500, '2023-01-15','Perros adultos'), (6, 'Perfomance', 1600, '2023-05-05','Perros cachorros'),
        (7, 'Old Prince', 1550, '2023-01-18','Gatos adultos'), (8, 'Gatti', 1290, '2023-03-15','Gatos adultos'),
        (9, 'Agility', 1470, '2023-03-16','Perros adultos'), (10, 'Doguis', 1050, '2023-01-15','Perros adultos')
        `
      );
  }


  db.close();
}
}
CrearBDSiNoExiste()
module.exports =  CrearBDSiNoExiste;
