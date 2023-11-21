import "./serviceCard.css";
import Image from "next/image";
import { dataServices } from "@/app/shared/enums";

const ServiceCard = () => {
   return (
      <div>
         {dataServices.map((card, index) => (
            <div key={index}>
               <Image
                  src={card.image}
                  width={100}
                  height={100}
                  alt="Img logo servicos"
               />
               <h3>{card.title}</h3>
               <p>{card.summary}</p>
            </div>
         ))}
      </div>
   );
};

export default ServiceCard;
