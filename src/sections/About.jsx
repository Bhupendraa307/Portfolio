// import { motion } from "framer-motion"
// import { Download, GraduationCap, Award } from "lucide-react"
// import { Button } from "@/components/ui/Button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
// import { Badge } from "@/components/ui/Badge"
// import { personalInfo, education, skills, achievements } from "@/data/personal"

// export function About() {
//   return (
//     <section id="about" className="py-20 relative overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             Get to know more about my background, skills, and journey
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-12 items-start">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <Card className="mb-8 card-gradient card-hover">
//               <CardHeader>
//                 <CardTitle className="flex items-center gap-2">
//                   <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
//                     <span className="text-primary font-bold text-lg">BK</span>
//                   </div>
//                   About Me
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-muted-foreground mb-6 leading-relaxed">
//                   {personalInfo.bio}
//                 </p>
//               </CardContent>
//             </Card>

//             <Card className="card-gradient card-hover">
//               <CardHeader>
//                 <CardTitle className="flex items-center gap-2">
//                   <GraduationCap className="h-5 w-5 text-primary" />
//                   Education
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="space-y-4">
//                   {education.map((edu, index) => (
//                     <div key={index} className="border-l-2 border-primary/20 pl-4">
//                       <h4 className="font-semibold">{edu.degree}</h4>
//                       <p className="text-sm text-muted-foreground">{edu.institution}</p>
//                       <div className="flex justify-between items-center mt-1">
//                         <span className="text-sm text-muted-foreground">{edu.year}</span>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="space-y-8"
//           >
//             <Card className="card-gradient card-hover">
//               <CardHeader>
//                 <CardTitle>Skills & Technologies</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="space-y-6">
//                   {Object.entries(skills).map(([category, skillList]) => (
//                     <div key={category}>
//                       <h4 className="font-semibold mb-3 text-sm text-muted-foreground uppercase tracking-wide">
//                         {category}
//                       </h4>
//                       <div className="flex flex-wrap gap-2">
//                         {skillList.map((skill) => (
//                           <Badge key={skill} variant="secondary">
//                             {skill}
//                           </Badge>
//                         ))}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>

//             <Card className="card-gradient card-hover">
//               <CardHeader>
//                 <CardTitle className="flex items-center gap-2">
//                   <Award className="h-5 w-5 text-primary" />
//                   Achievements
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="space-y-4">
//                   {achievements.map((achievement, index) => (
//                     <div key={index} className="border-l-2 border-primary/20 pl-4">
//                       <h4 className="font-semibold">{achievement.title}</h4>
//                       <p className="text-sm text-muted-foreground">{achievement.description}</p>
//                       <span className="text-xs text-muted-foreground">{achievement.year}</span>
//                     </div>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }
















import { motion } from "framer-motion"
import { Download, GraduationCap, Award } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { personalInfo, education, skills, achievements } from "@/data/personal"

// Import skill icons
import { 
  SiReact, SiRedux, SiTailwindcss, SiJavascript, SiTypescript,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiPostgresql,
  SiPython, SiPandas, SiNumpy, SiScikitlearn, SiTensorflow,
  SiGithub, SiGit, SiHtml5, SiCss3, SiRender, SiFramer, SiDocker
} from "react-icons/si"

// Mapping skills → icons
const skillIconsMap = {
  // Frontend
  React: <SiReact className="h-4 w-4 text-cyan-500" />,
  Redux: <SiRedux className="h-4 w-4 text-purple-500" />,
  TailwindCSS: <SiTailwindcss className="h-4 w-4 text-sky-500" />,
  JavaScript: <SiJavascript className="h-4 w-4 text-yellow-400" />,
  TypeScript: <SiTypescript className="h-4 w-4 text-blue-600" />,
  HTML: <SiHtml5 className="h-4 w-4 text-orange-500" />,
  CSS: <SiCss3 className="h-4 w-4 text-blue-500" />,

  // Backend
  "Node.js": <SiNodedotjs className="h-4 w-4 text-green-600" />,
  Express: <SiExpress className="h-4 w-4 text-gray-600" />,

  // Databases
  MongoDB: <SiMongodb className="h-4 w-4 text-green-700" />,
  MySQL: <SiMysql className="h-4 w-4 text-blue-600" />,
  PostgreSQL: <SiPostgresql className="h-4 w-4 text-indigo-600" />,

  // Data Science / AI
  Python: <SiPython className="h-4 w-4 text-yellow-500" />,
  Pandas: <SiPandas className="h-4 w-4 text-slate-700" />,
  NumPy: <SiNumpy className="h-4 w-4 text-blue-500" />,
  "Scikit-learn": <SiScikitlearn className="h-4 w-4 text-orange-500" />,
  TensorFlow: <SiTensorflow className="h-4 w-4 text-orange-400" />,

  // Tools / Platforms
  GitHub: <SiGithub className="h-4 w-4 text-black" />,
  Git: <SiGit className="h-4 w-4 text-red-500" />,
  Docker: <SiDocker className="h-4 w-4 text-blue-500" />,
  Render: <SiRender className="h-4 w-4 text-purple-600" />,
  FramerMotion: <SiFramer className="h-4 w-4 text-pink-500" />
}

export function About() {
  return (
    <section id="about" className="py-20 section-bg bg-pattern relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background, skills, and journey
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="mb-8 card-gradient">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">BK</span>
                  </div>
                  About Me
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {personalInfo.bio}
                </p>
                {/* <Button asChild>
                  <a href={personalInfo.resume} download>
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </a>
                </Button> */}
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <div key={index} className="border-l-2 border-primary/20 pl-4">
                      <h4 className="font-semibold">{edu.degree}</h4>
                      <p className="text-sm text-muted-foreground">{edu.institution}</p>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-sm text-muted-foreground">{edu.year}</span>
                        {/* <Badge variant="secondary">
                          {edu.cgpa ? `CGPA: ${edu.cgpa}` : `${edu.percentage}`}
                        </Badge> */}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skills & Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Skills */}
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle>Skills & Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {Object.entries(skills).map(([category, skillList]) => (
                    <div key={category}>
                      <h4 className="font-semibold mb-3 text-sm text-muted-foreground uppercase tracking-wide">
                        {category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill) => (
                          <motion.div
                            key={skill}
                            className="relative group"
                            whileHover={{ scale: 1.05 }}
                          >
                            <Badge variant="secondary" className="flex items-center gap-2 transition-all">
                              {skill}
                              <motion.span
                                initial={{ opacity: 0, x: -5 }}
                                whileHover={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                {skillIconsMap[skill] ?? null}
                              </motion.span>
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="border-l-2 border-primary/20 pl-4">
                      <h4 className="font-semibold">{achievement.title}</h4>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      <span className="text-xs text-muted-foreground">{achievement.year}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
