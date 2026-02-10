// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import { Phone, Mail, Instagram } from "lucide-react"

export default function Contact() {
    return (
        <section id="contacto" className="py-24 bg-black">
            <div className="max-w-5xl mx-auto px-6 text-center">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8"
                >
                    <h2 className="text-3xl md:text-4xl font-bold">
                        ¿Tenés un local o estás por abrir uno?
                    </h2>

                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Evitá problemas, multas y clausuras.
                        Escribinos y arrancamos hoy mismo tu habilitación municipal.
                    </p>

                    {/* Datos */}
                    <div className="flex flex-col md:flex-row justify-center gap-6 text-gray-300">
                        <div className="flex items-center gap-3 justify-center">
                            <Phone size={18} />
                            <span>381 349 5974</span>
                        </div>

                        <div className="flex items-center gap-3 justify-center">
                            <Mail size={18} />
                            <span>gychabilitaciones@gmail.com</span>
                        </div>

                        <div className="flex items-center gap-3 justify-center">
                            <Instagram size={18} />
                            <span>@_benjaagonzalez_</span>
                        </div>
                    </div>

                    {/* CTA */}
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        href="https://wa.me/543813495974"
                        target="_blank"
                        className="inline-block px-10 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition"
                    >
                        Iniciar habilitación
                    </motion.a>

                </motion.div>

            </div>
        </section>
    )
}
