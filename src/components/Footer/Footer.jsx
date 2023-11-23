import "./Footer.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faSquareFacebook,
   faInstagram,
   faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Footer = () => {
   return (
      <footer>
         <div className="footer">
            <div className="contLogo">
               <Link href="/">
                  {/* {!isHome && ( */}
                  <Image
                     src="https://res.cloudinary.com/daoavxvau/image/upload/v1700765805/Mentalis/r2koo4vquo5rzxra57vq.png"
                     width={30}
                     height={30}
                     alt="foto del logo"
                     className="logoInicio"
                  />
                  {/* )} */}
               </Link>
            </div>
            <div>
               <h3>&copy; Mentalis Psicologia y Humanidades</h3>
               <p>All rights Reserved • 2023-{new Date().getFullYear()}</p>
            </div>
            <div className="redes">
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
                  <FontAwesomeIcon className="icon" icon={faInstagram} />
               </a>
               <a
                  href="https://wa.me/56977499792"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <FontAwesomeIcon className="icon" icon={faWhatsapp} />
               </a>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
