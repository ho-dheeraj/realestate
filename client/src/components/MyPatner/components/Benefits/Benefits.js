import React from "react";
import PropTypes from "prop-types";
import { Card, CardContent, colors } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";

import apartmentPng from "../../../../assets/patners/apartment.png";
import bedroomPng from "../../../../assets/patners/bedroom.png";
import villaPng from "../../../../assets/patners/villa.png";
import { useTheme } from "@emotion/react";

const Benefits = ({ themeMode = "light" }) => {
  const theme = useTheme();
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{ textTransform: "uppercase", fontWeight: "medium" }}
          gutterBottom
          color={"secondary"}
          align={"center"}
        >
          Benefits
        </Typography>
        <Box
          component={Typography}
          sx={{ fontWeight: 700 }}
          variant={"h3"}
          gutterBottom
          align={"center"}
        >
          What our 5,500+ clients
          <br />
          love about us
        </Box>
        <Typography align={"center"} color="textSecondary" variant={"h6"}>
          We aim to take care of you. Need help with installation, find a remote
          getaway or a convinient shared appartment, or just need a clarifiction
          about our process?
          <br></br>We'll be there to lend a helping hand.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {[
          {
            title: "Flats",
            subtitle:
              "From the moment you walk in, you'll feel at home with our beautiful and spacious apartments, nested in the hip part of town, perfect for working proffesionals.",
            icon: apartmentPng,
          },
          {
            title: "Villas",
            subtitle:
              "Villas in a gated communities located in the remote parts of Delhi NCR, and in the middle of the city. The perfect getaway, Villa life is where space, privacy and tranquility reign supreme.",
            icon: villaPng,
          },
          {
            title: "Shared Apartments",
            subtitle:
              "Our shared apartments are designed for you to live your life with ease, made possible by amenities like - Uninterruptible Power, Security, Hygiene, Cool Community.",
            icon: bedroomPng,
          },
        ].map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Box
              component={"a"}
              href={""}
              display={"block"}
              width={1}
              height={1}
              sx={{
                textDecoration: "none",
                transition: "all .2s ease-in-out",
                "&:hover": {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                },
              }}
            >
              <Box
                component={Card}
                width={1}
                height={1}
                data-aos={"fade-up"}
                data-aos-delay={i * 100}
                data-aos-offset={100}
                data-aos-duration={600}
                flexDirection={"column"}
                display={"flex"}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <Box
                    component={Avatar}
                    width={{ xs: 60, md: 80 }}
                    height={{ xs: 60, md: 80 }}
                    marginBottom={2}
                    src={item.icon}
                  />
                  <Typography
                    variant={"h6"}
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    {item.title}
                  </Typography>
                  <Typography align="left" color="text.secondary">
                    {item.subtitle}
                  </Typography>
                </CardContent>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

Benefits.propTypes = {
  themeMode: PropTypes.string.isRequired,
};

export default Benefits;
