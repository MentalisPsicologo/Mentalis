//Esta es la plantilla que llegara al correo de mentalis.
const EmailTemplate = ({ firstName, lastName, phone, email, description }) => (
   <div>
      <h1>
         nombre y apellido del cliente: {firstName} {lastName}
      </h1>
      <p>Descripcion de solicitud: {description}</p>
      <h4>numero de telefono: {phone}</h4>
      <h4>correo electronico: {email}</h4>
      <button>
         <a href="https://mentalis-mx.vercel.app/"> Ve a Mentalis</a>
      </button>
   </div>
);

export default EmailTemplate;
