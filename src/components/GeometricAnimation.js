import React from "react";
import { motion } from "framer-motion";

// Composição geométrica animada usada no lugar de fotos/avatar — reforça a
// identidade visual (azul/amarelo) com movimento sutil via Framer Motion.
const GeometricAnimation = ({ className = "" }) => {
  return (
    <div
      className={`relative w-full aspect-square flex items-center justify-center ${className}`}
    >
      {/* anel externo tracejado, girando lentamente */}
      <motion.div
        className="absolute w-full h-full rounded-full border-2 border-dashed border-dark/40 dark:border-light/40"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />

      {/* anel intermediário, girando no sentido oposto */}
      <motion.div
        className="absolute w-[78%] h-[78%] rounded-full border border-primary/50 dark:border-primaryDark/50"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      {/* núcleo central */}
      <motion.div
        className="absolute w-[46%] h-[46%] rounded-[2rem] bg-dark dark:bg-light"
        animate={{ rotate: [0, 8, 0, -8, 0], scale: [1, 1.03, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <span className="absolute font-bold text-5xl text-light dark:text-dark select-none xs:text-3xl">
        &lt;/&gt;
      </span>

      {/* blocos flutuantes de destaque */}
      <motion.div
        className="absolute -top-2 left-2 w-16 h-16 rounded-2xl bg-primaryDark shadow-lg xs:w-10 xs:h-10"
        animate={{ y: [0, -18, 0], rotate: [0, 12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-4 -right-2 w-12 h-12 rounded-full bg-primary shadow-lg xs:w-8 xs:h-8"
        animate={{ y: [0, 16, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.div
        className="absolute bottom-10 left-0 w-8 h-8 rounded-lg bg-dark dark:bg-light xs:w-5 xs:h-5"
        animate={{ y: [0, -10, 0], x: [0, 6, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute top-8 right-4 w-6 h-6 rounded-full border-4 border-primaryDark xs:w-4 xs:h-4"
        animate={{ scale: [1, 1.4, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default GeometricAnimation;
