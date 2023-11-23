"use client";
import Link from "next/link";
import "./NavBar.css";
import { usePathname } from "next/navigation";
import { dataNavbar } from "@/app/shared/enums";

const NavBar = () => {
   const pathname = usePathname();
   const isHome = pathname === "/";

   return (
      <nav className="navBar ">
         <Link href="/" className="logoInicio">
            {!isHome && <h2>Mentalis{isHome}</h2>}
         </Link>
         <div className="menus">
            {dataNavbar.map((item, index) => (
               <Link className="boton" key={index} href={item.url}>
                  {item.name}
               </Link>
            ))}
         </div>
      </nav>
   );
};

export default NavBar;
