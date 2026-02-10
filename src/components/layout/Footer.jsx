import { Instagram, Phone, Mail } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-black border-t border-gray-800">
            <div className="max-w-6xl mx-auto px-6 py-10">

                <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                    {/* Marca */}
                    <div className="text-center md:text-left space-y-1">
                        <h3 className="font-bold text-lg">GYC Habilitaciones</h3>
                        <p className="text-sm text-gray-500">
                            Habilitaciones municipales · Tucumán
                        </p>
                    </div>

                    {/* Contacto */}
                    <div className="flex gap-6 text-gray-400">
                        <a
                            href="https://wa.me/543813495974"
                            target="_blank"
                            className="hover:text-white transition"
                        >
                            <Phone size={20} />
                        </a>

                        <a
                            href="mailto:gychabilitaciones@gmail.com"
                            className="hover:text-white transition"
                        >
                            <Mail size={20} />
                        </a>

                        <a
                            href="https://instagram.com/_benjaagonzalez_"
                            target="_blank"
                            className="hover:text-white transition"
                        >
                            <Instagram size={20} />
                        </a>
                    </div>
                </div>

                {/* Línea final */}
                <div className="mt-8 text-center text-xs text-gray-600">
                    © {new Date().getFullYear()} GYC Habilitaciones. Todos los derechos reservados.
                </div>

            </div>
        </footer>
    )
}
