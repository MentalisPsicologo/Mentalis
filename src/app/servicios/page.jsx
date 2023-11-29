import Footer from "@/components/Footer/Footer";
import ServiceCard from "@/components/service/ServiceCard";
import "./servicios.css";
import { dataServices } from "../shared/enums";
export const metadata = {
   title: "Servicios - Mentalis",
};

export default function Servicios() {
   return (
      <div>
         <div>
            <h2>Servicios</h2>
            <p>
               Aca iria una breve descripcion de los servicios que ofrece
               Mentalis
            </p>
         </div>
         <hr />
         <ServiceCard />
         <Footer />
      </div>
   );
}
