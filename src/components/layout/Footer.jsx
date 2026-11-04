import { Mail, Instagram, Github, Linkedin } from "lucide-react";
import { CONTACT_INFO, DEVELOPER_INFO } from "../../constants/siteData";
import "../../styles/Footer.css";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container mx-auto">

                {/* --- SECCIÓN SUPERIOR: MARCA + REDES --- */}
                <div className="footer-content">

                    {/* IZQUIERDA: LOGO + COPYRIGHT */}
                    <div className="footer-brand">
                        <div className="footer-logo-text">
                            <span className="font-bold text-white">BG</span>
                            <span className="text-gray-400 font-light">GESTIÓN</span>
                        </div>
                        <span className="divider hidden sm:block">|</span>
                        <p className="copyright">
                            © {currentYear} Todos los derechos reservados.
                        </p>
                    </div>

                    {/* DERECHA: REDES SOCIALES (Benjamín) */}
                    <div className="footer-links">
                        <a
                            href={CONTACT_INFO.emailUrl}
                            className="footer-link-item"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Mail size={16} />
                            <span>Email</span>
                        </a>

                        <a
                            href={CONTACT_INFO.instagramBusiness.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-link-item"
                        >
                            <Instagram size={16} />
                            <span>Instagram</span>
                        </a>
                    </div>

                </div>

                {/* --- SECCIÓN INFERIOR: DESARROLLADOR --- */}
                <div className="footer-dev-section">

                    {/* Redes del Desarrollador */}
                    <div className="dev-socials">
                        <a
                            href={DEVELOPER_INFO.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="dev-icon"
                            aria-label={`GitHub del desarrollador ${DEVELOPER_INFO.name}`}
                        >
                            <Github size={14} />
                        </a>
                        <a
                            href={DEVELOPER_INFO.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="dev-icon"
                            aria-label={`LinkedIn del desarrollador ${DEVELOPER_INFO.name}`}
                        >
                            <Linkedin size={14} />
                        </a>
                    </div>

                    {/* Crédito */}
                    <div className="dev-credit">
                        <span className="text-gray-400">Desarrollado por</span>
                        <a
                            href={DEVELOPER_INFO.whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="dev-name"
                        >
                            {DEVELOPER_INFO.name}
                        </a>
                    </div>

                </div>
            </div>
        </footer>
    );
}
