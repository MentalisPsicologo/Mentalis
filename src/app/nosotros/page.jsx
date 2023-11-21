import AboutUs from "@/components/AboutUs/AboutUs";

export const metadata = {
   title: "Nosotros - Mentalis",
};

const NosotrosPage = () => {
   return (
      <div>
         <div>
            <h2>Sobre nosotros</h2>
            <p>
               Aca ira una breve descripcion del personal que trabaja en
               Mentalis
            </p>
         </div>
         <hr />
         <AboutUs />
      </div>
   );
};

export default NosotrosPage;
