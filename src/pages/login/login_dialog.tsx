import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  setIsOpenLoginDialog,
  setIsOpenSignupDialog,
  setPhoneNumber,
} from "../../actions/loginActions";
import { RootState } from "../../store";
interface LoginDialogProps {
  isOpen: boolean;
}

// Import statements...

const LoginDialog: React.FC<LoginDialogProps> = ({ isOpen }) => {
  const dispatch = useDispatch();
  const isOpenLoginDialog = useSelector(
    (state: RootState) => state.login.isOpenLoginDialog
  );
  const phoneNumber = useSelector(
    (state: RootState) => state.login.phoneNumber
  );

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

      if (seconds === 1) {
        clearInterval(countdownInterval);
        setIsSendButtonDisabled(false);
        setSecondsRemaining(30);
      }
      seconds--;
    }, 1000);
  };

  const handleLogin = () => {
    if (!phoneNumber) {
      toast.error("Please enter phone number");
      return;
    }
    if (!otp) {
      toast.error("Please enter OTP");
      return;
    }
    // Your login logic...
    
    // Resetting states
    setOtp("");
    setIsOtpSent(false);
    setSecondsRemaining(30);

    // Closing the dialog
    dispatch(setIsOpenLoginDialog(false));
    dispatch(setPhoneNumber(''))
  };

  const handleRegisterClick = () => {
    dispatch(setIsOpenSignupDialog(true));
    dispatch(setIsOpenLoginDialog(false));
  };

  return (
    <>
      <Dialog open={isOpen} onClose={() => dispatch(setIsOpenLoginDialog(false))}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="100vh"
          marginTop={-10}
        >
          <img
            src="/images/avatars/Logo.jpg"
            alt="Logo"
            style={{ width: 100 }}
          />
          <DialogTitle
            sx={{ backgroundColor: "#f0f8ff", color: "primary.main" }}
          >
            Login with CuraAid
          </DialogTitle>
          <Box
            width={400}
            padding={3}
            boxShadow={3}
            borderRadius={8}
            bgcolor="white"
            textAlign="center"
          >
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
                <Link href="#">
                  <a
                    style={{ color: "darkgreen" }}
                    onClick={handleRegisterClick}
                  >
                    Register here
                  </a>
                </Link>
              </p>
            </DialogContent>
          </Box>
        </Box>
      </Dialog>
    </>
  );
};

export default LoginDialog;
