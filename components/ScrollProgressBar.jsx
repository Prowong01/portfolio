"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show progress bar when page is scrolled past 100px
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Show scroll to top button when page is scrolled past 500px
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{
          scaleX,
          opacity: isVisible ? 1 : 0,
        }}
      />

      {/* Scroll progress indicator */}
      <motion.div
        className="fixed bottom-8 right-8 z-50 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0.5,
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="relative w-12 h-12"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Circular progress */}
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="rgba(var(--primary-rgb), 0.2)"
              strokeWidth="5"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="5"
              strokeLinecap="round"
              style={{
                pathLength: scrollYProgress,
                rotate: -90,
              }}
              className="origin-center"
            />
          </svg>

          {/* Button */}
          <motion.button
            onClick={scrollToTop}
            className="absolute inset-0 rounded-full bg-background shadow-md border border-border flex items-center justify-center hover:bg-accent/10 transition-colors"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <ArrowUp className="text-primary w-5 h-5" />
          </motion.button>
        </motion.div>
      </motion.div>
    </>
  );
};

export default ScrollProgressBar;
