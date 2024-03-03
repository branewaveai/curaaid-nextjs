// src/components/LoginDialog.tsx

import { Button, Dialog, DialogContent, DialogTitle, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { setPhoneNumber } from "../../actions/loginActions";
import { RootState } from "../../store"; // Assuming you have a store setup with RootState type

interface LoginDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginDialog: React.FC<LoginDialogProps> = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const phoneNumber = useSelector((state: RootState) => state.login.phoneNumber);
  const isLoggedIn = useSelector((state: RootState) => state.login.isLoggedIn);
  const navigate = useNavigate();

  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isSendButtonDisabled, setIsSendButtonDisabled] = useState(false);
  const [secondsRemaining, setSecondsRemaining] = useState(30);

  const handleSendOtp = () => {
    setIsOtpSent(true);
    setIsSendButtonDisabled(true);
    startCountdown();
  };

  const startCountdown = () => {
    let seconds = 30;

    const countdownInterval = setInterval(() => {
      setSecondsRemaining((prevSeconds) => prevSeconds - 1);

      if (seconds === 0) {
        clearInterval(countdownInterval);
        setIsSendButtonDisabled(false);
        setSecondsRemaining(30);
      }
    }, 3000);
  };

  const handleLogin = () => {
    if (!phoneNumber) {
      toast.error("Please enter phone number", {
        position: "top-right",
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "Light",
      });
      return;
    }
    if (!otp) {
      toast.error("Please enter OTP", {
        position: "top-right",
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "Light",
      });
      return;
    }
    const userName = "John Doe";
    // setItem("userName", userName);
    // Your remaining login logic here
  };

  return (
    <>
      <Dialog open={isOpen} onClose={onClose}>
        <DialogTitle sx={{ backgroundColor: "#f0f8ff", color: "black" }}>
          Login
        </DialogTitle>
        <DialogContent sx={{ backgroundColor: "#f0f8ff", padding: "16px" }}>
          <TextField
            label="Phone Number"
            type="tel"
            value={phoneNumber}
            onChange={(e) => dispatch(setPhoneNumber(e.target.value))}
            fullWidth
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSendOtp}
            disabled={isSendButtonDisabled}
            sx={{ mt: 2, backgroundColor: "darkgreen", color: "white" }}
          >
            {isSendButtonDisabled
              ? `Resend OTP in ${secondsRemaining} seconds`
              : "Send OTP"}
          </Button>
          {isOtpSent && (
            <>
              <TextField
                label="Enter OTP"
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                fullWidth
                margin="normal"
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleLogin}
                sx={{ mt: 2, backgroundColor: "darkgreen", color: "white" }}
              >
                Login
              </Button>
            </>
          )}
          <p>
            Don't have an account?{" "}
            <Link to="/signup" onClick={onClose} style={{ color: "darkgreen" }}>
              Register here
            </Link>
          </p>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default LoginDialog;