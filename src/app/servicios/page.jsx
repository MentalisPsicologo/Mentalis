import ServiceCard from "@/components/service/serviceCard";

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
      </div>
   );
}
