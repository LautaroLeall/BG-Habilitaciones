import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import "../../styles/Navbar.css";

const logoImage = "sin-fondo.png";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("inicio");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const sections = ["inicio", "servicios", "proceso", "nosotros", "contacto"];
            const current = sections.find((section) => {
                const element = document.getElementById(section);
                if (!element) return false;
                const rect = element.getBoundingClientRect();
                return rect.top >= -100 && rect.top <= 300;
            });

            if (current) setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed w-full z-50 navbar ${scrolled ? "scrolled" : ""}`}
            >
                <div className="container mx-auto px-6 flex justify-between items-center">

                    <div
                        className="flex items-center gap-3 cursor-pointer logo-container"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    >
                        <div className="logo-box flex items-center justify-center overflow-hidden">
                            <img
                                src={logoImage}
                                alt="BG"
                                className="w-full h-full object-contain"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.parentElement.classList.add('fallback');
                                    e.target.parentElement.innerText = 'BG';
                                }}
                            />
                        </div>
                        <div className="logo-text">
                            <span className="block font-bold text-sm tracking-widest">BENJAMIN</span>
                            <span className="block font-light text-xs tracking-widest">GONZALEZ</span>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center gap-10 text-xs font-bold tracking-widest uppercase">
                        {["Inicio", "Servicios", "Proceso", "Nosotros", "Contacto"].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className={`nav-link py-1 ${activeSection === item.toLowerCase() ? "active" : ""}`}
                            >
                                {item}
                                {activeSection === item.toLowerCase() && (
                                    <motion.div layoutId="underline" className="absolute bottom-0 left-0 w-full nav-underline" />
                                )}
                            </a>
                        ))}
                    </div>

                    <button className="md:hidden menu-btn" onClick={toggleMenu}>
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </motion.nav>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "tween" }}
                        className="fixed inset-0 z-40 mobile-menu flex flex-col items-center justify-center gap-8"
                    >
                        {["Inicio", "Servicios", "Proceso", "Nosotros", "Contacto"].map((item, i) => (
                            <motion.a
                                key={item}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                href={`#${item.toLowerCase()}`}
                                className="text-2xl font-light tracking-widest mobile-link"
                                onClick={toggleMenu}
                            >
                                {item.toUpperCase()}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;