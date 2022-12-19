import "./styles.css";
import React, { useState } from "react";
import FormStep1 from "./FormStep1";
import FormStep2 from "./FormStep2";
import FormStep3 from "./FormStep3";
import FormStep4 from "./FormStep4";
import FormStep5 from "./FormStep5";
import FormStepFinal from "./FormStepFinal";
import { FormTable } from "./FormTableCronograma";

function Form() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const [page, setPage] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    horas: "",
    periodo: "",
    dias: "",
    email: "",
    tel: "",
  });

  const FormTitles = [
    "Preencha os dados abaixo:",
    "Preencha os dados abaixo:",
    "Preencha os dados abaixo:",
    "Preencha os dados abaixo:",
    "Preencha os dados abaixo:",
    "Confirme seus dados antes do envio",
  ];

  const SubTitles = [
    "Qual é o seu nome?",
    "Quantas horas você tem para estudar por dia?",
    "Você prefere estudar em qual parte do dia?",
    "Você quer estudar quantos dias por semana? ",
    "Para continuar, nos informe um telefone válido",
    "Por último, um email válido",
  ];

  const pageDisplay = () => {
    switch (page) {
      case 0:
        return <FormStep1 formData={formData} setFormData={setFormData} />;
      case 1:
        return <FormStep2 formData={formData} setFormData={setFormData} />;
      case 2:
        return <FormStep3 formData={formData} setFormData={setFormData} />;
      case 3:
        return <FormStep4 formData={formData} setFormData={setFormData} />;
      case 4:
        return <FormStep5 formData={formData} setFormData={setFormData} />;
      case 5:
        return <FormStepFinal formData={formData} setFormData={setFormData} />;
    }
  };

  function validarData() {
    if (page === 0) {
      return !formData.name;
    }
    if (page === 4) {
      return !formData.tel;
    }
    if (page === 5) {
      return !formData.email;
    }
  }

  return (
    <div className="form">
      <div className="form-container">
        <div className="header">
          <h1 className="h1-form">{FormTitles[page]}</h1>
          <h3 className="h3-form">{SubTitles[page]}</h3>
        </div>
        <div className="body">{pageDisplay()}</div>
        <div className="footer">
          <button
            className="button-form"
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Anterior
          </button>
          <button
            disabled={validarData()}
            type="submit"
            className="button-form"
            onClick={() => {
              if (page === FormTitles.length - 1) {
                setIsOpenModal(true);
                console.log(formData);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Enviar" : "Próximo"}
          </button>
          <FormTable
            isOpenModal={isOpenModal}
            onCloseModal={setIsOpenModal}
            formData={formData}
          />
        </div>
      </div>
    </div>
  );
}
export { Form };
