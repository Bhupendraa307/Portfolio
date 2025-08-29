import { Github, Linkedin, Mail, Heart, Instagram } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { ThemeToggle } from "@/components/ThemeToggle"
import { personalInfo } from "@/data/personal"
import { scrollToSection } from "@/lib/utils"

const footerLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" }
]

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">Bhupendra Kumar Chouhan</h3>
            <p className="text-muted-foreground mb-4">
              Full Stack Developer , passionate about creating innovative web solutions.
            </p>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <span className="text-sm text-muted-foreground">Toggle theme</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {footerLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-2 mb-4">
              <Button variant="outline" size="icon" asChild>
                <a 
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a 
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a 
                  href={personalInfo.social.email}
                  aria-label="Email"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              {personalInfo.email}
            </p>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {new Date().getFullYear()} Bhupendra Kumar Chouhan. Made with 
            <Heart className="h-4 w-4 text-red-500" /> 
            using React & Tailwind CSS
          </p>
          <p className="text-sm text-muted-foreground mt-2 md:mt-0">
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
