import React from 'react'
import { animate, motion, transform } from "framer-motion";

const Main = () => {
  return (
    <motion.div
    initial = {{transform: "translateX(100px)"}}
    animate = {{transform: "translateY(0px)"}}
    >
        Hello World
    </motion.div>
  )
}

export default Main
