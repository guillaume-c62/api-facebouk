const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");

const db = require("../models");
const User = db.user;

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/all", controller.allAccess);
  // app.put("/:id", controller.update);
  app.post("/user", authJwt.verifyToken, controller.userBoard);
 

};