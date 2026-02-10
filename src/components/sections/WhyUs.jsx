// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

const reasons = [
    "Atención personalizada en todo el proceso",
    "Experiencia en habilitaciones municipales",
    "Gestión integral de principio a fin",
    "Evitá multas, sanciones y clausuras"
]

export default function WhyUs() {
    return (
        <section className="py-24 bg-black">
            <div className="max-w-6xl mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="rounded-3xl border border-white/10 bg-gradient-to-br from-gray-900 to-black p-12 md:p-16"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                        {/* Texto */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Evitá sanciones y clausuras
                            </h2>

                            <p className="text-gray-400 mb-8 max-w-xl">
                                Abrí tu local y trabajá tranquilo. Nosotros nos ocupamos
                                de que cumplas con todos los requisitos municipales.
                            </p>

                            <ul className="space-y-4">
                                {reasons.map((reason, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center gap-3"
                                    >
                                        <CheckCircle size={20} />
                                        <span className="text-gray-300">{reason}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        {/* CTA */}
                        <div className="flex justify-center md:justify-end">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition"
                            >
                                Hablar ahora
                            </motion.button>
                        </div>

                    </div>
                </motion.div>

            </div>
        </section>
    )
}
