const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite:" + "./.data/veterinaria.db");


const consultas = sequelize.define(
  "consultas",
  {
    IdConsulta: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      autoIncrementIdentity: true,
    },
    Fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "La Fecha de la consulta es requerida",
        },
      },
    },
    Observacion: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "La Observación sobre la consulta es requerida",
        },
        len: {
          args: [5, 120],
          msg: "La observación debe ser tipo caracteres, entre 5 y 120 de longitud",
        },
      },
    },
    Precio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "El Precio es requerido",
        },
      },
    },
    IdMascota: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "El IdMascota es requerido",
        },
      },
    },
    IdCliente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "El IdCliente es requerido",
        },
      },
    },
    LegajoVeter: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "El LegajoVeter es requerido",
        },
      },
    },
  },
  {
    timestamps: false,
  }
);

const animales = sequelize.define(
  "animales",
  {
  IdAnimal: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
  },
  IdTipoAnimal:{
      type: DataTypes.INTEGER,
      references: {
          model: "tipoanimal", 
          key: "IdTipoAnimal", 
      },
  },
  IdCliente:{
      type: DataTypes.INTEGER,
      references: {
          model: "clientes",
          key: "Id",
      },
      validate: {
          notEmpty: {
              args: true,
              msg: "El Id del Cliente es requerido",
          },
      },
  },
  NombreAnimal: {
      type: DataTypes.STRING(20),
      allowNull: false,
      validate: {
      notEmpty: {
          args: true,
          msg: "El Nombre del Animal es requerido",
      },
      len: {
          args: [3, 20],
          msg: "El Nombre del Animal debe ser tipo carateres, entre 3 y 20 de longitud",
      },
      },
  },
  FechaNacAnimal:{
      type: DataTypes.DATE,
  },
  Peso: {
      type: DataTypes.REAL
  },
  },
  {
    timestamps: false,
  }
);

const tiposanimales = sequelize.define(
  "tipoanimal",
  {
      IdTipoAnimal:{
          type: DataTypes.INTEGER,
          primaryKey: true,
      },
      Descripcion:{
          type: DataTypes.STRING(15),
          allowNull:false,
          validate: {
              notEmpty: {
                  args: true,
                  msg: "El Nombre del Tipo de Animal es requerido",
              },
              len: {
                  args: [3, 15],
                  msg: "El Nombre del Tipo de Animal debe ser tipo carateres, entre 3 y 15 de longitud",
              },
              },
      }
  }
);

// definicion del modelo de datos
const clientes = sequelize.define(
  "clientes",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
     autoIncrementIdentity: true,
    },
    apellido: {
        // todo evitar que string autocomplete con espacios en blanco, deberia ser varchar sin espacios
        type: DataTypes.STRING(30),
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "El apellido es requerido",
          },
          len: {
            args: [4, 30],
            msg: "El apellido debe ser tipo caracteres, entre 4 y 30 de longitud",
          },
        },
      },

    nombre: {
        // todo evitar que string autocomplete con espacios en blanco, deberia ser varchar sin espacios
        type: DataTypes.STRING(30),
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "El Nombre es requerido",
          },
          len: {
            args: [4, 30],
            msg: "El Nombre debe ser tipo caracteres, entre 4 y 30 de longitud",
          },
        },
      },

    fechaNacimiento: {
        // todo evitar que string autocomplete con espacios en blanco, deberia ser varchar sin espacios
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "La fecha de nacimiento es requerida",
          },
        },
      },

      direccion: {
        // todo evitar que string autocomplete con espacios en blanco, deberia ser varchar sin espacios
        type: DataTypes.STRING(30),
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Direccion es requerida",
          },
        },
      },
    },
    {
  timestamps: false,
}
);

// definicion del modelo de datos
const alimentos = sequelize.define(
  "alimentos",
  {
    IdAlimento: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      autoIncrementIdentity: true,
    },
    Marca: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
      
      PrecioKilo: {
        type: DataTypes.REAL,
        allowNull: false,
      },

      FechaLote: {
          type: DataTypes.DATEONLY,
          allowNull: false,
          validate: {
            notEmpty: {
              args: true,
              msg: "La Fecha de lote es requerida",
            },
          },
        },

      Recomendada: {
          type: DataTypes.STRING(30),
          allowNull: false,
      
      },
  },
  

{
timestamps: false,
}
);

module.exports = {
  sequelize,
  consultas,
  animales,
  clientes,
  alimentos,
};
