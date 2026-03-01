// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "../../styles/Process.css";

// Servicios 
const steps = [
    {
        num: "01",
        title: "Empadronamiento",
        desc: "Inscripción del local en la Subdirección de Habilitación de Negocios."
    },
    {
        num: "02",
        title: "Habilitación",
        desc: "Se reúnen y presentan los requisitos necesarios para iniciar el trámite."
    },
    {
        num: "03",
        title: "Inspección",
        desc: "Inspectores municipales verifican el cumplimiento de las condiciones del local."
    },
    {
        num: "04",
        title: "Resolución",
        desc: "Aprobado el proceso, se emite y retira la habilitación municipal."
    },
    {
        num: "05",
        title: "Libro de Actas",
        desc: "Se gestiona la rubricación del nuevo libro conforme a la habilitación."
    }
];

const Process = () => {
    return (
        <section id="proceso" className="py-24 px-6 relative overflow-hidden process-section">

            {/* Línea decorativa superior */}
            <div className="absolute top-0 right-0 w-full h-px process-divider-top"></div>

            <div className="container mx-auto">

                {/* Encabezado */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-3xl font-bold text-white mb-4 uppercase">Proceso de Trabajo</h2>
                    <p className="text-gray-500 max-w-2sxl mx-auto text-sm uppercase">Ordenado, Transparente y Seguro.</p>
                </motion.div>

                {/* Grilla de Pasos */}
                <div className="grid md:grid-cols-5 gap-4 relative">

                    {/* Línea conectora (solo desktop) */}
                    <div className="hidden md:block absolute top-10 left-0 w-full h-px process-connector-line"></div>

                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15 }}
                            className="process-card group relative z-10 pt-4 text-center md:text-left"
                        >
                            {/* Número del paso */}
                            <div className="process-step-number w-12 h-12 flex items-center justify-center text-white font-bold mb-6 mx-auto md:mx-0 shadow-lg">
                                {step.num}
                            </div>

                            <h3 className="text-lg font-bold text-white mb-3 uppercase">{step.title}</h3>

                            <p className="text-gray-500 text-m leading-relaxed group-hover:text-gray-300 transition-colors px-2 md:px-0">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;