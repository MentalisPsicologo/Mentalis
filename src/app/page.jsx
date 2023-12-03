/* eslint-disable @next/next/no-img-element */
import "./page.css";
import "../components/service/Paleta.css";

export default function LandigPage() {
   const logo = "./Logo.jpeg";
   return (
      <div>
         <div className="contenedor">
            <div className="contImagen">
               <h1 className="titulo">MENTALIS</h1>
               <img
                  src="https://res.cloudinary.com/daoavxvau/image/upload/v1699902288/Mentalis/logo_l8vwnw.png"
                  alt="Logo Mentalis"
                  className="logoLandingPage"
               />
            </div>
            <div className="intro">
               <h4 className="introTitulo">
                  Transformando vidas, nutriendo mentes.
               </h4>
               <p className="infoIntro">
                  Somos un colectivo de profesionistas, con miras a constituirse
                  legalmente, a quienes nos une:
                  <br />
                  La certeza de que las personas tienen la capacidad para
                  transformar y transformarse. Por eso, apoyamos a nuestros
                  pacientes, clientes, socios y estudiantes a explotar lo mejor
                  de sí.
                  <br />
                  El deseo de transmitir lo que sabemos. Por eso, organizamos
                  grupos de estudio, talleres, conferencias y otros eventos
                  académicos y culturales para psicólogos en formación y
                  profesiones afines.
                  <br />
                  La convicción de que nunca terminamos de aprender. Para ello,
                  participamos en actividades de actualización y desarrollo
                  profesional.
                  <br />
                  La voluntad de aportar nuestro granito de arena para atender
                  las necesidades psicosociales.
                  <br />
                  El interés de vivir dignamente de nuestra profesión. Nos
                  distingue el prestigio y el profesionalismo. Nuestro trabajo
                  habla por nosotros.
               </p>
            </div>
         </div>
      </div>
   );
}
