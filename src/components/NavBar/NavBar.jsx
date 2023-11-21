import Link from "next/link";
import "./NavBar.css";
import { dataNavbar } from "@/app/shared/enums";
//con esta constante evitamos el harcodeo en las rutas

const NavBar = () => {
   return (
      <nav className="navbar ">
         <Link href="/" className="LogoInicio">
            <h2>Principal</h2>
         </Link>
         {dataNavbar.map((item, index) => (
            <Link key={index} href={item.url}>
               {item.name}
            </Link>
         ))}
      </nav>
   );
};

export default NavBar;
