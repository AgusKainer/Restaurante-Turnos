const { DataTypes } = require("sequelize");
const db = require("../../db/DB");

const Admin = db.define("Admin", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  usuario: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  rol: {
    type: DataTypes.STRING,
    defaultValue: "admin",
  },
});

module.exports = Admin;

// {
//   "id": "2d6151d8-1868-482e-94af-e822aecd213f",
//   "rol": "admin",
//   "usuario": "admin",
//   "password": "$2b$05$rjHVLGfut5qYUsn9PU8vXuR7NQRPqTUsLFJ0og/jS6x4/oDOZ0k.O",
//   "updatedAt": "2026-05-20T22:12:00.701Z",
//   "createdAt": "2026-05-20T22:12:00.701Z"
// }

// {
//   "usuario":"admin",
//   "password":"admin123"
// }
