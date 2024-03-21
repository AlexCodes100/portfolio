import React from "react";
import {
  Container,
  Grid,
  Typography,
  useTheme,
  Card,
  CardMedia,
  Fade,
} from "@mui/material";
import emailMarketing from "./images/email-marketing.png";
import socialMedia from "./images/social-media-1.png";
import webDevelopment from "./images/website-design.png";
import blueBg from "./images/blue.jpg";
import Contact from "./Contact";

function Hero() {
  const theme = useTheme();

  const images = [emailMarketing, socialMedia, webDevelopment];

  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{
          height: "20vh",
          textAlign: "center",
          backgroundColor: "#5885AF",
          width: "100%",
          color: "white",
        }}
      >
        <Typography variant="h3" component="div" gutterBottom color="inherit">
          I'm Ricardo Mendez
        </Typography>
        <Typography variant="h5" component="div" gutterBottom color="inherit">
          I'm a web developer
        </Typography>
        <Typography variant="h6" component="div" gutterBottom color="inherit">
          Let's turn your vision into reality
        </Typography>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        style={{ width: "100%", backgroundColor: "#5885AF" }}
      >
        {images.map((image, i) => (
          <Grid item xs={4} key={i}>
            <Fade in={true} timeout={1000 * (i + 1)}>
              <Card>
                <CardMedia
                  component="img"
                  height="100%"
                  image={image}
                  alt="Image"
                />
              </Card>
            </Fade>
          </Grid>
        ))}
      </Grid>
      <Grid container style={{ backgroundColor: "white", color: "#5885AF" }}>
        <Grid item xs={6}>
          <Container>
            <Typography
              variant="h4"
              component="div"
              gutterBottom
              style={{ paddingTop: "2rem" }}
            >
              About Me
            </Typography>
            <Typography variant="body1" component="div" gutterBottom>
              I am a web developer with a passion for creating beautiful and
              functional websites. I have experience with HTML, CSS, JavaScript,
              and React. I am also familiar with Node.js, Express, and MongoDB.
            </Typography>
          </Container>
        </Grid>
        <Grid item xs={6}>
          <Container sx={{ padding: "20px" }}>
            <Contact />
          </Container>
        </Grid>
      </Grid>
    </>
  );
}

export default Hero;
