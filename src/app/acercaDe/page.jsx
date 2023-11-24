import MissionCard from "@/components/Mentalis/Mission";
import VisionCard from "@/components/Mentalis/Vision";
import ObjetiveCard from "@/components/Mentalis/Objetive";
import Footer from "@/components/Footer/Footer";
import "./acercaDe.css";

export const metadata = {
   title: "AcercaDe - Mentalis",
};

export default function AcercaDe() {
   return (
      <div className="acercaDe">
         <div className="visiones">
            <div>
               <h2>Visión</h2>
               <p>
                  En Mentalis, aspiramos a ser líderes en la transformación
                  positiva de vidas a través de la salud mental. Visualizamos un
                  mundo donde cada individuo experimenta un bienestar emocional
                  y psicológico pleno, empoderados por el apoyo integral de
                  nuestro equipo de profesionales dedicados.
               </p>
               <VisionCard />
            </div>
         </div>
         <hr />
         <div className="mision">
            <div>
               <h2>Misión</h2>
               <p>
                  En Mentalis, nos dedicamos a proporcionar servicios de salud
                  mental de alta calidad, abordando las necesidades únicas de
                  cada individuo. A través de enfoques innovadores y una
                  atención personalizada, buscamos ser un faro de esperanza y
                  apoyo, guiando a nuestros clientes hacia una vida plena y
                  satisfactoria.
               </p>
               <MissionCard />
            </div>
         </div>
         <hr />
         <div className="objetivos">
            <h2>Objetivos</h2>
            <ul className="listaObjetivos">
               <li>Brindar Apoyo Integral:</li>
               <p>
                  Proporcionar servicios de salud mental que aborden no solo los
                  síntomas, sino también las raíces subyacentes de los desafíos
                  emocionales.
               </p>
               <li>Promover la Diversidad y la Inclusión:</li>
               <p>
                  Fomentar un ambiente acogedor y diverso donde todas las
                  identidades sean respetadas y valoradas.
               </p>
               <li>Innovación Continua:</li>
               <p>
                  Buscar constantemente nuevas metodologías y enfoques para
                  mejorar la eficacia de nuestras intervenciones y adaptarnos a
                  las necesidades cambiantes.
               </p>
               <li>Educación y Concientización:</li>
               <p>
                  Desarrollar programas educativos para aumentar la conciencia
                  sobre la salud mental y reducir el estigma asociado.
               </p>
               <li>Colaboración Interdisciplinaria:</li>
               <p>
                  Trabajar en estrecha colaboración con profesionales de
                  diversas disciplinas para proporcionar soluciones holísticas a
                  los desafíos de salud mental.
               </p>
            </ul>
            <ObjetiveCard />
         </div>
         <Footer />
      </div>
   );
}
