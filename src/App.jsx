import Navbar from "./components/layout/Navbar"
import Hero from "./components/sections/Hero"
import Services from "./components/sections/Services"
import Process from "./components/sections/Process"

function App() {
    return (
        <div className="bg-black text-white min-h-screen">
            <Navbar />
            <main className="pt-24">
                <Hero />
                <Services />
                <Process />
            </main>
        </div>
    )
}

export default App
