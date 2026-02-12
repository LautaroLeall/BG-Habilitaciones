import { Mail, Instagram, Github, Linkedin } from "lucide-react";
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
                            <span className="text-gray-500 font-light">GESTIÓN</span>
                        </div>
                        <span className="divider hidden sm:block">|</span>
                        <p className="copyright">
                            © {currentYear} Todos los derechos reservados.
                        </p>
                    </div>

                    {/* DERECHA: REDES SOCIALES (Benjamín) */}
                    <div className="footer-links">
                        <a
                            href="mailto:gychabilitaciones@gmail.com"
                            className="footer-link-item"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Mail size={16} />
                            <span>Email</span>
                        </a>

                        <a
                            href="https://www.instagram.com/bg.habilitaciones"
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
                        <a href="https://github.com/LautaroLeall" target="_blank" rel="noreferrer" className="dev-icon">
                            <Github size={14} />
                        </a>
                        <a href="https://www.linkedin.com/in/lauldp/" target="_blank" rel="noreferrer" className="dev-icon">
                            <Linkedin size={14} />
                        </a>
                    </div>

                    {/* Crédito */}
                    <div className="dev-credit">
                        <span className="text-gray-600">Desarrollado por</span>
                        <a
                            href="https://wa.me/5493813399463"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="dev-name"
                        >
                            Lautaro Leal
                        </a>
                    </div>

                </div>
            </div>
        </footer>
    );
}