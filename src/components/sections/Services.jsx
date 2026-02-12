// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FileText, Shield, BookOpen, Check, ChevronRight } from "lucide-react";
import "../../styles/Services.css";

const services = [
    {
        title: "Empadronamiento",
        description: "Inscribimos tu local para iniciar el trámite de habilitación municipal.",
        icon: <FileText className="w-8 h-8" />
    },
    {
        title: "Habilitación Municipal",
        description: "Gestionamos la habilitación, requisito obligatorio para que tu local pueda vender legalmente.",
        icon: <Shield className="w-8 h-8" />
    },
    {
        title: "Libro de Actas",
        description: "Realizamos la gestión y actualización del libro de actas conforme a la normativa vigente.",
        icon: <BookOpen className="w-8 h-8" />
    },
    {
        title: "Asesoramiento Permanente",
        description: "Acompañamiento de principio a fin para que tengas tranquilidad y seguridad en todo el proceso.",
        icon: <Check className="w-8 h-8" />
    }
];

const Services = () => {
    return (
        <section id="servicios" className="py-24 px-6 services-section">
            <div className="container mx-auto">

                {/* Encabezado de Sección */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row justify-between items-end mb-15"
                >
                    <div>
                        <span className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase block mb-4">Propuesta Integral</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white uppercase">Nuestros Servicios</h2>
                    </div>
                    <div className="mt-6 md:mt-0 text-right">
                        <p className="text-gray-500 text-xs max-w-xs ml-auto uppercase">Soluciones divididas en 4 partes esenciales.</p>
                    </div>
                </motion.div>

                {/* Grilla de Servicios */}
                <div className="grid md:grid-cols-2 gap-9">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="service-card p-8 lg:p-10 rounded-sm flex flex-col group cursor-default"
                        >
                            {/* Icono */}
                            <div className="mb-8 w-fit p-4 rounded-sm service-icon-box">
                                {service.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>

                            <p className="text-gray-400 text-base leading-relaxed mb-8">
                                {service.description}
                            </p>

                            {/* Link "Más información" */}
                            <div className="flex items-center gap-2 text-xs font-bold text-gray-600 group-hover:text-white transition-colors uppercase tracking-widest mt-auto border-t border-white/5 pt-6 cursor-pointer">
                                <a href="https://wa.me/543813495974" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                                    Más información <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;