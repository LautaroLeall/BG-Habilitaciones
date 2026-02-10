// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import {
    FileText,
    Building2,
    ClipboardCheck,
    ShieldCheck,
    FileSearch,
    Headset
} from "lucide-react"

const services = [
    {
        icon: FileText,
        title: "Empadronamiento",
        description: "TEM · THYS · PYP y documentación inicial del local."
    },
    {
        icon: Building2,
        title: "Habilitación municipal",
        description: "Gestión completa del trámite ante el municipio."
    },
    {
        icon: ClipboardCheck,
        title: "Expediente técnico",
        description: "Armado y presentación del expediente correspondiente."
    },
    {
        icon: FileSearch,
        title: "DIM y Subdirección",
        description: "Requisitos específicos según rubro y normativa."
    },
    {
        icon: ShieldCheck,
        title: "Inspecciones",
        description: "Coordinación y acompañamiento hasta la aprobación."
    },
    {
        icon: Headset,
        title: "Asesoramiento permanente",
        description: "Acompañamiento durante todo el proceso."
    }
]

export default function Services() {
    return (
        <section id="servicios" className="py-24 bg-black">
            <div className="max-w-7xl mx-auto px-6">

                {/* Título */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold">
                        ¿Qué hacemos?
                    </h2>
                    <p className="mt-4 text-gray-400">
                        Nos ocupamos de todo el proceso de habilitación de tu local.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon
                        return (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="p-8 rounded-2xl bg-gray-900 border border-white/10 hover:border-white/20 transition"
                            >
                                <Icon className="mb-6 text-white" size={32} />

                                <h3 className="text-xl font-semibold mb-3">
                                    {service.title}
                                </h3>

                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </motion.div>
                        )
                    })}
                </div>

            </div>
        </section>
    )
}
