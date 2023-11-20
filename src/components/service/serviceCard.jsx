import "./serviceCard.css";
import Image from "next/image";
import dataCards from "./serviceData";

const ServiceCard = () => {
   return (
      <div>
         {dataCards.map((card, index) => (
            <div key={index}>
               <Image
                  src={card.image}
                  width={100}
                  height={100}
                  alt="Img logo servicos"
               />
               <h3>{card.title}</h3>
               <p>{card.description}</p>
            </div>
         ))}
      </div>
   );
};

export default ServiceCard;
