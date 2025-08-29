const { Router } = require("express");
const {
  getMesaController,
  getReservaController,
  //POST
  postMesaContreller,
  postReservaController,
  //ADMIN
  postAdminController,
  loginAdminController,
} = require("../controller/index.controller");

const isAdmin = require("../middleware/isAdmin");

const router = Router();

router.get("/mesa", isAdmin("admin"), getMesaController);
router.get("/reserva", isAdmin("admin"), getReservaController);

//POST
router.post("/postmesa", isAdmin("admin"), postMesaContreller);
router.post("/postreserva", isAdmin("admin"), postReservaController);
//ADMIN
router.post("/register", postAdminController);
router.post("/login", loginAdminController);

module.exports = router;
