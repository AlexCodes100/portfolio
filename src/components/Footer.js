import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/X";
import CycloneIcon from "@mui/icons-material/Cyclone";

const logoStyle = {
  width: "140px",
  height: "auto",
};

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      {"Copyright © "}
      <Link href="https://github.com/AlexCodes100">AlexCodes100&nbsp;</Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: "center", md: "left" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            minWidth: { xs: "100%", sm: "60%" },
          }}
        >
          <Box sx={{ width: { xs: "100%", sm: "60%" } }}>
            <CycloneIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography variant="body2" fontWeight={600} gutterBottom>
              Updates
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              If you'd like to get updates on my projects send me your email.
            </Typography>
            <Stack direction="row" spacing={1} useFlexGap>
              <TextField
                id="outlined-basic"
                hiddenLabel
                size="small"
                variant="outlined"
                fullWidth
                aria-label="Enter your email address"
                placeholder="Your email address"
                inputProps={{
                  autocomplete: "off",
                  ariaLabel: "Enter your email address",
                }}
              />
              <Button
                variant="contained"
                color="primary"
                sx={{ flexShrink: 0 }}
              >
                Send
              </Button>
            </Stack>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            General Information
          </Typography>
          <RouterLink to="/" style={{ color: 'rgba(0, 0, 0, 0.54)', textDecoration: 'none' }}>
            Home
          </RouterLink>
          <RouterLink to="/education" style={{ color: 'rgba(0, 0, 0, 0.54)', textDecoration: 'none' }}>
            Education
          </RouterLink>
          <RouterLink to="/work" style={{ color: 'rgba(0, 0, 0, 0.54)', textDecoration: 'none' }}>
            Work
          </RouterLink>
          <RouterLink to="/projects" style={{ color: 'rgba(0, 0, 0, 0.54)', textDecoration: 'none' }}>
            Projects
          </RouterLink>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            Personal Links
          </Typography>
          <Link color="text.secondary" href="https://github.com/AlexCodes100">
            GitHub
          </Link>
          <Link color="text.secondary" href="https://twitter.com/AlexCodes100">
            Twitter
          </Link>
          <Link
            color="text.secondary"
            href="https://www.linkedin.com/in/ricardomendez58/"
          >
            LinkedIn
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            Contact Me
          </Typography>
          <Link color="text.secondary" href="tel:+1234567890">
            +1 (123) 456-7890
          </Link>
          <Link color="text.secondary" href="mailto:example@example.com">
            example@example.com
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          pt: { xs: 4, sm: 8 },
          width: "100%",
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        <div>
          <Copyright />
        </div>
        <Stack
          direction="row"
          justifyContent="left"
          spacing={1}
          useFlexGap
          sx={{
            color: "text.secondary",
          }}
        >
          <IconButton
            color="inherit"
            href="https://github.com/AlexCodes100"
            aria-label="GitHub"
            sx={{ alignSelf: "center" }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://twitter.com/AlexCodes100"
            aria-label="X"
            sx={{ alignSelf: "center" }}
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://www.linkedin.com/in/ricardomendez58/"
            aria-label="LinkedIn"
            sx={{ alignSelf: "center" }}
          >
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}
