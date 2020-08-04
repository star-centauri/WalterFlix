import { useState } from 'react';

function useForm(valuesDefault) {
  const [newCategoria, setNewCategoria] = useState(valuesDefault);

  function setValues(key, value) {
    setNewCategoria({
      ...newCategoria,
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
    newCategoria,
    handleChange,
    cleanForm,
  };
}

export default useForm;
