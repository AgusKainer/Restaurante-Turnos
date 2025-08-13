const { Router } = require("express");
const {
  getMesaController,
  getReservaController,
  //POST
  postMesaContreller,
  postReservaController,
} = require("../controller/index.controller");

const router = Router();

router.get("/mesa", getMesaController);
router.get("/reserva", getReservaController);

//POST
router.post("/postmesa", postMesaContreller);
router.post("/postreserva", postReservaController);

module.exports = router;
