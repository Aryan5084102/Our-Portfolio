"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";


const CustomTooltip = ({ text, children }) => {
      const [show, setShow] = useState(false);
    
  return (
     <div 
      className="relative flex items-center justify-center"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: -12, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute bottom-full mb-2 px-3 py-1.5 bg-[#ba6b3f] text-white text-xs font-medium rounded shadow-xl whitespace-nowrap z-[100]"
          >
            {text}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-[#ba6b3f]" />
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </div>
  )
}

export default CustomTooltip