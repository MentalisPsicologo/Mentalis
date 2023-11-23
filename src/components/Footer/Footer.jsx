import "./Footer.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faSquareFacebook,
   faSquareInstagram,
   faSquareWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
   return (
      <footer>
         <div className="footer">
            <div>
               <a href="/">
                  <Image
                     src="https://res.cloudinary.com/daoavxvau/image/upload/v1699902288/Mentalis/logo_l8vwnw.png"
                     width={50}
                     height={50}
                     alt="foto del logo"
                     className="logoFooter"
                  />
               </a>
            </div>
            <div>
               <h3>&copy; Mentalis Psicologia y Humanidades</h3>
               <p>2023 - {new Date().getFullYear()}</p>
               <p>All rights Reserved.</p>
            </div>
            <a
               href="https://www.facebook.com/mentalispyh"
               target="_blank"
               rel="noopener noreferrer"
            >
               <FontAwesomeIcon className="icon" icon={faSquareFacebook} />
            </a>
            <a
               href="https://www.instagram.com/mentalispyh/"
               target="_blank"
               rel="noopener noreferrer"
            >
               <FontAwesomeIcon className="icon" icon={faSquareInstagram} />
            </a>
            <a
               href="https://wa.me/56977499792"
               target="_blank"
               rel="noopener noreferrer"
            >
               <FontAwesomeIcon className="icon" icon={faSquareWhatsapp} />
            </a>
         </div>
      </footer>
   );
};

export default Footer;
