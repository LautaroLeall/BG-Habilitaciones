// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Phone, Mail, Instagram, User, Linkedin, MapPin } from "lucide-react";
import "../../styles/Contact.css";

const Contact = () => {
    return (
        <section id="contacto" className="py-32 px-6 relative contact-section">

            <div className="absolute inset-0 contact-bg-radial -z-10"></div>

            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="contact-card p-10 md:p-16 text-center relative overflow-hidden rounded-sm"
                >
                    {/* Línea superior decorativa */}
                    <div className="absolute top-0 left-0 w-full h-1 contact-gradient-line"></div>

                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">¿LISTO PARA HABILITAR TU LOCAL?</h2>

                    <p className="text-gray-400 mb-12 max-w-xl mx-auto text-sm uppercase">
                        Iniciemos hoy mismo tu trámite de habilitación municipal.
                    </p>

                    {/* Botones de Acción Principal */}
                    <div className="flex flex-col md:flex-row justify-center gap-6">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="https://wa.me/543813495974"
                            target="_blank"
                            className="btn-contact-primary px-10 py-5 font-bold flex items-center justify-center gap-3 text-sm tracking-widest uppercase cursor-pointer no-underline"
                        >
                            <Phone size={18} /> HABLEMOS AHORA
                        </motion.a>

                        <motion.a
                            whileTap={{ scale: 0.95 }}
                            href="mailto:gychabilitaciones@gmail.com"
                            target="_blank"
                            className="btn-contact-secondary px-10 py-5 font-bold flex items-center justify-center gap-3 text-sm tracking-widest uppercase cursor-pointer no-underline"
                        >
                            <Mail size={18} /> DEJA TU MENSAJE
                        </motion.a>
                    </div>

                    <div className="md:text-center flex flex-col items-center md:items-center mt-10">
                        <a
                            href="https://maps.app.goo.gl/t5cW4ac5QK65h1H3A"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 hover:text-white transition-colors w-fit text-sm"
                        >
                            <div className="p-5 rounded-full bg-white/5 flex items-center gap-2 link-location">
                                <MapPin size={18} className="text-white md:text-sm md:w-fit" />
                                <span>Corrientes 816, San Miguel de Tucumán</span>
                            </div>
                        </a>
                    </div>

                    {/* Información de Contacto y Redes */}
                    <div className="mt-10 pt-10 border-t border-white/10 text-s text-gray-400">
                        {/* Columna: Redes Sociales */}
                        <div className="space-y-4 md:text-center flex flex-col items-center md:items-center">
                            <a
                                href="https://www.instagram.com/_joven_emprendedor?igsh=aXhyem9kMXBxMm5h"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 hover:text-white transition-colors w-fit">
                                <User size={18} /> @_joven_emprendedor
                            </a>
                            <a
                                href="https://www.instagram.com/bg.habilitaciones?igsh=MTYzNGhlMjdwam56MA=="
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 hover:text-white transition-colors w-fit">
                                <Instagram size={18} /> @bg.habilitaciones
                            </a>
                            <a
                                href="https://www.linkedin.com/in/benjamingonzalez-?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 hover:text-white transition-colors w-fit">
                                <Linkedin size={18} /> Benjamín Gonzalez
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;