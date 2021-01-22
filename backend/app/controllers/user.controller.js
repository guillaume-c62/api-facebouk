const db = require("../models");
const User = db.user;
exports.allAccess = (req, res) => {
  res.status(200).send("Contenue public.");
};

exports.userBoard = (req, res) => {
  User.findOne({
    _id:req.userId
  })
  .then(user =>
    {
      res.json(user)
    })
};

// exports.update = (req, res) => {
//   if (!req.body) {
//     return res.status(400).send({
//       message: "Data to update can not be empty!"
//     });
//   }

//   const id = req.params.id;

//   User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
//     .then(data => {
//       if (!data) {
//         res.status(404).send({
//           message: `Cannot update user with id=${id}. Maybe Tutorial was not found!`
//         });
//       } else res.send({ message: "user was updated successfully." });
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Error updating user with id=" + id
//       });
//     });
// };



