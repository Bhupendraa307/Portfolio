import { motion } from "framer-motion"
import { ArrowRight, Download, Github, Instagram, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { personalInfo } from "@/data/personal"
import { scrollToSection } from "@/lib/utils"

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/5 to-blue-500/10" />
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-blue-500/20 to-primary/20 rounded-full blur-3xl"
            animate={{
              x: [0, -100, 0],
              y: [0, 100, 0],
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-tr from-purple-400/15 to-pink-400/15 rounded-full blur-2xl"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm{" "}
            <span className="text-primary">{personalInfo.name.split(" ")[0]}</span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {personalInfo.title}
          </motion.p>

          <motion.p 
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button 
              size="lg" 
              onClick={() => scrollToSection("projects")}
              className="group bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              View Projects
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="border-2 border-primary/50 hover:border-primary hover:bg-primary/10 backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
            >
              Contact Me
            </Button>
          </motion.div>

          <motion.div 
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-primary"
              onClick={() => window.open(personalInfo.social.github, '_blank')}
            >
              <Github className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-primary"
              onClick={() => window.open(personalInfo.social.linkedin, '_blank')}
            >
              <Linkedin className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-primary"
              onClick={() => window.open(personalInfo.social.email, '_blank')}
            >
              <Instagram className="h-6 w-6" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}




 