import {
  setIsOpenLoginDialog,
  setIsOpenSignupDialog,
} from "@/actions/loginActions";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SignUpUser } from "../../Constants";
import { doPostRequest } from "../../Request";
interface Country {
  code: string;
  name: string;
}

const Signup: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    country: "",
  });
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleInputChange = (e: SelectChangeEvent<string>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name as string]: value,
    });
  };

  const handleTextFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const countrys: Country[] = [
    { code: "+91", name: "India" },
    { code: "+880", name: "Bangladesh" },
    { code: "+61", name: "Australia" },
    { code: "+966", name: "Saudi Arabia" },
  ];

  const handleSignup = async () => {
    try {
      if (!formData.phoneNumber || !formData.fullName) {
        toast.error("Please enter all fields");
        return;
      }

      const chosenCountry = countrys.find(
        (country) => country.code === formData.country
      );
      const fullNumber = chosenCountry?.code + formData.phoneNumber;

      setLoading(true);

      const reqJson = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: fullNumber,
          name: formData.fullName,
          password: 12345,
          countryCode: formData.country,
          countryName: chosenCountry?.name,
        }),
      };

      doPostRequest(SignUpUser, reqJson, (resp: any) => {
        setLoading(false);
        if (resp.status === "SUCCESS") {
          toast.success("Signup Successful");
          router.push("/login");
        } else {
          toast.error("Signup Failed");
        }
      });
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  const closeSignupDialog = () => {
    dispatch(setIsOpenLoginDialog(true));
    dispatch(setIsOpenSignupDialog(false));
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      marginTop={-10}
    >
      <img src="/images/avatars/Logo.jpg" alt="Logo" style={{ width: 100 }} />
      <Box
        width={400}
        padding={3}
        boxShadow={3}
        borderRadius={8}
        bgcolor="white"
        textAlign="center"
      >
        <Typography variant="h5" gutterBottom>
          Signup with CuraAid
        </Typography>
        <TextField
          label="Full Name"
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleTextFieldChange}
          style={{ width: "100%" }}
          margin="normal"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="select-country-label">Select Country</InputLabel>
          <Select
            name="country"
            labelId="select-country-label"
            label="Select Country"
            value={formData.country}
            onChange={handleInputChange}
          >
            <MenuItem value="" disabled>
              Select country
            </MenuItem>
            {countrys.map((country) => (
              <MenuItem key={country.code} value={country.code}>
                <b style={{ fontSize: 16 }}>
                  {country.code} | {country.name}
                </b>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          label="Phone Number"
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleTextFieldChange}
          style={{ width: "100%" }}
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSignup}
          style={{ width: "100%", marginTop: 16 }}
          disabled={isLoading}
        >
          {isLoading ? "Signing up..." : "Signup"}
        </Button>
        <p>
          Already have an account?{" "}
          <Link href="#" passHref>
            <a onClick={closeSignupDialog}>Login here</a>
          </Link>
        </p>
      </Box>
      <ToastContainer />
    </Box>
  );
};

export default Signup;
