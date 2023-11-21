/* eslint-disable @next/next/no-img-element */
import "./page.css";

export default function LandigPage() {
   const logo = "./Logo.jpeg";
   return (
      <div>
         <h1 className="titulo">MENTALIS</h1>
         <img
            src="https://res.cloudinary.com/daoavxvau/image/upload/v1699902288/Mentalis/logo_l8vwnw.png"
            alt="Logo Mentalis"
            className="logoLandingPage"
         />
      </div>
   );
}
