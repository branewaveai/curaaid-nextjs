import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import doPostRequest from "../../utils/apiRequest";

interface FormData {
  name: string;
  email: string;
  country: string;
  mobileNumber: string;
  medicalRequirements: string;
  countryCode: string;
}

var countries = [
  { code: "+251", label: "Ethiopia" },
  { code: "+233", label: "Ghana" },
  { code: "+91", label: "India" },
  { code: "+254", label: "Kenya" },
  { code: "+234", label: "Nigeria" },
  { code: "+27", label: "South Africa" },
  { code: "+249", label: "Sudan" },
  { code: "+255", label: "Tanzania" },
  { code: "+1", label: "United States" },
  { code: "+263", label: "Zimbabwe" },
  { code: "+256", label: "Uganda" },
  { code: "+260", label: "Zambia" },
  { code: "+258", label: "Mozambique" },
  { code: "+264", label: "Namibia" },
  { code: "+235", label: "Chad" },
  { code: "+249", label: "Sudan" },
  { code: "+250", label: "Rwanda" },
];

const EnquiryForm: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    country: "",
    mobileNumber: "",
    medicalRequirements: "",
    countryCode: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  countries.sort((a, b) => {
    const labelA = a.label.toUpperCase();
    const labelB = b.label.toUpperCase();
    if (labelA < labelB) {
      return -1;
    }
    if (labelA > labelB) {
      return 1;
    }
    return 0;
  });
  useEffect(() => {
    if (router.pathname === "/thanks") {
      const newPath = "/";
      window.history.replaceState(null, "", newPath);
    }
  }, [router]);
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
    const { name, value } = event.target as { name?: string; value: string };
    if (name === "country") {
      console.log("in");
      const selectedCountry = countries.find(
        (country) => country.label === value
      );
      if (selectedCountry) {
        console.log(selectedCountry.code);
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name as string]: value,
          countryCode: selectedCountry.code,
        }));
      }
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name as string]: value,
      }));
    }
  };

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    const { name, email, country, mobileNumber, medicalRequirements } =
      formData;
    const isValidMobileNumber = /^\d{3,15}$/.test(mobileNumber);

    if (!isValidMobileNumber) {
      console.warn("Invalid mobile number");
      const mobileNumberInput =
        document.querySelector<HTMLInputElement>("#mobileNumber");
      if (mobileNumberInput) mobileNumberInput.focus();
      return;
    }
    const requestBody = {
      name: formData.name,
      email: formData.email,
      countryName: formData.country,
      phoneNumber: formData.mobileNumber,
      desc: formData.medicalRequirements,
    };

    const headers = {
      "Content-Type": "application/json",
    };
    doPostRequest(
      "https://staging.curaaid.com/submit-enquiry",
      requestBody,
      headers
    )
      .then((response) => {
        if (response.ok) {
          if (response.status === 200) {
            console.log("Form submitted:", formData);
            setSubmitted(true);
            router.push("/thanks");
          } else {
          }
        } else {
          const responseDataPromise = response.json();
          responseDataPromise.then((data) => {
            console.error(
              "Submission failed with status:",
              response.status,
              "and message:",
              data.message
            );
            alert("Submission failed: " + data.message);
          });
          if (response.status === 400 || response.status === 500) {
            alert("Submission failed. Please check your input and try again.");
          } else if (response.status === 401) {
          }
        }
      })
      .catch((error) => {
        alert("Submission failed. Please check your input and try again.");
        console.error("Error:", error);
      });
    console.log("Form submitted:", formData);
  };

  return (
    <Box sx={{ lineHeight: 0 }}>
      <div>
        <Typography
          component="h2"
          sx={{
            color: "black",
            fontSize: "1.5rem",
            fontWeight: 700,
            mb: 0.5,
            textAlign: "center",
          }}
        >
          Book free consultation with our expert Doctors
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
                <MenuItem key={country.code} value={country.label}>
                  {country.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <TextField
                label="ISD Code"
                value={formData.countryCode}
                variant="outlined"
                margin="normal"
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={9}>
              <TextField
                id="mobileNumber"
                label="Mobile Number"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                type="tel"
                inputProps={{
                  minLength: 3,
                  maxLength: 15,
                }}
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
          {/* <Button
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
          </Button> */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginTop: 20, width: 150 }}
          >
            Submit
          </Button>
        </form>
      </div>
    </Box>
  );
};

export default EnquiryForm;
