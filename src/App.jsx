import { BrowserRouter as Router } from "react-router-dom"
import { ThemeProvider } from "@/lib/theme"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { ScrollIndicator } from "@/components/ScrollIndicator"
import { Hero } from "@/sections/Hero"
import { About } from "@/sections/About"
import { Projects } from "@/sections/Projects"
import { Contact } from "@/sections/Contact"

function App() {
  return (
    <ThemeProvider>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <div className="min-h-screen bg-background text-foreground">
          <ScrollIndicator />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App