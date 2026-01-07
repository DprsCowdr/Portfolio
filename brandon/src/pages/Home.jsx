import { Starbackground } from "../components/Starbackground"
import { Navbar } from "../components/Navbar"
import { HeroSection } from "../components/HeroSection"
import { AboutSection } from "../components/AboutSection"
import { ProjectsSection } from "../components/ProjectsSection"
import { ContactSection } from "../components/ContactSection"

export const Home = () => {
    return ( <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
 {/* BACKGROUND EFFECT*/}
 <Starbackground/>
 {/* Navbar*/}
 <Navbar/>
 {/* Main Conent*/}
 <main>
    <HeroSection/>
    <AboutSection/>
    <ProjectsSection/>
    <ContactSection/>
 </main>
 {/* Footer*/}
    </div>
       
    
    )
}