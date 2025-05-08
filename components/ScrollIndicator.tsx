"use client"
import React from 'react'
import { motion } from "framer-motion"

const ScrollIndicator = () => {
  // Definir colores fijos que no serán afectados por el tema
  const colors = {
    border: "#000000",
    background: "#000000",
    stroke: "#000000"
  }

  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column", 
      justifyContent: "center", 
      alignItems: "center", 
      height: "10rem", 
      gap: "1.5rem", 
      position: "relative",
      color: colors.border // Asegurar que el color de texto también sea fijo
    }}>
      <motion.div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5rem"
        }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {/* Mouse icon */}
        <motion.div
          style={{
            width: "2.5rem",
            height: "4rem",
            border: `2px solid ${colors.border}`,
            borderRadius: "9999px",
            display: "flex",
            justifyContent: "center",
            paddingTop: "0.75rem",
            position: "relative",
            overflow: "hidden"
          }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            style={{
              width: "0.5rem",
              height: "1rem",
              backgroundColor: colors.background,
              borderRadius: "9999px",
              position: "absolute"
            }}
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Arrow icon */}
        <motion.div
          animate={{
            y: [0, 4, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
        >
          <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2L12 12L22 2" stroke={colors.stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default ScrollIndicator
