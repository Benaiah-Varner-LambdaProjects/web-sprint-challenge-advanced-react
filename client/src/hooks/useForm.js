// write your custom hook here to control your checkout form
 import React, {useState} from 'react'
 
 export const useForm = (Formvalues) => {
     const [values, setValues] = useState(Formvalues);
    

     const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };

     return [handleChanges, values]
 }

 
 export const useSubmit = () => {
    const [showSuccessMessage, setSuccessMessage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccessMessage(true);
      };


     return [showSuccessMessage, handleSubmit]
 }
 
 