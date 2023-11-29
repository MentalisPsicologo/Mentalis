import "./serviceCard.css";
import Image from "next/image";
import Link from "next/link";
import { dataServices } from "@/app/shared/enums";

const ServiceCard = () => {
   return (
      <div className="serviceCards">
         {dataServices.map((card, index) => (
            <div key={index} className="serviceCard">
               <Image
                  src={card.image}
                  width={100}
                  height={100}
                  alt="Img logo servicos"
               />
               <h3>{card.title}</h3>
               <p>{card.summary}</p>
               <Link href={`/servicios/${card.id}`}>Leer mas</Link>
            </div>
         ))}
      </div>
   );
};

export default ServiceCard;
