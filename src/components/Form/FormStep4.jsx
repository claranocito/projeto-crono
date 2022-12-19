import React from "react";

function FormStep4({ formData, setFormData }) {
  return (
    <div className="sign-up-container">
      <select
        type="option"
        placeholder="Quantidade de horas entre 2 e 5"
        value={formData.dias}
        onChange={(event) =>
          setFormData({ ...formData, dias: event.target.value })
        }
      >
        <option value="1">Escolha uma opção</option>
        <option value="2">2 dias por semana</option>
        <option value="3">3 dias por semana</option>
        <option value="4">4 dias por semana</option>
        <option value="5">5 dias por semana</option>
      </select>
    </div>
  );
}

export default FormStep4;
