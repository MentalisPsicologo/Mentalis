import { dataObjective } from "@/app/shared/enums";
import Image from "next/image";

const ObjectiveCard = () => {
   return (
      <div>
         {dataObjective.map((card, index) => (
            <div key={index}>
               <h3>{card.title}</h3>
               <p>{card.description}</p>
               <Image
                  src={card.image}
                  width={400}
                  height={400}
                  alt="Objetivos Mentalis"
               />
            </div>
         ))}
      </div>
   );
};

export default ObjectiveCard;
