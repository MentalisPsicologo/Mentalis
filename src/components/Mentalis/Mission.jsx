import { dataMission } from "@/app/shared/enums";
import Image from "next/image";

const MissionCard = () => {
   return (
      <div>
         {dataMission.map((card, index) => (
            <div key={index}>
               <h3>{card.title}</h3>
               <p>{card.description}</p>
               <Image
                  src={card.image}
                  width={400}
                  height={400}
                  alt="Mision Mentalis"
               />
            </div>
         ))}
      </div>
   );
};

export default MissionCard;
