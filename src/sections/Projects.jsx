import { useState } from "react"
import { motion } from "framer-motion"
import { Globe, Github, Filter } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { projects, projectCategories } from "@/data/projects"

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredProjects = projects.filter(
    (project) =>
      activeFilter === "all" || project.category.toLowerCase() === activeFilter
  )

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {projectCategories.map((category) => (
            <Button
              key={category.id}
              variant={activeFilter === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(category.id)}
              className="flex items-center gap-2"
            >
              <Filter className="h-4 w-4" />
              {category.label}
            </Button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full card-hover card-gradient backdrop-blur-sm group border-0 overflow-hidden relative">
                <CardHeader>
                  <div className="aspect-video rounded-lg mb-4 overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.nextSibling.style.display = 'flex'
                      }}
                    />
                    <div className="w-full h-full hidden items-center justify-center">
                      <span className="text-2xl font-bold text-primary">
                        {project.title.split(" ")[0]}
                      </span>
                    </div>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <Badge variant="outline" className="w-fit">
                    {project.category}
                  </Badge>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-4 flex-1">
                    {project.description}
                  </p>

                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {project.impact && (
                      <div className="text-sm text-primary font-medium">
                        📈 {project.impact}
                      </div>
                    )}

                    <div className="flex gap-2 pt-2">
                      {project.liveUrl && project.liveUrl !== "#" && (
                        <Button size="sm" variant="default" onClick={() => window.open(project.liveUrl, '_blank')}>
                          <Globe className="h-4 w-4 mr-2" />
                          Live Demo
                        </Button>
                      )}

                      <Button size="sm" variant="outline" onClick={() => window.open(project.githubUrl, '_blank')}>
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground">
              No projects found for this category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}