import { StyledButton } from "@/components/styled-button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useRouter } from "next/router";

import Image from "next/image";
import { FC, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
// import EnquiryForm from './EnquiryFrom'
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

interface Exp {
  label: string;
  value: string;
}
interface ExpItemProps {
  item: Exp;
}

interface FormData {
  name: string;
  email: string;
  country: string;
  mobileNumber: string;
  medicalRequirements: string;
}

const countries = [
  { code: "+91", label: "India" },
  { code: "+254", label: "Kenya" },
  { code: "+255", label: "Tanzania" },
  { code: "+234", label: "Nigeria" },
  { code: "+251", label: "Ethiopia" },
  { code: "+249", label: "Sudan" },
  { code: "+1", label: "United States" },

  // Add more countries as needed
];

const exps: Array<Exp> = [
  {
    label: "Patients served",
    value: "100+",
  },
  {
    label: "Treatments Offered",
    value: "20+",
  },
  {
    label: "Experienced Doctors",
    value: "15+",
  },
];
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
const ExpItem: FC<ExpItemProps> = ({ item }) => {
  const { value, label } = item;
  return (
    <Box sx={{ textAlign: "center", mb: { xs: 1, md: 0 } }}>
      <Typography
        sx={{
          color: "secondary.main",
          mb: { xs: 1, md: 2 },
          fontSize: { xs: 34, md: 44 },
          fontWeight: "bold",
        }}
      >
        {value}
      </Typography>
      <Typography color="text.secondary" variant="h5">
        {label}
      </Typography>
    </Box>
  );
};

const HomeHero: FC = () => {
  const router = useRouter();
  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    router.push("/thanks");
  };
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    country: "",
    mobileNumber: "",
    medicalRequirements: "",
  });
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleChange = (
    event:
      | React.ChangeEvent<
          | HTMLInputElement
          | HTMLTextAreaElement
          | { name?: string; value: unknown }
        >
      | SelectChangeEvent<string>
  ): void => {
    const { name, value } = "target" in event ? event.target : event;
    setFormData({ ...formData, [name as string]: value as string });
  };

  return (
    <Box
      id="hero"
      sx={{
        backgroundColor: "background.paper",
        position: "relative",
        pt: 4,
        pb: { xs: 8, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={0}
          sx={{ flexDirection: { xs: "column", md: "unset" } }}
        >
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                textAlign: { xs: "center", md: "left" },
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Box sx={{ mb: 3 }}>
                <Typography
                  component="h2"
                  sx={{
                    position: "relative",
                    fontSize: { xs: 40, md: 72 },
                    letterSpacing: 1.5,
                    fontWeight: "bold",
                    lineHeight: 1.3,
                  }}
                >
                  <Typography
                    component="mark"
                    sx={{
                      position: "relative",
                      color: "primary.main",
                      fontSize: "inherit",
                      fontWeight: "inherit",
                      backgroundColor: "unset",
                    }}
                  >
                    Transform{" "}
                    <Box
                      sx={{
                        position: "absolute",
                        top: { xs: 24, md: 34 },
                        left: 2,
                        transform: "rotate(3deg)",
                        "& img": {
                          width: { xs: 146, md: 210 },
                          height: "auto",
                        },
                      }}
                    >
                      {/* eslint-disable-next-line */}
                      <img
                        src="/images/headline-curve.svg"
                        alt="Headline curve"
                      />
                    </Box>
                  </Typography>
                  your{" "}
                  <Typography
                    component="span"
                    sx={{
                      fontSize: "inherit",
                      fontWeight: "inherit",
                      position: "relative",
                      "& svg": {
                        position: "absolute",
                        top: -16,
                        right: -21,
                        width: { xs: 22, md: 30 },
                        height: "auto",
                      },
                    }}
                  >
                    Health
                    <svg version="1.1" viewBox="0 0 3183 3072">
                      <g id="Layer_x0020_1">
                        <path
                          fill="#127C71"
                          d="M2600 224c0,0 0,0 0,0 236,198 259,562 52,809 -254,303 -1849,2089 -2221,1776 -301,-190 917,-1964 1363,-2496 207,-247 570,-287 806,-89z"
                        />
                        <path
                          fill="#127C71"
                          d="M3166 2190c0,0 0,0 0,0 64,210 -58,443 -270,516 -260,90 -1848,585 -1948,252 -104,-230 1262,-860 1718,-1018 212,-73 437,39 500,250z"
                        />
                        <path
                          fill="#127C71"
                          d="M566 3c0,0 0,0 0,0 -219,-26 -427,134 -462,356 -44,271 -255,1921 90,1962 245,62 628,-1392 704,-1869 36,-221 -114,-424 -332,-449z"
                        />
                      </g>
                    </svg>
                  </Typography>{" "}
                  <br />
                  with CuraAid
                </Typography>
              </Box>
              <Box sx={{ mb: 4, width: { xs: "100%", md: "70%" } }}>
                <Typography sx={{ color: "text.secondary", lineHeight: 1.6 }}>
                  {
                    <ul>
                      <li>
                        Cutting-edge Healthcare at significantly lower costs.
                      </li>
                      <li>
                        World-Class Specialists offering advanced treatments.
                      </li>
                      <li>
                        Comprehensive Services including visa assistance,
                        accommodation, travel arrangements, and interpreter
                        services.
                      </li>
                      <li>
                        Seamless Experience from arrival to post-treatment care
                      </li>
                    </ul>
                  }
                </Typography>
              </Box>
              <Box sx={{ "& button": { mr: 2 } }}>
                <ScrollLink
                  to="popular-treatment"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={350}
                >
                  <StyledButton
                    color="primary"
                    size="large"
                    variant="contained"
                  >
                    Explore treatments
                  </StyledButton>
                </ScrollLink>
                <ScrollLink
                  to="video-section"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={350}
                >
                  <StyledButton
                    color="primary"
                    size="large"
                    variant="outlined"
                    startIcon={<PlayArrowIcon />}
                  >
                    Watch Testimonials
                  </StyledButton>
                </ScrollLink>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={5} sx={{ position: "relative" }}>
            {/* Sertificate badge */}
            {/* <Box
              sx={{
                position: 'absolute',
                bottom: 30,
                left: { xs: 0, md: -150 },
                boxShadow: 1,
                borderRadius: 3,
                px: 2,
                py: 1.4,
                zIndex: 1,
                backgroundColor: 'background.paper',
                display: 'flex',
                alignItems: 'flex-start',
                width: 280,
              }}
            >
              <Box
                sx={{
                  boxShadow: 1,
                  borderRadius: '50%',
                  width: 44,
                  height: 44,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mr: 2,
                  '& img': { width: '32px !important', height: 'auto' },
                }}
              >
                <Image src="/images/certificate.png" alt="Certificate icon" width={50} height={50} quality={97} />
              </Box>
              <Box>
                <Typography
                  component="h6"
                  sx={{ color: 'secondary.main', fontSize: '1.1rem', fontWeight: 700, mb: 0.5 }}
                >
                  Certificate
                </Typography>
                <Typography variant="subtitle1" sx={{ color: 'text.secondary', lineHeight: 1.3 }}>
                  There are certificates for all courses.
                </Typography>
              </Box>
            </Box> */}
            <Box sx={{ lineHeight: 0 }}>
              {/* <Image src="/images/home-hero.jpg" width={775} height={787} alt="Hero img" /> */}
              {/* <EnquiryForm /> */}
              <div>
                <Typography
                  variant="h2"
                  noWrap
                  sx={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    whiteSpace: "normal",
                    WebkitLineClamp: 2,
                  }}
                >
                  Reach out to plan your medical journey
                </Typography>
                <form onSubmit={handleSubmit}>
                  <TextField
                    label="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                  />
                  <TextField
                    label="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    type="email"
                  />
                  <FormControl fullWidth margin="normal" required>
                    <InputLabel id="country-label">Select Country</InputLabel>
                    <Select
                      labelId="country-label"
                      label="Select Country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                    >
                      {countries.map((country) => (
                        <MenuItem key={country.code} value={country.code}>
                          {country.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <Grid container spacing={2}>
                    <Grid item xs={3}>
                      <TextField
                        label="ISD Code"
                        value={formData.country}
                        variant="outlined"
                        margin="normal"
                        InputProps={{
                          readOnly: true,
                        }}
                      />
                    </Grid>
                    <Grid item xs={9}>
                      <TextField
                        label="Mobile Number"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        type="tel"
                      />
                    </Grid>
                  </Grid>
                  <TextField
                    label="Describe Medical Requirements"
                    name="medicalRequirements"
                    value={formData.medicalRequirements}
                    onChange={handleChange}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    multiline
                    rows={4}
                  />
                  <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                    fullWidth
                  >
                    {file ? `${file.name}` : "Upload file"}
                    <input
                      type="file"
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                    />

                    {!file && <> (No file selected)</>}
                  </Button>

                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    style={{ marginTop: 20 }}
                  >
                    Submit
                  </Button>
                </form>
              </div>
            </Box>
          </Grid>
        </Grid>

        {/* Experience */}
        <Box sx={{ boxShadow: 2, py: 4, px: 7, borderRadius: 4 }}>
          <Grid container spacing={2}>
            {exps.map((item) => (
              <Grid key={item.value} item xs={12} md={4}>
                <ExpItem item={item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeHero;
