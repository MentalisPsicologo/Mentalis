import Footer from "@/components/Footer/Footer";
import FormCard from "@/components/Form/Form";

export const metadata = {
   title: "FormInfo - Mentalis",
};

const FormInfo = () => {
   return (
      <div>
         <div>
            <h2 className="formTitle">Formulario de Información</h2>
            <FormCard />
         </div>
      </div>
   );
};

export default FormInfo;
