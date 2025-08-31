import { useRef } from "react";
import { X, AtSign, Linkedin, SquareArrowOutUpRight, MessageCircle } from "lucide-react";
import { contacts } from "../../Configs/Params";
import Button from "../General/Button";
import { Whatsapp } from "iconsax-react";
import PropTypes from "prop-types";
import posthog from "posthog-js";

const ModalContact = ({ text, data }) => {
    const modalRef = useRef();

    const openModal = () => modalRef.current?.showModal();
    const closeModal = () => modalRef.current?.close();

    function redirect(nameSocial) {
        posthog.capture('contacts_open', {
            socialName: nameSocial
        })
    }

    return (
        <>
            <Button onClick={openModal} className="button-contact" >
                <span>{text}</span>
                <MessageCircle size="20" color="#FFF" />
            </Button>

            <dialog ref={modalRef} className="modal-container">
                <div className="modal-container_header">
                    <h3>{text}</h3>
                    <X size="20" color="#000" onClick={closeModal} />
                </div>
                <div className="modal-container_body">
                    <div className="contacts">
                        <p>{data.modalMessage}</p>
                        <div className="contacts_item">
                            <AtSign size="30" />
                            <a
                                onClick={() => redirect('email')}
                                href={`mailto:${contacts.email}`}
                            >
                                {contacts.email}
                                <SquareArrowOutUpRight size={15} />
                            </a>
                        </div>
                        <div className="contacts_item">
                            <Whatsapp size="30" />
                            <a
                                onClick={() => redirect('whatsapp')}
                                href={`https://api.whatsapp.com/send?phone=5581996126534&text=Ol%C3%A1,%20estou%20vindo%20do%20seu%20site!%20Podemos%20conversar?`}
                            >
                                {contacts.phone}
                                <SquareArrowOutUpRight size={15} />
                            </a>
                        </div>
                        <div className="contacts_item">
                            <Linkedin size="30" />
                            <a
                                onClick={() => redirect('linkedin')}
                                href={`https://www.linkedin.com/${contacts.linkedin}-a376b0177/`}
                            >
                                {contacts.linkedin}
                                <SquareArrowOutUpRight size={15} />
                            </a>
                        </div>
                    </div>
                </div>
            </dialog>
        </>
    );
};

ModalContact.propTypes = {
    text: PropTypes.string.isRequired,
    data: PropTypes.shape({
        modalMessage: PropTypes.string
    }).isRequired
};

export default ModalContact;