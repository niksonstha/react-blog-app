import { motion } from "framer-motion";

const PageNotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        fontFamily: "sans-serif",
        backgroundColor: "black",
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1
          style={{
            fontSize: "4rem",
            marginBottom: "1rem",
            color: "#333",
          }}
        >
          404
        </h1>
        <h2
          style={{
            fontSize: "2.5rem",
            marginBottom: "1rem",
            color: "#666",
          }}
        >
          Page not found
        </h2>
        <p
          style={{
            fontSize: "1.5rem",
            color: "#888",
          }}
        >
          The requested page could not be found.
        </p>
      </motion.div>
    </div>
  );
};

export default PageNotFound;
