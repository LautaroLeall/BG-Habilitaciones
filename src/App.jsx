import Navbar from "./components/layout/Navbar"
import Hero from "./components/sections/Hero"
import Services from "./components/sections/Services"
import Process from "./components/sections/Process"
import WhyUs from "./components/sections/WhyUs"
import Location from "./components/sections/Location"
import Contact from "./components/sections/Contact"

function App() {
    return (
        <div className="bg-black text-white min-h-screen">
            <Navbar />
            <main className="pt-24">
                <Hero />
                <Services />
                <Process />
                <WhyUs />
                <Location />
                <Contact />
            </main>
        </div>
    )
}

export default App
