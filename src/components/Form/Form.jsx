"use client";
import { useState } from "react";
import "./Form.css";

//Aca se crea el componente del formulario con sus respectivos campos y validaciones.
const FormCard = () => {
   const [loading, setLoading] = useState(false);
   const [successMessage, setSuccessMessage] = useState("");

   const [formErrors, setFormErrors] = useState({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      description: "",
   });

   const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      description: "",
   });
   //maneja cambios en los campos del formulario
   const handleInputChange = (event) => {
      const { name, value } = event.target;
      //Actualiza el estado del formulario
      setFormData((prevData) => ({
         ...prevData,
         [name]: value,
      }));
      //valida y actualiza estado de los errores
      validateField(name, value);
   };

   //valida campos en especifico
   const validateField = (fieldName, value) => {
      let errorMessage = "";
      const regexOnlyEmail =
         /*  /^[\wñ.-]+@[a-zA-Zñ\d.-]+\.[a-zA-Zñ]{2,}$/; */
         /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-ZñÑ\-0-9]+\.)+[a-zA-ZñÑ]{2,}))$/;
      const regexOnlyLetters = /^[a-zA-ZáéíóúüÁÉÍÓÚÜñÑ]+$/;
      const regexOnlyNumbers = /^\+?\d+$/;

      if (!value.trim()) {
         errorMessage = "Campo obligatorio.";
      }

      if (fieldName === "firstName") {
         if (value.length === 0) {
            errorMessage = "Por favor ingrese su nombre";
         } else if (!regexOnlyLetters.test(value) || value.length <= 2) {
            errorMessage =
               "Por favor ingrese su nombre sin espacios, numeros o caracteres especiales.";
         } else if (value.length > 20) {
            errorMessage = "El nombre no puede ser mayor a 20 caracteres.";
         } else {
            errorMessage = "";
         }
      }

      if (fieldName === "lastName") {
         if (value.length === 0) {
            errorMessage = "Por favor ingrese su apellido";
         } else if (!regexOnlyLetters.test(value) || value.length <= 2) {
            errorMessage =
               "Por favor ingrese su apellido sin espacios, numeros o caracteres especiales.";
         } else if (value.length > 20) {
            errorMessage = "El apellido no puede ser mayor a 20 caracteres.";
         } else {
            errorMessage = "";
         }
      }

      if (fieldName === "phone") {
         const cleanedPhoneNumber = value.replace(/\s/g, "");
         if (cleanedPhoneNumber.length === 0) {
            errorMessage = "Por favor ingrese su numero de telefono";
         } else if (!regexOnlyNumbers.test(cleanedPhoneNumber)) {
            errorMessage =
               "Por favor ingrese su numero telefonico sin letras o caracteres especiales.";
         } else if (cleanedPhoneNumber.length > 12) {
            errorMessage =
               "El numero telefonico no puede ser mayor a 12 caracteres.";
         } else {
            errorMessage = "";
         }
      }

      if (fieldName === "email") {
         if (value.length === 0) {
            errorMessage = "Por favor ingrese su Correo electronico";
         } else if (!regexOnlyEmail.test(value)) {
            errorMessage =
               "Correo electronico no valido, por favor verifique los datos ingresados";
         } else if (value.length > 320) {
            errorMessage =
               "El correo electronico proporsionado sobrepasa los caracteres aceptados";
         }
      }

      if (fieldName === "description") {
         const trimmedValue = value.trim();

         if (trimmedValue.length === 0) {
            errorMessage = "Por favor ingrese su consulta";
         } else if (trimmedValue.length > 10000) {
            errorMessage =
               "los datos ingresados superan el limite de caracteres soportados por la app";
         }
      }
      setFormErrors((prevErrors) => ({
         ...prevErrors,
         [fieldName]: errorMessage,
      }));
   };

   const handleSendForm = async () => {
      try {
         setLoading(true);
         const res = await fetch("http://localhost:3000/api/send", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
         });

         const data = await res.json();
         console.log(data);
         if (res.ok) {
            setFormData({
               firstName: "",
               lastName: "",
               phone: "",
               email: "",
               description: "",
            });

            setSuccessMessage("¡El Formulario se envio correctamente!✅");

            setTimeout(() => {
               setSuccessMessage("");
               setLoading(false);
            }, 3000);
         }
         return data;
      } catch (error) {
         console.error(error);
      }
   };
   //esta linea bloquea el boton si hay campos obligatorios
   const isSubmitDisabled = Object.values(formErrors).some(
      (error) => error !== ""
   );

   return (
      <div className="formContent">
         <form className="form">
            {successMessage && <p>{successMessage}</p>}
            <div className="inputBox">
               <label>Nombre:</label>
               <input
                  type="text"
                  placeholder="Agrega tu nombre"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
               />
               {formErrors.firstName && <p>{formErrors.firstName}</p>}
            </div>
            <div className="inputBox">
               <label>Apellido:</label>
               <input
                  type="text"
                  name="lastName"
                  placeholder="Agrega tu apellido"
                  value={formData.lastName}
                  onChange={handleInputChange}
               />
               {formErrors.lastName && <p>{formErrors.lastName}</p>}
            </div>
            <br />
            <div className="inputBox">
               <label>
                  Teléfono:
                  <input
                     type="text"
                     placeholder="Agrega tu numero de telefono"
                     name="phone"
                     value={formData.phone}
                     onChange={handleInputChange}
                  />
                  {formErrors.phone && <p>{formErrors.phone}</p>}
               </label>
               <br />
               <label>
                  Email:
                  <input
                     type="email"
                     placeholder="Agrega tu Email"
                     name="email"
                     value={formData.email}
                     onChange={handleInputChange}
                  />
                  {formErrors.email && <p>{formErrors.email}</p>}
               </label>
            </div>
            <br />
            <label>
               Descripción:
               <textarea
                  name="description"
                  placeholder="Agrega aqui tu descripcion"
                  value={formData.description}
                  onChange={handleInputChange}
               />
               {formErrors.description && <p>{formErrors.description}</p>}
            </label>
            <br />
            <button
               onClick={handleSendForm}
               disabled={loading || isSubmitDisabled}
            >
               {loading ? "Enviando..." : "Enviar Consulta"}
            </button>
         </form>
      </div>
   );
};

export default FormCard;
