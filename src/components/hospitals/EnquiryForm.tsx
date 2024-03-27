import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";

const EnquiryForm: React.FC<{ hospitalId?: string | number; onClose: () => void }> = ({ hospitalId = "", onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    mobileNumber: "",
    medicalRequirements: "",
  });

  const [formOpen, setFormOpen] = useState(true);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (hospitalId) {
      console.log("Hospital ID provided:", hospitalId);
    } else {
      console.log("No Hospital ID provided");
    }

    setFormOpen(false);

    if (typeof onClose === "function") {
      onClose();
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | { name?: string; value: unknown }>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name!]: value });
  };
  const handleChange2 = (event: SelectChangeEvent<string>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      {formOpen && (
        <Container>
          <Box display="flex" justifyContent="flex-start" alignItems="flex-start" my={2} height="100vh">
            <Paper style={{ width: "100%", padding: "20px" }}>
              <Typography variant="h5" gutterBottom>
                Please Enquire
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
                    onChange={handleChange2}
                  >
                    <MenuItem value="india">India</MenuItem>
                    <MenuItem value="australia">Australia</MenuItem>
                  </Select>
                </FormControl>
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
                <TextField
                  label="Medical Requirements"
                  name="medicalRequirements"
                  value={formData.medicalRequirements}
                  onChange={handleChange}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  multiline
                  rows={4}
                />
                <Button type="submit" variant="contained" color="primary" style={{ marginTop: 20 }}>
                  Submit
                </Button>
              </form>
            </Paper>
          </Box>
        </Container>
      )}
    </>
  );
};

export default EnquiryForm;
