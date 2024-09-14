import React from "react";
import { motion } from "framer-motion";

const Title: React.FC = () => {
  return (
    <h1 className="title">
      <motion.div
        className="tic-word"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Tic.
      </motion.div>{" "}
      <motion.div
        className="tac-word"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        Tac.
      </motion.div>{" "}
      <motion.div
        className="toe-word"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
      >
        Toe.
      </motion.div>
    </h1>
  );
};

export default Title;
