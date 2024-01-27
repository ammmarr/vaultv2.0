import { motion } from "framer-motion";
import styles from "./index.module.scss";
const DropDownWrapper = ({
  children,
  itemDropDown,
  currentHovered,
  item,
}: any) => {
  return (
    <>
      <motion.div
        className={styles.dropDown}
        initial={{ opacity: 0, y: -1000 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -1000 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        key={item}
      >
        {children}
      </motion.div>
    </>
  );
};

export default DropDownWrapper;
