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
            <div id="toggle-menu" className="toggle-menu"></div>
            <Link href="/" className="contLogo">
               <Image
                  src="https://res.cloudinary.com/daoavxvau/image/upload/v1703634000/Mentalis/logo_uwvdw0.png"
                  width={140}
                  height={100}
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
