const URL="http://localhost:8081/auth/signin";  //url da la route de la requete en back

const fetchco = () => { //instancier le js en react
    
    document.getElementById("submit").addEventListener('click', (e) => { //evenement au click sur le bouton 
        e.preventDefault();
        const user = { // creation d un objet avec mes données a envoyer
            username: document.querySelector("#username").value, //email-> req.body.email
            password: document.querySelector("#password").value //attention a nommer comme en back
        }
        const Formjson = JSON.stringify(user); // Transformation en String
        console.log(user);
        const config = { //configuration fetch
            method: 'POST', //envoyer
            headers: { //autorisation
                "Accept": "application/json", //j'accepte de recevoir du json
                "Content-Type": "application/json", //j'envoie du json
                "Access-Control-Allow-Origin": "http://localhost:8081/auth/signin", //j autorise a aller sur mon back
            },
            body: Formjson, // j'envoie dans le back body ==req.body
        }

        fetch(URL, config) //instancier la fetch
            .then(response => { //après que la fetch est faite je fais :
                response.json().then(json => { //transformation de la reponse en json
                    console.log("yes");
                    if (json.message === "user not found") { //gestion erreur
                        console.log("user not found")
                        document.querySelector('#error').innerHTML = "Utilisateur non trouvé";
                    } else if (json.message === "wrong password") {
                        console.log("wrong password")
                        document.querySelector('#error').innerHTML = "Mot de passe incorrect";
                    } else if (json === undefined) {
                        console.log('pb')
                    } else {
                        const token = json.accessToken;
                        sessionStorage.setItem("Token", json.accessToken)
                        document.location.href = "/HomePage"
                    }
                })
            })
    })
}
export default fetchco;