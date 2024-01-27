import { motion } from "framer-motion";
import style from "./index.module.scss";

const CompoenentTransition = (Comp: React.FC) => {
  return () => (
    <>
      <motion.div
        className={style.slideIn}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 100 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Comp />
      </motion.div>
    </>
  );
};

export default CompoenentTransition;
