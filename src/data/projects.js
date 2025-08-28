import img1 from "../assets/projects/studynotion.png"
import img2 from "../assets/projects/academia.png"
import img3 from "../assets/projects/movieseeker.png"


export const projects = [
  {
    id: 1,
    title: "StudyNotion: EdTech Platform",
    category: "Web",
    description: "Comprehensive full-stack edtech platform with course management, user authentication, and personalized study plans.",
    longDescription: "Developed a complete educational technology platform that revolutionizes online learning. The platform features comprehensive course management, secure user authentication, and AI-powered personalized study plans that adapt to individual learning patterns.",
    tech: ["React", "Redux", "Node.js", "MongoDB", "Express.js"],
    image: img1,
    liveUrl: "#",
    githubUrl: "https://github.com/Bhupendraa307/StudyNotion",
    features: [
      "Course management system with video streaming",
      "User authentication and authorization",
      "Personalized study path tracking",
      "Interactive UI components with React/Redux"
    ],
    impact: "Enhanced learning experience for 500+ students",
    year: "2024"
  },
  {
    id: 2,
    title: "AcademiaPro: College Management System",
    category: "Web",
    description: "Full-stack web application streamlining academic and administrative tasks for admins, faculty, and students.",
    longDescription: "Built a comprehensive college management system that digitizes and streamlines academic operations. The platform includes role-based dashboards, centralized management tools, and real-time interaction capabilities.",
    tech: ["React", "Node.js", "MongoDB", "Express.js", "JWT"],
    image: img2,
    liveUrl: "https://academia-pro-jet.vercel.app/",
    githubUrl: "https://github.com/Bhupendrachouhan307",
    features: [
      "Role-based dashboards for different user types",
      "Centralized management for student records and timetables",
      "Secure authentication and profile management",
      "Responsive UI for real-time interactions"
    ],
    impact: "Streamlined operations for 1000+ users",
    year: "2025"
  },
  {
    id: 3,
    title: "MovieSeeker: AI Movie Recommendation System",
    category: "Data",
    description: "Content-based recommendation engine using TF-IDF vectorization and cosine similarity on movie metadata.",
    longDescription: "Developed an intelligent movie recommendation system that leverages machine learning algorithms to provide personalized movie suggestions. The system uses advanced NLP techniques to analyze movie metadata and user preferences.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Render"],
    image: img3,
    liveUrl: "https://movieseeker-a-movie-recommeder.onrender.com/",
    githubUrl: "https://github.com/Bhupendraa307/MovieSeeker-",
    features: [
      "TF-IDF vectorization for content analysis",
      "Cosine similarity for recommendation matching",
      "User-facing web application with Render deployment",
      "Personalized suggestions based on content preferences"
    ],
    impact: "95% accuracy in recommendation matching",
    year: "2024"
  }
   
]

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Development" },
  { id: "data", label: "Data Science" },
  { id: "open-source", label: "Open Source" }
]