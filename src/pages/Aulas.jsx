import Navbar from "../components/Navbar";
import "../assets/styles/style.css";
import Video from "../components/Vídeo";

function Aulas() {
  return (
    <>
      <Navbar />
      <div className="container center">
      <Video text="Aula 1" videoUrl="https://www.youtube.com/embed/ELa-PgWlYDI" description="O que é Swift?"/>
      <Video text="Aula 2"/>
      <Video text="Aula 3"/>
      </div>
    </>
  );
}

export default Aulas;
