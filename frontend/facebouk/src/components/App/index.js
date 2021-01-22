import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WelcomePage from '../WelcomePage';
import Inscription from '../InscriptionPage';
import Connexion from '../ConnexionPage';
import Profil from '../ProfilPage';
import HomePage from '../HomePage';
//blabla
function App() {
    return (
      <Router> 
        <Switch>

        <Route exact path="/" component={WelcomePage} />
        <Route path="/Inscription" component={Inscription} />
        <Route path="/Connexion" component={Connexion} />
        <Route path="/Profil" component={Profil} />
        <Route path="/HomePage" component={HomePage} />

        </Switch>  
      </Router>
  
    );
  }
  
  export default App;