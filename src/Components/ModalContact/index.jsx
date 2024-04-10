import React, { useRef } from "react";
import Button from "../General/Button";
import { ChevronRight, X, AtSign, Phone, Linkedin, Github } from "lucide-react";
import Title from "../General/Title";
import { contacts } from "../../configs/Params";

const ModalContact = ({ text, data }) => {
  const modalRef = useRef();

  const openModal = () => modalRef.current?.showModal();
  const closeModal = () => modalRef.current?.close();

  return (
    <>
      <Button onClick={openModal}>
        <span>{text}</span>
        <ChevronRight size="20" color="#FFF" />
      </Button>

      <dialog ref={modalRef} className="modal-container">
        <div className="modal-container_header">
          <Title type="h3">{text}</Title>
          <X size="20" color="#000" onClick={closeModal} />
        </div>
        <div className="modal-container_body">
          <div className="contacts">
            <p>{data.modalMessage}</p>
            <div className="contacts_item">
              <AtSign size="25" color="#F14040" />
              <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
            </div>
            <div className="contacts_item">
              <Phone size="25" color="#F14040" />
              <a
                href={`https://api.whatsapp.com/send?phone=5581996126534&text=Ol%C3%A1,%20estou%20vindo%20do%20seu%20site!%20Podemos%20conversar?`}
              >
                {contacts.phone}
              </a>
            </div>
            <div className="contacts_item">
              <Linkedin size="25" color="#F14040" />
              <a
                href={`https://www.linkedin.com/${contacts.linkedin}-a376b0177/`}
              >
                {contacts.linkedin}
              </a>
            </div>
            <div className="contacts_item">
              <Github size="25" color="#F14040" />
              <a href={`https://github.com/${contacts.github}`}>
                {contacts.github}
              </a>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default ModalContact;
