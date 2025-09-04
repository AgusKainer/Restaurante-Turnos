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
  //EMAI
  sendMailController,
  //DELETE
  deleteReservaController,
} = require("../controller/index.controller");

const isAdmin = require("../middleware/isAdmin");

const router = Router();

router.get("/mesa", isAdmin("admin"), getMesaController);
router.get("/reserva", isAdmin("admin"), getReservaController);

//POST
router.post("/postmesa", isAdmin("admin"), postMesaContreller);
router.post("/postreserva", postReservaController);
//MEAIL
router.post("/email/:id", sendMailController);
//ADMIN
router.post("/register", postAdminController);
router.post("/login", loginAdminController);

//DELETE
router.delete("/eliminar/:id", isAdmin("admin"), deleteReservaController);
module.exports = router;
