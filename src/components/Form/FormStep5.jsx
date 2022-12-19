import React from "react";
import ReactInputMask from "react-input-mask";

function FormStep5({ formData, setFormData }) {
  return (
    <div className="personal-info-container">
      <ReactInputMask
        mask="(99) 99999-9999"
        type="tel"
        placeholder="Digite seu telefone com ddd..."
        value={formData.tel}
        onChange={(event) =>
          setFormData({ ...formData, tel: event.target.value })
        }
      />
    </div>
  );
}

export default FormStep5;
