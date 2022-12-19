import React from "react";

function FormStep3({ formData, setFormData }) {
  return (
    <div className="sign-up-container">
      <select
        type="option"
        value={formData.periodo}
        onChange={(event) =>
          setFormData({ ...formData, periodo: event.target.value })
        }
      >
        <option value="1">Escolha uma opção</option>
        <option value="Manhã">Manhã</option>
        <option value="Tarde">Tarde</option>
        <option value="Noite">Noite</option>
      </select>
    </div>
  );
}

export default FormStep3;
