import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export function ScrollIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = scrollPx / winHeightPx
      setScrollProgress(scrolled)
    }

    window.addEventListener("scroll", updateScrollProgress)
    return () => window.removeEventListener("scroll", updateScrollProgress)
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-primary/20 z-50"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: scrollProgress }}
      style={{ transformOrigin: "0%" }}
    >
      <div className="h-full bg-gradient-to-r from-primary to-purple-500" />
    </motion.div>
  )
}