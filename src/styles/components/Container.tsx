const Container = {
  variants: {
    section: {
      display: "flex",
      flexDir: "column",
      position: "relative",
      gap: 8,
      width: "full",
      minH: "50vh",
      maxW: { base: "1250px", xl: "1550px" },
      margin: "0 auto !important",
      px: { base: 2 },
    },
    overlay: {
      display: "flex",
      flexDir: "column",
      position: "relative",
      gap: 8,
      width: "full",
      minH: "50vh",
      p: 0,
      my: "8 !important",
      maxW: "full",
    },
  },
};

export default Container;
