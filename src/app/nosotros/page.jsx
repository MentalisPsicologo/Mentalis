import AboutUs from "@/components/AboutUs/AboutUs";
import Footer from "@/components/Footer/Footer";
import "./nosotros.css";

export const metadata = {
   title: "Nosotros - Mentalis",
};

const NosotrosPage = () => {
   return (
      <div>
         <div className="nosotros">
            <div className="contNos">
               <h2>Sobre nosotros</h2>
               <p>
                  En el vibrante equipo de Mentalis, cada miembro es una pieza
                  esencial, aportando experiencias únicas y una apasionada
                  dedicación a la salud mental. Nuestra fortaleza radica en la
                  diversidad de habilidades y perspectivas que convergen para
                  crear un entorno dinámico y enriquecedor. Desde terapeutas
                  apasionados hasta expertos en bienestar, compartimos un
                  compromiso profundo con el bienestar emocional y psicológico.
                  La sinergia entre nuestros profesionales refleja un enfoque
                  colaborativo, donde el conocimiento se entrelaza para ofrecer
                  soluciones holísticas. En Mentalis, la dedicación va más allá
                  de lo profesional; es un compromiso humano de brindar apoyo
                  integral a cada individuo Cada miembro del equipo aporta su
                  experiencia única, creando un mosaico de habilidades que nos
                  permite abordar las necesidades individuales de manera
                  efectiva. Aquí, no solo poseemos habilidades excepcionales,
                  sino que también llevamos consigo un compromiso innato de
                  proporcionar un ambiente de apoyo y comprensión.
               </p>
            </div>
            <hr />
            <AboutUs />
         </div>
         <Footer />
      </div>
   );
};

export default NosotrosPage;
