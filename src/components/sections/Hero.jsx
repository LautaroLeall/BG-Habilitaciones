// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import "../../styles/Hero.css";

const logoImage = "logo-sinfondo.png";

const Hero = () => {
    return (
        <section id="inicio" className="pt-25 pb-20 px-6 min-h-screen flex items-center justify-center overflow-hidden hero-section">

            <div className="absolute inset-0 hero-bg-gradient z-0"></div>
            <div className="absolute inset-0 hero-pattern z-0"></div>

            <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">

                {/* COLUMNA IZQUIERDA (TEXTO) */}
                <div className="z-10 text-left">

                    {/* Tag de Ubicación */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 hero-tag"
                    >
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-red"></span>
                        <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">San Miguel de Tucumán y Yerba Buena</span>
                    </motion.div>

                    {/* Título Principal */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight"
                    >
                        TU LOCAL. <br />
                        TU HABILITACIÓN. <br />
                        <span className="text-gradient">NUESTRO COMPROMISO.</span>
                    </motion.h1>

                    {/* Subtítulo */}
                    <motion.p
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-xl mb-10 max-w-lg leading-relaxed font-light border-l-2 border-red-500 pl-4 hero-subtitle"
                    >
                        El trámite obligatorio para evitar <br />
                        <strong className="text-gradient">MULTAS, SANCIONES Y CLAUSURAS</strong>.
                    </motion.p>

                    {/* Botones CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-5"
                    >
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="https://wa.me/+5493813495974"
                            target="_blank"
                            className="btn-primary px-8 py-4 font-bold text-sm tracking-wider flex items-center justify-center gap-3 rounded-sm cursor-pointer no-underline"
                        >
                            EMPEZAR <ArrowRight className="w-4 h-4" />
                        </motion.a>

                        <motion.a
                            whileTap={{ scale: 0.95 }}
                            href="#servicios"
                            className="btn-secondary px-8 py-4 font-bold text-sm tracking-wider rounded-sm flex items-center justify-center cursor-pointer no-underline"
                        >
                            VER SERVICIOS
                        </motion.a>
                    </motion.div>
                </div>

                {/* COLUMNA DERECHA (LOGO FLOTANTE) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="relative flex justify-center lg:justify-center"
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hero-glow"></div>

                    {/* Animación infinita */}
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                        className="relative w-72 h-72 md:w-96 md:h-96 z-10"
                    >
                        <img
                            src={logoImage}
                            alt="Benjamin Gonzalez Logo"
                            className="w-full h-full object-contain filter drop-shadow-2xl"
                            onError={(e) => { e.target.style.display = 'none'; }}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;