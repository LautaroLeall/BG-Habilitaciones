import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_ITEMS } from "../../constants/siteData";
import "../../styles/Navbar.css";

const logoImage = "/logo-sinfondo.png";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("inicio");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const current = NAV_ITEMS.find(({ id }) => {
                const element = document.getElementById(id);
                if (!element) return false;
                const rect = element.getBoundingClientRect();
                return rect.top >= -100 && rect.top <= 300;
            });

            if (current) setActiveSection(current.id);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);

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
                                alt="Logo BG Habilitaciones"
                                width={32}
                                height={32}
                                className="w-full h-full object-contain"
                                onError={(e) => {
                                    e.target.style.display = "none";
                                    e.target.parentElement.classList.add("fallback");
                                    e.target.parentElement.innerText = "BG";
                                }}
                            />
                        </div>
                        <div className="logo-text">
                            <span className="block font-bold text-sm tracking-widest">BENJAMIN</span>
                            <span className="block font-light text-xs tracking-widest">GONZALEZ</span>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center gap-10 text-xs font-bold tracking-widest uppercase">
                        {NAV_ITEMS.map(({ label, id }) => (
                            <a
                                key={id}
                                href={`#${id}`}
                                className={`nav-link py-1 ${activeSection === id ? "active" : ""}`}
                            >
                                {label}
                                {activeSection === id && (
                                    <motion.div layoutId="underline" className="absolute bottom-0 left-0 w-full nav-underline" />
                                )}
                            </a>
                        ))}
                    </div>

                    <button
                        type="button"
                        className="md:hidden menu-btn"
                        onClick={toggleMenu}
                        aria-label={isMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
                        aria-expanded={isMenuOpen}
                    >
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
                        {NAV_ITEMS.map(({ label, id }, i) => (
                            <motion.a
                                key={id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                href={`#${id}`}
                                className="text-2xl font-light tracking-widest mobile-link"
                                onClick={toggleMenu}
                            >
                                {label.toUpperCase()}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
