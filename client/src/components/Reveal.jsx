import React from "react";
import { motion } from "framer-motion";

/**
 * A reusable wrapper component that reveals its children when they scroll into view.
 * Uses Framer Motion's whileInView and viewport properties.
 */
export function Reveal({ children, delay = 0, yOffset = 30, duration = 0.6, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.17, 0.55, 0.55, 1], // Custom cubic-bezier for a smooth, professional feel
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * StaggerReveal automatically staggers its children. This is useful for lists or grids.
 * Note: Wrap the parent container, and it will animate the direct children.
 */
export function StaggerReveal({ children, staggerDelay = 0.1, yOffset = 30 }) {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: yOffset },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.17, 0.55, 0.55, 1] },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={itemVariants}>{child}</motion.div>
      ))}
    </motion.div>
  );
}
