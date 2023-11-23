/* eslint-disable @next/next/no-img-element */
import "./page.css";
import Footer from "@/components/Footer/Footer";

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
         <div>
            <h4>
               Eslogan de la empresa, ejemplo: Estamos para ayudarte en lo que
               necesites
            </h4>
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
               fuga veritatis dignissimos amet soluta suscipit, similique
               deserunt voluptates praesentium! Excepturi nobis accusamus
               voluptate sint sit quidem, corrupti ex odio qui.
            </p>
            <Footer />
         </div>
      </div>
   );
}
