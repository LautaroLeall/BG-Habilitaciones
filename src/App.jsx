import Navbar from "./components/layout/Navbar"
import Hero from "./components/sections/Hero"
import Services from "./components/sections/Services"
import Process from "./components/sections/Process"
import About from "./components/sections/About"
import Contact from "./components/sections/Contact"
import BtnWhatsapp from "./components/layout/BtnWhatsapp"
import Footer from "./components/layout/Footer"
import "./index.css"

function App() {
    return (
        <div>
            <Navbar />
            <main>
                <Hero />
                <Services />
                <Process />
                <About />
                <Contact />
            </main>
            <BtnWhatsapp />
            <Footer />
        </div>
    )
}

export default App
