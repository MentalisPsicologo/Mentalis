import Link from "next/link";
import "./NavBar.css";
import { dataNavbar } from "@/app/shared/enums";
//con esta constante evitamos el harcodeo en las rutas

const NavBar = () => {
   return (
      <nav className="navBar ">
         <Link href="/" className="logoInicio">
            <h2>Mentalis</h2>
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
