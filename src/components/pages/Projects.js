import React from "react";
import emailMarketing from "../images/email-marketing.png";
import socialMedia from "../images/social-media-1.png";
import webDevelopment from "../images/website-design.png";
import {
  Container,
  Grid,
  Typography,
  useTheme,
  Card,
  CardMedia,
  Fade,
  Box,
} from "@mui/material";

function Projects() {
  const projects = [
    { image: webDevelopment, description: "I create custom websites that meet my client's business goals. I use the latest trends and technologies to deliver stunning and user-friendly websites. From e-commerce to portfolios, my commitment is to help clients succeed in the digital world." },
    { image: emailMarketing, description: "I use data-driven strategies to create email campaigns that engage customers and drive action. Whether you're looking to increase website traffic, boost sales, or promote a new product, I can help you achieve measurable results." },
    { image: socialMedia, description: "I create data-driven social media campaigns that generate leads and increase sales. I craft optimized strategies using the latest tools and techniques to deliver measurable results. I'm committed to helping you reach your social media goals and grow your business." },
    
  ];

  return (
    <Container maxWidth="xl">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        {projects.map((project, i) => (
          <Grid item xs={12} key={i}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Box height={300} style={{ padding: "20px", width: "100%" }}>
                  <Card>
                    <CardMedia
                      component="img"
                      image={project.image}
                      alt="Project"
                      style={{ objectFit: "contain" }}
                    />
                  </Card>
                </Box>
              </Grid>
            <Grid item xs={6}>
                <Box height={300} style={{ padding: "20px", width: "100%", color: "#5885AF", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant="body1" align="center">{project.description}</Typography>
                </Box>
            </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Projects;
