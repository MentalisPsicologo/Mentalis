import AboutUs from "@/components/AboutUs/AboutUs";
import Footer from "@/components/Footer/Footer";

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
         <Footer />
      </div>
   );
};

export default NosotrosPage;
