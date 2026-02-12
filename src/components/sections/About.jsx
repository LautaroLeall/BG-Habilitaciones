// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { User, Clock, Phone, FileCheck, Shield } from "lucide-react";
import "../../styles/About.css";

const profileImage = "benjamin-gonzalez.png";

const reasons = [
    {
        icon: <User size={20} />,
        text: "Atención personalizada"
    },
    {
        icon: <Clock size={20} />,
        text: "Seguimiento constante del trámite"
    },
    {
        icon: <Phone size={20} />,
        text: "Comunicación directa por WhatsApp"
    },
    {
        icon: <FileCheck size={20} />,
        text: "Experiencia en normativa municipal"
    },
    {
        icon: <Shield size={20} />,
        text: "Acompañamiento hasta la habilitación final"
    },
];

const About = () => {
    return (
        <section id="nosotros" className="py-20 px-6 about-section">

            <div className="container mx-auto grid lg:grid-cols-2 gap-20 items-center">

                {/* COLUMNA IZQUIERDA (IMAGEN) */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    {/* Contenedor de la imagen con efecto de rotación */}
                    <div className="relative p-3 about-image-frame group">
                        {/* Efecto de luz de fondo */}
                        <div className="absolute -inset-1 about-glow-bg -z-10"></div>

                        <img
                            src={profileImage}
                            alt="Benjamin Gonzalez Araoz"
                            className="w-full h-auto about-img"
                        />
                    </div>

                    {/* Etiqueta flotante con nombre (visible en desktop) */}
                    <div className="absolute -bottom-6 -right-6 bg-white text-black px-8 py-4 shadow-xl hidden md:block z-20">
                        <span className="font-bold text-lg tracking-wide">BENJAMÍN GONZÁLEZ ARAOZ</span>
                    </div>
                </motion.div>

                {/* COLUMNA DERECHA (TEXTO) */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase block mb-4">¿Quién Soy?</span>

                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight uppercase">
                        Gestor Especializado en Habilitación Municipal.
                    </h2>

                    {/* Biografía */}
                    <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                        <p>
                            Con experiencia en trámites y normativa vigente, acompaño a contribuyentes y comerciantes para que puedan abrir su negocio de forma <strong className="text-white">legal, rápida y sin complicaciones</strong>.
                        </p>
                        <p>
                            Mi trabajo se respalda con una formación universitaria en la <strong className="text-white">Licenciatura en Comercio Internacional</strong>, actualmente cursando el último año de la carrera.
                        </p>
                    </div>

                    {/* Lista de Razones */}
                    <div className="mt-10 p-8 rounded-sm reason-list">
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest border-b border-white/10 pb-4">Por qué elegir este servicio</h4>

                        <ul className="grid gap-4">
                            {reasons.map((reason, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-gray-400 text-sm">
                                    <div className="text-white">{reason.icon}</div>
                                    {reason.text}
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;