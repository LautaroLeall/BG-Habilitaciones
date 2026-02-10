// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import { MapPin } from "lucide-react"

export default function Location() {
    return (
        <section className="py-24 bg-gray-950">
            <div className="max-w-6xl mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                >

                    {/* Texto */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-3">
                            <MapPin />
                            Ubicación
                        </h2>

                        <p className="text-gray-400 mb-4">
                            📍 Corrientes 816
                        </p>

                        <p className="text-gray-400 mb-6">
                            San Miguel de Tucumán
                        </p>

                        <p className="text-gray-500 max-w-md">
                            Atendemos habilitaciones municipales en San Miguel de Tucumán,
                            Yerba Buena y Tafí Viejo.
                        </p>
                    </div>

                    {/* Mapa */}
                    <div className="w-full h-80 rounded-2xl overflow-hidden border border-white/10">
                        <iframe
                            title="Mapa ubicación"
                            src="https://www.google.com/maps?q=Corrientes%20816%20San%20Miguel%20de%20Tucum%C3%A1n&output=embed"
                            className="w-full h-full grayscale"
                            loading="lazy"
                        />
                    </div>

                </motion.div>

            </div>
        </section>
    )
}
