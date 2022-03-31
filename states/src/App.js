// import logo from "./logo.svg";
// import "./App.css";

import { useState } from "react";

function App() {
  const [name, setName] = useState("Mert");
  const [age, setAge] = useState(24);
  const [friends, setFriends] = useState(["Ahmet", "Murat"]);
  const [address, setAddress] = useState({ title: "Istanbul", zip: 34756 });

  return (
    <div className="App">
      <h1>Hello! {name}</h1>
      <h2>{age}</h2>
      <button
        onClick={() => {
          setName("Halil");
        }}
      >
        Change Name
      </button>
      <button
        onClick={() => {
          setAge(25);
        }}
      >
        Change Age
      </button>

      <hr></hr>
      <br></br>
      <h2>Friends</h2>
      {friends.map((friend, index) => (
        <div key={index}> {friend} </div>
      ))}

      <button
        onClick={() => {
          setFriends([...friends, "Ayşe"]);
        }}
      >
        Add Friend
      </button>

      <hr></hr>
      <br></br>

      <h2>Address</h2>

      <div>
        {address.title} {address.zip}
      </div>
      <br></br>
      <button
        onClick={() => setAddress({ ...address, title: "Ankara", zip: 44444 })}
      >
        Change Location
      </button>
    </div>
  );
}

export default App;
