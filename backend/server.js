const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dbConfig = require("./app/config/db.config");

const app = express();

var corsOptions = {
  origin: "http://localhost:3000" //url front
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

const db = require("./app/models");
db.mongoose
  .connect(`mongodb+srv://Guimoute:guillaume@cluster0.lqatc.mongodb.net/facebouk?retryWrites=true&w=majority`, {
   
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("connecter a MongoDB.");
  })
  .catch(err => {
    console.error("erreur de connexion", err);
    process.exit();
  });
// simple route
app.get("/", (req, res) => {
  res.json({ message: "welcome to the facebouk" });
});
// routes
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server demarrer sur le port ${PORT}.`);
});