const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  console.log(req.body);
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  });

  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
  res.json({ message: "user a bien enregistré !" });
    });
}

exports.signin = (req, res) => {
  console.log(req.body);
  User.findOne({
    username: req.body.username
  })
    .then((user) => {
      if(!user) {
          res.json({
            message: "user not found"
          });      
      }
      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!passwordIsValid) {
         res.json({
          accessToken: null,
          message: "wrong password"
        });
      }
      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 43200 // 12 hours
      });
      res.json({
        id: user._id,
        accessToken: token
      });
    });
};

