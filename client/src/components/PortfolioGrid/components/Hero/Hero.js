import React from "react";
import Typed from "react-typed";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Hero = () => {
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant="h6"
          component="p"
          color="text.secondary"
          align={"center"}
          gutterBottom
          sx={{ fontWeight: 400 }}
        >
          Virat Kohli will help you find the best modern home for you, to ensure
          maximum happiness.
        </Typography>
        <Typography
          variant="h3"
          color="text.primary"
          align={"center"}
          sx={{
            fontWeight: 700,
          }}
        >
          We{" "}
          <Typed
            strings={[
              "design and develop web apps",
              "promote your business",
              "do continues deployment",
            ]}
            typeSpeed={100}
            loop={true}
            backSpeed={50}
            backDelay={1500}
          />
        </Typography>
      </Box>
    </Box>
  );
};

export default Hero;
