import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import "./style.css";
import api from "../../services/api";

export interface ObjectClass {
  avatar: string;
  bio: string;
  cost: number;
  id: number;
  name: string;
  subject: string;
  user_id: number;
  whatsapp: string;
}

interface TeacherItemProps {
  objectClass: ObjectClass;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ objectClass }) => {
  function addNewConnection() {
    api.post("connections", {
      user_id: objectClass.id,
    });
  }

  return (
    <article className="teacher-item">
      <header>
        <img src={objectClass.avatar} alt={objectClass.name} />
        <div>
          <strong>{objectClass.name}</strong>
          <span>{objectClass.subject}</span>
        </div>
      </header>

      <p>{objectClass.bio}</p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$ {objectClass.cost}</strong>
        </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://wa.me/${objectClass.whatsapp}`}
          onClick={addNewConnection}
        >
          <img src={whatsappIcon} alt="whatsapp" />
          Entre em contato
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
