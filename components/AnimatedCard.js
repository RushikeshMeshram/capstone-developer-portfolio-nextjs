// components/AnimatedCard.tsx
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

export default function AnimatedCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
    >
      <ProjectCardCard />
    </motion.div>
  );
}
