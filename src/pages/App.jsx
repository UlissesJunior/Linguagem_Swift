import React from "react";
import "../assets/styles/style.css";
import Card from "../components/Card";

import Aulas from "../assets/img/aulas.svg";
import Doc from "../assets/img/document.svg";
import Swift from "../assets/img/swift.svg";
import Membros from "../assets/img/membros.svg";

function App() {
  return (
    <div className="container">
      <div className="banner"></div>
      <div className="grid">
        <Card text="O que é o Swift?" Image={Swift} />
        <Card text="Aulas" Image={Aulas}/>
        <Card text="Documentação" Image={Doc}/>
        <Card text="Membros do Grupo" Image={Membros}/>
      </div>
    </div>
  );
}

export default App;
