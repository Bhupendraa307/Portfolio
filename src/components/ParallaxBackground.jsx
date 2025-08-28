import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function ParallaxBackground({ children, className = "", intensity = 0.5 }) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          transform: `translateY(${scrollY * intensity}px)`,
        }}
      >
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full blur-xl" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-primary/20 rounded-full blur-lg" />
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-to-br from-purple-400/15 to-pink-400/15 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-br from-primary/25 to-blue-400/25 rounded-full blur-xl" />
      </motion.div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}