import Footer from "@/components/Footer/Footer";
import FormCard from "@/components/Form/Form";

export const metadata = {
   title: "FormInfo - Mentalis",
};

const FormInfo = () => {
   return (
      <div>
         <div>
            <h2>Formulario de Información</h2>
            <FormCard />
         </div>
         <Footer />
      </div>
   );
};

export default FormInfo;
