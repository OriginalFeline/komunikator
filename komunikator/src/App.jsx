import { useState, useEffect } from "react";
import bcrypt from "bcryptjs";

export default function App() {
    const [ui, setUI] = useState("login")
    
    localStorage.getItem("userid")

    if(localStorage.getItem("userid")){
        fade("dashboard")
    }

    const Ekrany = {
        login: Login,
        register: Register,
        dashboard: Dashboard
    }

    const [wynik, setWynik] = useState("");

    const username = document.getElementById("user").value;

    const password = document.getElementById("password").value;

    

    async function fade(ui){
        document.querySelector("section").style.opacity = "0";
        await setTimeout(function(){
            setUI(ui)
            document.querySelector("section").style.opacity = "1";
        }, 300)
    }

    function Login(){
        return(
            <section>
                <h3>Zaloguj sie</h3>
                <form>
                    <p id="wynik"></p>
                    <label htmlFor="user">Użytkownik: </label><input type="text" id="user" onChange={loginuser()}/><br/><br/>
                    <label htmlFor="password">Hasło: </label><input type="text" id="password"/><br/><br/>
                    <input type="submit" value="Submit" onClick={loginpassword()}/>
                </form>
                <p onClick={() => fade("register")} className="link">Nie masz konta? Zarejestruj sie</p>
            </section>
        )
    }

    function Register(){
        return(
            <section>
                <h1>Strona w trakcie budowy!</h1>
                <p onClick={() => fade("login")} className="link">Wróć na stronę logowania</p>
            </section>
        )
    }
    function Dashboard(){
        return(
            <section>
                <h1>Strona w trakcie budowy!</h1>
                <p onClick={() => fade("login")} className="link">Wróć na stronę logowania</p>
            </section>
        )
    }
  return (
      <>
          <center>
          {Ekrany[ui]({setUI})}
          </center>
      </>
  )
}
