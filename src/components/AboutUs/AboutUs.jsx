import "./AboutUs.css";
import { dataAboutUs } from "@/app/shared/enums";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faLinkedin,
   faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

const AboutUs = () => {
   return (
      <div className="aboutUs">
         {dataAboutUs.map((card, index) => (
            <div key={index} className="cadaUno">
               <Image
                  src={card.image}
                  width={250}
                  height={250}
                  alt="foto de perfil"
               />
               <h3>{card.name}</h3>
               <h5>{card.Profession}</h5>
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
