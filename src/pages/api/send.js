import EmailTemplate from "@/components/Form/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_KEY);

//Aca se personaliza el mensaje que llegara al correo electronico.
async function POST(req, res) {
   try {
      const formData = req.body;

      const data = await resend.emails.send({
         from: "MENTALIS <info@mentalis.com.mx>",
         to: [formData.email, "Mentalis2024@gmail.com"],
         //titulo del correo que llega a mentalis
         subject: "Consulta General",
         //datos recibidos
         react: EmailTemplate({
            firstName: formData.firstName,
            lastName: formData.lastName,
            phone: formData.phone,
            email: formData.email,
            description: formData.description,
         }),
      });
      console.log(data);

      res.status(200).json(data);
   } catch (error) {
      res.status(400).json(error);
   }
}

export default POST;
