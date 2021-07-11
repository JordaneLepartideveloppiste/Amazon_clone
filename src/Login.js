import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import "./styles/Login.css";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = e => {
        e.preventDefault();
        auth
        .signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message))
    }
    const register = e => {
        e.preventDefault();
        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            console.log(auth);
            if (auth) {
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
    }
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="http://boostzone.b-cdn.net/wp-content/uploads/2016/08/logo-amazon-fr.jpeg"
          alt="logo_amazon"
        />
      </Link>
      <div className="login_container">
        <h1>Identifiez-vous</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Mot de Passe</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login_signInButton" onClick={signIn} type="submit">Se connecter</button>
        </form>
        <p>
          En vous connectant, vous reconnaissez les conditions générales de
          vente ainsi que celle d'usage du site AMAZON FAKE CLONE. Veuillez vous
          référez aux articles concernant la vie privée, les cookies ainsi que
          les publicités.
        </p>
        <button className="login_registerButton" onClick={register}>Créer un compte</button>
      </div>
    </div>
  );
}

export default Login;
