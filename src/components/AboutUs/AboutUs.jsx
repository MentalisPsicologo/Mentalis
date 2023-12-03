"use client";
import { useState } from "react";
import "./AboutUs.css";
import "../service/Paleta.css";
import { dataAboutUs } from "@/app/shared/enums";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faLinkedin,
   faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

const AboutUs = () => {
   const [showFullText, setShowFullText] = useState(false);

   const toggleText = () => {
      setShowFullText(!showFullText);
   };

   return (
      <div className="aboutUs">
         {dataAboutUs.map((card, index) => (
            <div key={index} className="cadaUno">
               <Image
                  src={card.image}
                  width={250}
                  height={250}
                  alt="foto de perfil"
                  className="fotoNos"
               />
               <h3>{card.name}</h3>
               <h5>{card.Profession}</h5>
               <p className={`presenta ${showFullText ? "showFullText" : ""}`}>
                  {card.Presentación1 || null}
                  {card.Presentación1 && <br />}
                  {card.Presentación2 || null}
                  {card.Presentación2 && <br />}
                  {card.Presentación3 || null}
                  {card.Presentación3 && <br />}
                  {card.Presentación4 || null}
                  {card.Presentación4 && <br />}
                  {card.Presentación5 || null}
               </p>
               {!showFullText && (
                  <button onClick={toggleText} className="readMoreBtn">
                     Leer más..
                  </button>
               )}
               <div className="red">
                  <a
                     href={card.URLLinkedIn}
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                  <a
                     href={card.URlTwitter}
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <FontAwesomeIcon icon={faTwitterSquare} />
                  </a>
               </div>
            </div>
         ))}
      </div>
   );
};

export default AboutUs;
