const dropDownVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  },
};
export default dropDownVariants;
