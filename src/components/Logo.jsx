export function Logo({ className = "w-8 h-8" }) {
  return (
    <div className={`${className} relative`}>
      <svg 
        viewBox="0 0 40 40" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Outer ring with gradient */}
        <circle 
          cx="20" 
          cy="20" 
          r="18" 
          stroke="url(#gradient)" 
          strokeWidth="2"
          fill="none"
        />
        
        {/* Inner geometric shape */}
        <path 
          d="M12 14L20 10L28 14V26L20 30L12 26V14Z" 
          fill="url(#gradient)"
          opacity="0.8"
        />
        
        {/* Center dot */}
        <circle 
          cx="20" 
          cy="20" 
          r="3" 
          fill="currentColor"
          className="text-background"
        />
        
        {/* Gradient definition */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(262, 83%, 58%)" />
            <stop offset="100%" stopColor="hsl(263, 70%, 50%)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}