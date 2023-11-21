import "./AboutUs.css";
import dataAboutUs from "./AboutUsData";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faLinkedin,
   faTwitterSquare,
   faAndroid,
   faDropbox,
} from "@fortawesome/free-brands-svg-icons";

const AboutUs = () => {
   return (
      <div>
         {dataAboutUs.map((card, index) => (
            <div key={index}>
               <Image
                  src={card.image}
                  width={300}
                  height={300}
                  alt="foto de perfil"
               />
               <h3>{card.name}</h3>
               <h5>{card.Profession}</h5>
               <div className="redes">
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
                  <FontAwesomeIcon icon={faAndroid} className="icon" />
                  <FontAwesomeIcon icon={faDropbox} className="icon" />
               </div>
            </div>
         ))}
      </div>
   );
};

export default AboutUs;
