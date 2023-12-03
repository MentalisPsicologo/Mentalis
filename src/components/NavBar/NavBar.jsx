"use client";
import Link from "next/link";
import "./NavBar.css";
import { usePathname } from "next/navigation";
import { dataNavbar } from "@/app/shared/enums";
import Image from "next/image";

const NavBar = () => {
   const pathname = usePathname();

   return (
      <div className="contNav">
         <nav className="navBar ">
            <Link href="/" className="contLogo">
               <Image
                  src="https://res.cloudinary.com/daoavxvau/image/upload/v1700765805/Mentalis/r2koo4vquo5rzxra57vq.png"
                  width={40}
                  height={40}
                  alt="foto del logo"
                  className="logoInicio"
               />
            </Link>
            <div className="menus">
               {dataNavbar.map((item, index) => (
                  <Link
                     className={`boton ${
                        pathname === item.url ? "activo" : ""
                     }`}
                     key={index}
                     href={item.url}
                  >
                     {item.name}
                  </Link>
               ))}
            </div>
         </nav>
      </div>
   );
};

export default NavBar;
