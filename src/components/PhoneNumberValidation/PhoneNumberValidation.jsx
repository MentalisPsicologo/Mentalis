"use client";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function PhoneNumberValidation() {
   const [PhoneNumber, setPhoneNumber] = useState("");
   const [isValid, setIsValid] = useState(true);

   const handleChange = (value) => {
      setPhoneNumber(value);
      setIsValid(validatePhoneNumber(value));
      console.log(PhoneNumber);
   };

   const validatePhoneNumber = (phoneNumber) => {
      const phoneNumberPattern = /^\d{10,12}$/;
      return phoneNumberPattern.test(phoneNumber);
   };

   return (
      <div className="phoneNumber">
         <PhoneInput
            country="mx"
            type="text"
            value={PhoneNumber}
            onChange={handleChange}
            inputProps={{ required: true }}
            containerClass="custom-container-class"
            inputClass="custom-input-class"
         />
         {!isValid && (
            <p className="formErrors">El númeron ingresado no es correcto</p>
         )}
      </div>
   );
}
