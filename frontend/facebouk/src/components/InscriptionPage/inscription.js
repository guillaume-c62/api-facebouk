const URL="http://localhost:8081/auth/signup";  //url da la route de la requete en back


const fetchinsc=()=>{ //instancier le js en react

  document.getElementById("submit").addEventListener('click',(e)=>{ //evenement au click sur le bouton 
    e.preventDefault();

  var inputemail = document.getElementById("email").value;
  var inputusername = document.getElementById("username").value;
  var inputpassword = document.getElementById("password").value;
  var inputconfirmpassword = document.getElementById("confirmpassword").value;

  if(inputemail === "" || inputusername === "" || inputpassword === "" || inputconfirmpassword === ""){
    console.log("dsf");
    document.querySelector('#error').innerHTML="champ incorrect";
   
  }
else{
  const user={   // creation d un objet avec mes données a envoyer
    username: document.querySelector("#username").value, //username-> req.body.email
    email: document.querySelector("#email").value, //email-> req.body.email
    password: document.querySelector("#password").value, //attention a nommer comme en back
}
console.log("else1");
const Formjson=JSON.stringify(user); // Transformation en String
const config = { //configuration fetch
    method: 'POST', //envoyer
    headers: {  //autorisation
    "Accept": "application/json", //j'accepte de recevoir du json
    "Content-Type": "application/json", //j'envoie du json
    "Access-Control-Allow-Origin":"http://localhost:8081/auth/signup", //j autorise a aller sur mon back
    },
    body: Formjson,// j'envoie dans le back body ==req.body
  } 
fetch(URL, config) //instancier la fetch
    .then(response => { //après que la fetch est faite je fais :
      response.json().then(json => { //transformation de la reponse en json
          console.log("yes");
          if (json.message === "erreur user deja enregistré !") { //gestion erreur
              console.log("user not found")
              document.querySelector('#error').innerHTML = "Utilisateur deja enregisté";
          } else if (json.message === "erreur Email deja enregistré !") {
              console.log("wrong password")
              document.querySelector('#error').innerHTML = "Email deja enregistré";
          } else if (json === undefined) {
              console.log('pb')
          } else {
              document.location.href = "/"
          }
  })})

}
})}

export default fetchinsc;