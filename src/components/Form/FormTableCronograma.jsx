import React from "react";
import Modal from "react-modal";
import "./styles.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    fontFamily: "AprovaSans",
    borderRadius: "20px",
  },
};

const h2Modal = {
  textAlign: "center",
};

function FormTable({ isOpenModal, onCloseModal, formData }) {
  console.log(formData);
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#000000";
  }

  function closeModal() {
    onCloseModal(false);
  }

  function renderManha() {
    return manha.slice(0, formData.horas).map((hora) => {
      return (
        <tr>
          <td>{hora}</td>
          {materias
            .sort(() => Math.random() - 0.6)
            .slice(0, formData.dias)
            .map((materia) => {
              return <td>{materia}</td>;
            })}
        </tr>
      );
    });
  }

  function renderTarde() {
    return tarde.slice(0, formData.horas).map((hora) => {
      return (
        <tr>
          <td>{hora}</td>
          {materias
            .sort(() => Math.random() - 0.6)
            .slice(0, formData.dias)
            .map((materia) => {
              return <td>{materia}</td>;
            })}
        </tr>
      );
    });
  }

  function renderNoite() {
    return noite.slice(0, formData.horas).map((hora) => {
      return (
        <tr>
          <td>{hora}</td>
          {materias
            .sort(() => Math.random() - 0.6)
            .slice(0, formData.dias)
            .map((materia) => {
              return <td>{materia}</td>;
            })}
        </tr>
      );
    });
  }

  const dias = [
    "Primeiro Dia",
    "Segundo Dia",
    "Terceiro Dia",
    "Quarto Dia",
    "Quinto Dia",
  ];

  const manha = [
    "07:00 - 08:00",
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
  ];

  const tarde = [
    "13:00 - 14:00",
    "14:00 - 15:00",
    "15:00 - 16:00",
    "16:00 - 17:00",
    "17:00 - 18:00",
  ];

  const noite = [
    "18:00 - 19:00",
    "19:00 - 20:00",
    "20:00 - 21:00",
    "21:00 - 22:00",
    "22:00 - 23:00",
  ];

  const materias = [
    "Ciências Humanas",
    "Linguagens",
    "Matemática",
    "Ciências da Natureza",
    "Redação",
  ];

  return (
    <div className="div-modal">
      <Modal
        isOpen={isOpenModal}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal Cronograma"
      >
        <h2 style={h2Modal} ref={(_subtitle) => (subtitle = _subtitle)}>
          Cronograma de Estudos Perfeito
        </h2>
        <div className="div-tabela"></div>
        <table>
          <thead>
            <tr>
              <th>Período: {formData.periodo}</th>
              {dias.slice(0, formData.dias).map((dia) => {
                return <th>{dia}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {formData.periodo === "Manhã" && renderManha()}
            {formData.periodo === "Tarde" && renderTarde()}
            {formData.periodo === "Noite" && renderNoite()}
          </tbody>
        </table>
        <button className="button-tabela">
          <a className="a-button">Download</a>
        </button>
        <button className="button-tabela">
          <a className="a-button">Via email</a>
        </button>
        <button onClick={closeModal} className="button-tabela">
          <a className="a-button">Fechar</a>
        </button>
      </Modal>
    </div>
  );
}

export { FormTable };
