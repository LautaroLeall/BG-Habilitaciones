// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

const steps = [
    {
        number: "01",
        title: "Análisis del local",
        description: "Revisión inicial del rubro, ubicación y condiciones del local."
    },
    {
        number: "02",
        title: "Documentación",
        description: "Recolección y control de la documentación necesaria."
    },
    {
        number: "03",
        title: "Expediente técnico",
        description: "Armado y presentación del expediente ante el municipio."
    },
    {
        number: "04",
        title: "Inspecciones",
        description: "Coordinación y acompañamiento durante las inspecciones."
    },
    {
        number: "05",
        title: "Habilitación final",
        description: "Aprobación final para que tu local funcione en regla."
    }
]

export default function Process() {
    return (
        <section id="proceso" className="py-24 bg-gray-950">
            <div className="max-w-5xl mx-auto px-6">

                {/* Título */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Cómo trabajamos
                    </h2>
                    <p className="mt-4 text-gray-400">
                        Un proceso claro, ordenado y sin complicaciones.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative border-l border-white/20 pl-8 space-y-12">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative"
                        >
                            {/* Punto */}
                            <span className="absolute -left-10 top-1 w-4 h-4 rounded-full bg-white" />

                            <div className="space-y-2">
                                <span className="text-sm text-gray-400">
                                    {step.number}
                                </span>
                                <h3 className="text-xl font-semibold">
                                    {step.title}
                                </h3>
                                <p className="text-gray-400 max-w-xl">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}
