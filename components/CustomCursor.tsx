"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const cursorVariants = {
  default: {
    width: 32,
    height: 32,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    border: "1px solid rgba(255, 255, 255, 0.4)",
    transition: { type: "spring", stiffness: 500, damping: 28 },
  },
  hover: {
    width: 64,
    height: 64,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    border: "1px solid rgba(255, 255, 255, 0.6)",
    transition: { type: "spring", stiffness: 500, damping: 28 },
  },
}

export default function CustomCursor({ variant }: { variant: "default" | "hover" }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    const checkTouch = () => {
      setIsTouchDevice(!window.matchMedia("(pointer: fine)").matches)
    }

    checkTouch()
    window.addEventListener("resize", checkTouch)

    return () => window.removeEventListener("resize", checkTouch)
  }, [])

  useEffect(() => {
    if (isTouchDevice) return

    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", mouseMove)
    return () => window.removeEventListener("mousemove", mouseMove)
  }, [isTouchDevice])

  if (isTouchDevice) return null // Don't render on touch devices

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-50 rounded-full mix-blend-difference"
      animate={variant}
      variants={cursorVariants}
      style={{
        left: mousePosition.x - 16,
        top: mousePosition.y - 16,
      }}
    />
  )
}
