import MissionCard from "@/components/Mentalis/Mission";
import VisionCard from "@/components/Mentalis/Vision";
import ObjectiveCard from "@/components/Mentalis/Objective";

export const metadata = {
   title: "AcercaDe - Mentalis",
};

export default function AcercaDe() {
   return (
      <div>
         <div>
            <h2>Visión</h2>
            <p>
               Aca ira una breve descripcion o concepto sobre las visiones de
               Mentalis.
            </p>
            <VisionCard />
         </div>
         <hr />
         <div>
            <h2>Misión</h2>
            <p>
               Aca ira una breve descripcion o concepto sobre las misiones de
               Mentalis.
            </p>
            <MissionCard />
         </div>
         <hr />
         <div>
            <h2>Objetivos</h2>
            <p>
               Aca ira una breve descripcion o concepto sobre los objetivos de
               Mentalis.
            </p>
            <ObjectiveCard />
         </div>
      </div>
   );
}
