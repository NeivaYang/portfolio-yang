import { motion } from "framer-motion";

export default function App() {
    return (
        <motion.div
        className="w-10 h-10 bg-rose-600 container mx-auto"
        animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["10%", "10%", "50%", "50%", "10%"]
        }}
        transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1
        }}
        />
    );
}
