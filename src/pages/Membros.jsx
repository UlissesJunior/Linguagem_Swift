import Navbar from "../components/Navbar";
import "../assets/styles/style.css";
import Card from "../components/Card";
import Mari from "../assets/img/mari.jpg"

function Membros() {
  return (
    <>
      <Navbar />
      <div className="container center">
        <Card
          text="Davi Chagas"
          Image="https://avatars.githubusercontent.com/u/68388379?v=4"
        />
        <Card
          text="Luiz Felipe"
          Image="https://avatars.githubusercontent.com/u/81185791?v=4"
        />
        <Card
          text="Mariana Mendes"
          Image={Mari}
        />
        <Card
          text="Ulisses Junior"
          Image="https://avatars.githubusercontent.com/u/80963163?v=4"
        />
      </div>
    </>
  );
}

export default Membros;
