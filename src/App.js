// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Header from "./components/Header";

import User from "./components/User";

const name = "Mert";
const surName = "OZGEN";
const isLoggedIn = false;

function App() {
  // return React.createElement("div", null, "Hello");

  return (
    <>
      <User
        name="Mert"
        surName="Ozgen"
        isLoggedIn={true}
        age={22}
        friends={["Ahmet", "Gökhan", "Tayfun", "Ayşe", "Fatma"]}
        address={{
          title: "Ataşehir/Istanbul",
          zip: 34755,
        }}
      />
      <hr></hr>
      <Header />
      <p className="xyz">lorem lorem lorem ipsum dolor ipsum im</p>
      <h1>{name}</h1>
      <h2> {`Benim adım ${name} soyadım ${surName}`} </h2>
      <h1>{isLoggedIn && `Benim adım ${name} soyadım ${surName}`}</h1>

      {!isLoggedIn && "Giriş yapmadınız"}

      <br></br>

      <label htmlFor="myinput">
        Name
        <input id="myinput" />
      </label>
    </>
  );
}

export default App;
