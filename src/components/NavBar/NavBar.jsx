"use client";
import Link from "next/link";
import "./NavBar.css";
import { useRouter } from "next/navigation";
import { dataNavbar } from "@/app/shared/enums";

const NavBar = () => {
   const router = useRouter();
   const isHome = router.pathname === "/";

   return (
      <nav className="navBar ">
         <Link href="/" className="logoInicio">
            {!isHome && <h2>Mentalis</h2>}
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
