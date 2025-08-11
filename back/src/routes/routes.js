const { Router } = require("express");
const {
  getMesaController,
  getReservaController,
} = require("../controller/index.controller");

const router = Router();

router.get("/mesa", getMesaController);
router.get("/reserva", getReservaController);

module.exports = router;
