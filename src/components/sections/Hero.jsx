// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Texto */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        Habilitación Municipal
                        <br />
                        de Locales Comerciales
                    </h1>

                    <p className="text-gray-300 max-w-xl">
                        San Miguel de Tucumán · Yerba Buena · Tafí Viejo
                    </p>

                    <p className="text-gray-400 max-w-xl">
                        Nos encargamos de todo el proceso para que tu negocio
                        funcione en regla, sin multas ni complicaciones.
                    </p>

                    <div className="flex gap-4 pt-4">
                        <button className="px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition">
                            Iniciar habilitación
                        </button>

                        <button className="px-6 py-3 rounded-full border border-white hover:bg-white hover:text-black transition">
                            Consulta sin compromiso
                        </button>
                    </div>
                </motion.div>

                {/* Imagen */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex justify-center md:justify-end"
                >
                    <div className="w-72 h-96 md:w-80 md:h-96 rounded-2xl bg-gray-800 flex items-center justify-center text-gray-500">
                        Imagen Benjamín
                    </div>
                </motion.div>

            </div>
        </section>
    )
}
