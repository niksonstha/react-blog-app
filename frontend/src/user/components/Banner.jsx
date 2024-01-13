import { Box, Image } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";

const Banner = () => {
  const imageUrls = [banner1, banner2, banner3];

  return (
    <Box
      ml={"auto"}
      mr={"auto"}
      width={["100%", "100%", "100%", "80%"]}
      pos={"relative"}
    >
      <Box
        style={{
          background:
            "linear-gradient(360deg, rgba(255,255,255,0) 20%, rgba(25,23,23,1) 90%)",
        }}
        width={"100%"}
        height={"1rem"}
        pos={"absolute"}
        zIndex={10}
      />
      <Carousel
        emulateTouch={true}
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
      >
        {imageUrls.map((url, index) => (
          <Box key={index}>
            <Image
              src={url}
              height={["30vh", "40vh", "70vh"]}
              objectFit={"cover"}
            />
            <Box
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.3)",
              }}
            ></Box>
          </Box>
        ))}
      </Carousel>
      <Box
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0) 20%, rgba(25,23,23,1) 77%)",
        }}
        width={"100%"}
        height={"6rem"}
        pos={"absolute"}
        bottom={-1}
      />
    </Box>
  );
};

export default Banner;
