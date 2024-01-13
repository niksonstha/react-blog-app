export const theme = {
  styles: {
    global: () => ({
      html: {
        scrollSnapType: "y proximity",
      },
      "*": {
        boxSizing: "border-box",
      },
      body: {
        backgroundColor: "#191717",
        fontFamily: `'Poppins', sans-serif,'Nunito', sans-serif,'Long Cang', cursive`,
        color: "white",
      },

      "*::-webkit-scrollbar": {
        width: "5px",
      },

      "*::-webkit-scrollbar-track": {
        background: "transparent",
      },

      "*::-webkit-scrollbar-thumb": {
        backgroundColor: " #F1EFEF",
        borderRadius: "6px",
      },
    }),
  },
  colors: {
    brand: {
      100: "#CCC8AA",
    },
  },
};
