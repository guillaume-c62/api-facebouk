const URL="http://localhost:8081/user";  //url da la route de la requete en back


const fetchprof=()=>{ //instancier le js en react

  const user={   // creation d un objet avec mes données a envoyer
    token: sessionStorage.getItem("Token")
  }

const Formjson=JSON.stringify(user); // Transformation en String

const config = { //configuration fetch
    method: 'POST', //envoyer
    headers: {  //autorisation
    "Accept": "application/json", //j'accepte de recevoir du json
    "Content-Type": "application/json", //j'envoie du json   
    "Access-Control-Allow-Origin":"http://localhost:8081/user", //j autorise a aller sur mon back
    },
    body: Formjson,// j'envoie dans le back body ==req.body
  } 
  
  fetch(URL, config) //instancier la fetch
  .then(response => { //après que la fetch est faite je fais :
    response.json().then(json => { //transformation de la reponse en json
        document.querySelector('#username').innerHTML=json.username;
        document.querySelector('#email').innerHTML=json.email;
  })})
 
}

export default fetchprof;