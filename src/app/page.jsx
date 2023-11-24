/* eslint-disable @next/next/no-img-element */
import "./page.css";
import Footer from "@/components/Footer/Footer";

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
            <div>
               <h4>Transformando vidas, nutriendo mentes.</h4>
               <p>
                  ¡Bienvenido a Mentalis! Somos más que un centro de salud
                  mental; somos tu compañero en el viaje hacia el bienestar
                  emocional. En Mentalis, nos dedicamos a proporcionar un apoyo
                  integral, donde cada individuo es único, y cada historia es
                  importante. Nuestro equipo de profesionales apasionados está
                  aquí para guiarte, ofreciendo servicios personalizados que
                  transforman vidas. Descubre un espacio donde la salud mental
                  se nutre con compasión, innovación y cuidado excepcional. Da
                  el primer paso hacia una vida plena en Mentalis: tu destino
                  para la transformación positiva.
               </p>
            </div>
         </div>
         <Footer />
      </div>
   );
}
