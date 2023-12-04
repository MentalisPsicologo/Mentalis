"use client";
import { useState } from "react";
import "../service/Paleta.css";

import "./Form.css";
import PhoneNumberValidation from "../PhoneNumberValidation/PhoneNumberValidation";

//Aca se crea el componente del formulario con sus respectivos campos y validaciones.
const FormCard = () => {
   const [loading, setLoading] = useState(false);
   const [successMessage, setSuccessMessage] = useState("");
   const [formErrors, setFormErrors] = useState({
      firstName: "*",
      lastName: "",
      phone: "",
      email: "",
      description: "",
   });

   let errorMessage = "";
   const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      phone: "+52",
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
      setFormErrors((prevData) => ({
         ...prevData,
         [name]: errorMessage,
      }));
   };

   //valida campos en especifico
   const validateField = (fieldName, value) => {
      const regexOnlyEmail =
         /*  /^[\wñ.-]+@[a-zA-Zñ\d.-]+\.[a-zA-Zñ]{2,}$/; */
         /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-ZñÑ\-0-9]+\.)+[a-zA-ZñÑ]{2,}))$/;
      const regexOnlyLetters = /^[a-zA-ZáéíóúüÁÉÍÓÚÜñÑ\s]+$/;
      const regexOnlyNumbers = /^\+?\d+$/;

      // if (!value.trim()) {
      //    errorMessage = "Campo obligatorio.";
      // }

      if (fieldName === "firstName") {
         if (value.length === 0) {
            setFormErrors({ firstName: "error" });

            errorMessage = "Por favor ingrese su nombre";
         } else if (!regexOnlyLetters.test(value) || value.length <= 2) {
            errorMessage =
               "Por favor ingrese su nombre sin numeros o caracteres especiales.";
         } else if (value.length > 30) {
            errorMessage = "El nombre no puede ser mayor a 30 caracteres.";
         } else {
            setFormErrors({ firstName: "error" });
         }
      }

      if (fieldName === "lastName") {
         if (value.length === 0) {
            errorMessage = "Por favor ingrese su nombre";
            errorMessage = "Por favor ingrese su apellido";
         } else if (!regexOnlyLetters.test(value) || value.length <= 2) {
            errorMessage = "El apellido ingresado no es válido.";
         } else if (value.length > 30) {
            errorMessage = "El apellido no puede ser mayor a 30 caracteres.";
         } else {
            setFormErrors({ lastName: "error" });
         }
      }

      if (fieldName === "phone") {
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
            errorMessage = "La consulta no debe superar los 10000 caracteres";
         }
      }
      setFormErrors((prevErrors) => ({
         ...prevErrors,
         [fieldName]: errorMessage,
      }));
   };

   const handleSendForm = async () => {
      console.log(formData);

      try {
         setLoading(true);
         const route = process.env.NEXT_PUBLIC_PATH;

         const res = await fetch(route, {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
         });

         const data = await res.json();
         if (res.ok) {
            setFormData({
               firstName: "",
               lastName: "",
               phone: "+52",
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
   console.log(isSubmitDisabled, loading);

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
               {formErrors.firstName && (
                  <p className="formErrors">{formErrors.firstName}</p>
               )}
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
               {formErrors.lastName && (
                  <p className="formErrors">{formErrors.lastName}</p>
               )}
            </div>
            <div className="inputBox">
               <label>Teléfono:</label>
               <div className="custom-phone-input">
                  <PhoneNumberValidation
                     phoneNumberValue={formData.phone}
                     onPhoneNumberChange={(value) => {
                        setFormData((prevData) => ({
                           ...prevData,
                           phone: value,
                        }));
                        validateField("phone", value);
                     }}
                  />
               </div>
               {formErrors.phone && (
                  <p className="formErrors">{formErrors.phone}</p>
               )}
            </div>
            <div className="inputBox">
               <label>Email:</label>
               <input
                  type="email"
                  placeholder="Agrega tu Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
               />
               {formErrors.email && (
                  <p className="formErrors">{formErrors.email}</p>
               )}
            </div>
            <div className="inputBox">
               <label>Consulta:</label>
               <textarea
                  name="description"
                  placeholder="Agrega aqui tu cunsulta y a la brevedad nos couminicaremos contigo"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows="5"
               />
               {formErrors.description && (
                  <p className="formErrors">{formErrors.description}</p>
               )}
            </div>
            <div className="formButton">
               <button
                  onClick={handleSendForm}
                  disabled={loading || isSubmitDisabled}
               >
                  {loading ? "Enviando..." : "Enviar Consulta"}
               </button>
            </div>
         </form>
      </div>
   );
};

export default FormCard;
