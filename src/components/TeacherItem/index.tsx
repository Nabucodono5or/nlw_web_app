import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import "./style.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars3.githubusercontent.com/u/12628751?s=400&u=32d834a83ea49941b5721ea74df36b5fa3adb051&v=4"
          alt="Jefferson Abreu"
        />
        <div>
          <strong>Jefferson Abreu</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de química avançada.
        <br />
        <br />
        Apaixonado por explodir coisas em laboratório e por mudar a vida das
        pessoas através de experiências. Mais de 200.000 pessoas já passaram por
        uma das minhas explosões.
      </p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$ 90,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp" />
          Entre em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
