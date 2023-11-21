"use client";

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
               <Image
                  src="https://res.cloudinary.com/daoavxvau/image/upload/v1699902288/Mentalis/logo_l8vwnw.png"
                  width={100}
                  height={100}
                  alt="foto del logo"
               />
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
               <FontAwesomeIcon icon={faSquareFacebook} />
            </a>
            <a
               href="https://www.instagram.com/mentalispyh/"
               target="_blank"
               rel="noopener noreferrer"
            >
               <FontAwesomeIcon icon={faSquareInstagram} />
            </a>
            <a
               href="https://wa.me/56977499792"
               target="_blank"
               rel="noopener noreferrer"
            >
               <FontAwesomeIcon icon={faSquareWhatsapp} />
            </a>
         </div>
      </footer>
   );
};

export default Footer;
