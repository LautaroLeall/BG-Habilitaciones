export default function TestTailwind() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-black">
            <div className="p-10 rounded-2xl bg-white text-black text-center space-y-4 shadow-xl">
                <h1 className="text-4xl font-bold">
                    Tailwind OK
                </h1>

                <p className="text-gray-600">
                    Si ves este bloque centrado, Tailwind está funcionando.
                </p>

                <button className="px-6 py-3 rounded-xl bg-black text-white hover:bg-gray-800 transition">
                    Botón de prueba
                </button>
            </div>
        </div>
    )
}
