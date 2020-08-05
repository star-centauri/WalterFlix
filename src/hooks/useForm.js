import { useState } from 'react';

function useForm(valuesDefault) {
  const [values, setNewValues] = useState(valuesDefault);

  function setValues(key, value) {
    setNewValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setValues(
      name,
      value,
    );
  }

  function cleanForm() {
    setValues(valuesDefault);
  }

  return {
    values,
    handleChange,
    cleanForm,
  };
}

export default useForm;
