// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <div className="text-xl font-semibold tracking-wide">
                    BG
                </div>

                {/* Desktop menu */}
                <nav className="hidden md:flex items-center gap-8 text-sm">
                    <a href="#servicios" className="hover:text-gray-300 transition">
                        Servicios
                    </a>
                    <a href="#proceso" className="hover:text-gray-300 transition">
                        Proceso
                    </a>
                    <a href="#contacto" className="hover:text-gray-300 transition">
                        Contacto
                    </a>

                    <button className="ml-4 px-5 py-2 border border-white rounded-full hover:bg-white hover:text-black transition">
                        Iniciar habilitación
                    </button>
                </nav>

                {/* Mobile button */}
                <button
                    className="md:hidden"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile menu */}
            {open && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="md:hidden bg-black border-t border-white/10"
                >
                    <nav className="flex flex-col px-6 py-6 gap-4 text-sm">
                        <a href="#servicios" onClick={() => setOpen(false)}>Servicios</a>
                        <a href="#proceso" onClick={() => setOpen(false)}>Proceso</a>
                        <a href="#contacto" onClick={() => setOpen(false)}>Contacto</a>

                        <button className="mt-4 px-5 py-2 border border-white rounded-full">
                            Iniciar habilitación
                        </button>
                    </nav>
                </motion.div>
            )}
        </header>
    )
}
