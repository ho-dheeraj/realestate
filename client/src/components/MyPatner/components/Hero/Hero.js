import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import propic from "../../../../assets/profilepic.jpg";

const Hero = () => {
  const theme = useTheme();

  const [number, setNumber] = useState("");

  function handleChange(e) {
    const re = /^[0-9\b]+$/;
    if (
      (e.target.value === "" || re.test(e.target.value)) &&
      number.length < 10
    ) {
      setNumber(e.target.value);
    }
  }

  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <Box data-aos={isMd ? "fade-right" : "fade-up"}>
          <Box marginBottom={2}>
            <Typography
              variant="h2"
              color="textPrimary"
              sx={{ fontWeight: 700 }}
            >
              I'm Virat Kolhi from Gurgaon
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography variant="h6" component="p" color="textSecondary">
              I've been opperating in the Delhi NCR area for 10 years. Save
              yourself Time, Money, and Energy. Let me help you finding your
              next house.
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <Box marginBottom={2}>
              <Typography variant="body1" component="p">
                Tap in to a network of over <strong>50 HOME OWNERS</strong> who
                are looking for tenants!
              </Typography>
            </Box>
            <Box
              component={"form"}
              noValidate
              autoComplete="off"
              sx={{
                "& .MuiInputBase-input.MuiOutlinedInput-input": {
                  bgcolor: "background.paper",
                },
              }}
            >
              <Box
                display="flex"
                flexDirection={{ xs: "column", sm: "row" }}
                alignItems={{ xs: "stretched", sm: "flex-start" }}
              >
                <Box
                  flex={"1 1 auto"}
                  value={number}
                  onChange={handleChange}
                  component={TextField}
                  label="Enter your Number"
                  variant="outlined"
                  color="primary"
                  fullWidth
                  height={54}
                />
                <Box
                  component={Button}
                  variant="contained"
                  color="primary"
                  size="large"
                  height={54}
                  marginTop={{ xs: 2, sm: 0 }}
                  marginLeft={{ sm: 2 }}
                >
                  Submit
                </Box>
              </Box>
            </Box>
          </Box>
          <Box marginTop={{ xs: 4, sm: 6, md: 8 }} textAlign={"left"}>
            <Typography variant="body1" component="p" color="textPrimary">
              Trusted by industry leading companies
            </Typography>
            <Box display="flex" flexWrap="wrap" justifyContent={"flex-start"}>
              {[
                "https://assets.maccarianagency.com/svg/logos/airbnb-original.svg",
                "https://assets.maccarianagency.com/svg/logos/amazon-original.svg",
                "https://assets.maccarianagency.com/svg/logos/fitbit-original.svg",
                "https://assets.maccarianagency.com/svg/logos/netflix-original.svg",
                "https://assets.maccarianagency.com/svg/logos/google-original.svg",
                "https://assets.maccarianagency.com/svg/logos/paypal-original.svg",
              ].map((item, i) => (
                <Box maxWidth={90} marginTop={2} marginRight={4} key={i}>
                  <Box
                    component="img"
                    height={"100%"}
                    width={"100%"}
                    src={item}
                    alt="..."
                    sx={{
                      filter:
                        theme.palette.mode === "dark"
                          ? "brightness(0) invert(0.7)"
                          : "none",
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        container
        alignItems={"center"}
        justifyContent={"center"}
        xs={12}
        md={6}
        data-aos={isMd ? "fade-left" : "fade-up"}
      >
        <Box
          component={LazyLoadImage}
          height={"100%"}
          width={"100%"}
          src={propic}
          alt="..."
          effect="blur"
          boxShadow={3}
          borderRadius={4}
          maxWidth={600}
        />
      </Grid>
    </Grid>
  );
};

export default Hero;
