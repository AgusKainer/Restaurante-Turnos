import { useState } from "react";

const useFormHook = (formInitial = {}) => {
  const [form, setForm] = useState(formInitial);

  const onChange = ({ target }) => {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  return {
    form,
    onChange,
  };
};

export default useFormHook;
