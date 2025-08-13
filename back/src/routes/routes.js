const { Router } = require("express");
const {
  getMesaController,
  getReservaController,
  //POST
  postMesaContreller,
} = require("../controller/index.controller");

const router = Router();

router.get("/mesa", getMesaController);
router.get("/reserva", getReservaController);

//POST
router.post("/postmesa", postMesaContreller);

module.exports = router;
