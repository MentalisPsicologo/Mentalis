import ServiceCard from "../../components/service/serviceCard";
import "./servicios.css";

export const metadata = {
   title: "Servicios - Mentalis",
};

export default function Servicios() {
   return (
      <div className="contServ">
         <div className="contenido">
            <h2>Servicios</h2>
            <p>
               Aca iria una breve descripcion de los servicios que ofrece
               Mentalis
            </p>
            <hr />
            <ServiceCard />
         </div>
      </div>
   );
}
