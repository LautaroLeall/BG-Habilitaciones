import { FaWhatsapp } from "react-icons/fa";
import "../../styles/BtnWhatsapp.css";

const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/5493813495974"
            className="whatsapp-btn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
        >
            <FaWhatsapp size={26} className="icon-whatsapp" />
            <span className="ping-animation"></span>
        </a>
    );
};

export default WhatsAppButton;