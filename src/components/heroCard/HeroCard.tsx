import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import variants from "../../utils/variants";
import style from "./index.module.scss";
import { Link } from "react-router-dom";
// interface HeroCardProps {
//   h1: string;
//   h2: string;
//   h3: string;
//   p: string;
//   bg: string;
// }
const HeroCard = ({ data }: any) => {
  const [counter, setCounter] = useState(0);
  const heroSectionCardsData = [...data];
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev == heroSectionCardsData.length - 1) {
          return 0;
        }
        return prev + 1;
      });
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const { h1, h2, bg, link, href } = heroSectionCardsData[counter];

  return (
    <motion.div
      className={style.container}
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // exit={{ opacity: 0 }}
      // transition={{ duration: 1, ease: "easeOut" }}
      // key={counter}
    >
      <AnimatePresence>
        <motion.div
          className={style.imgContainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
          key={counter}
        >
          <motion.img src={bg} />
        </motion.div>
      </AnimatePresence>

      <motion.div
        className={style.textContainer}
        variants={{
          hidden: {
            opacity: 0,
            x: 100,
          },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              staggerChildren: 0.5,
              duration: 0.7,
            },
          },
        }}
        initial="hidden"
        animate="visible"
        key={counter}
      >
        <motion.h1
          variants={variants}
          transition={{ delay: 0, ease: "easeIn" }}
        >
          {h1}
        </motion.h1>
        <motion.h2
          variants={variants}
          transition={{ delay: 0, ease: "easeIn" }}
        >
          {h2}
        </motion.h2>
        {/* <motion.h1
          variants={variants}
          transition={{ delay: 0, ease: "easeIn" }}
        >
          {h3}
        </motion.h1> */}
        {/* <motion.p variants={variants} transition={{ delay: 0, ease: "easeIn" }}>
          {p}
        </motion.p> */}
        <motion.div
          variants={variants}
          transition={{ delay: 0, ease: "easeIn" }}
          className={style.buttonContainer}
        >
          <Link to={href} className="button">
            {link}
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeroCard;
