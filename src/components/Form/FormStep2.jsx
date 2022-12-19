import React from "react";

function FormStep2({ formData, setFormData }) {
  return (
    <div className="sign-up-container">
      <select
        type="option"
        value={formData.horas}
        onChange={(event) =>
          setFormData({ ...formData, horas: event.target.value })
        }
      >
        <option value="1">Escolha uma opção</option>
        <option value="2">2 horas por dia</option>
        <option value="3">3 horas por dia</option>
        <option value="4">4 horas por dia</option>
        <option value="5">5 horas por dia</option>
      </select>
    </div>
  );
}

export default FormStep2;
