import { useMemo } from "react";
import { useEffect, useState } from "react";

export const useForm = (initialForm = {}, formValiations = {} ) => {
  const [formState, setFormState] = useState(initialForm);
  const [formValidation, setFormValidation] = useState({})

  useEffect(() => {
    
    createValidators();

  }, [formState])

  useEffect(() => {
    
    setFormState(initialForm)

  }, [initialForm])
  


  const isFormValid = useMemo( () => {
    for (const value of Object.keys(formValidation)) {

      if(formValidation[value] !== null) {
        return false;
      }
    }
    // return Object.values(formValidation).every(value => value === null)
    return true;

  }, [formValidation])
  

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  const createValidators = () => {

    const formCheckedValues = {};

    for (const formField of Object.keys(formValiations)) {
      const [fn, errorMessage] = formValiations[formField];
      formCheckedValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMessage;
    
      setFormValidation(formCheckedValues)
    }
 
  }

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
    ...formValidation,
    isFormValid
  };
};
