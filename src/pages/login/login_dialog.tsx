import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { setIsOpenLoginDialog, setIsOpenSignupDialog, setPhoneNumber } from "../../actions/loginActions";
import { RootState } from "../../store";
interface LoginDialogProps {
  isOpen: boolean;
}

const LoginDialog: React.FC<LoginDialogProps> = ({ isOpen}) => {
  const dispatch = useDispatch();
  const isOpenLoginDialog = useSelector((state: RootState) => state.login.isOpenLoginDialog);
  const isOpenSignupDialog = useSelector((state: RootState) => state.login.isOpenSignupDialog);
  const openLogin = () => {
    dispatch(setIsOpenLoginDialog(!isOpenLoginDialog));
  };

  const openSignup = () => {
    dispatch(setIsOpenSignupDialog(!isOpenSignupDialog));
  };
  const phoneNumber = useSelector(
    (state: RootState) => state.login.phoneNumber
  );
  const isLoggedIn = useSelector((state: RootState) => state.login.isLoggedIn);
  const router = useRouter(); // Use Next.js useRouter hook

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
    // router.push("/dashboard"); // Example redirect to dashboard after login
  };
  const handleRegisterClick = () => {
    dispatch(setIsOpenSignupDialog(true));
    dispatch(setIsOpenLoginDialog(false));
  };

  return (
    <>
      <Dialog open={isOpen} onClose={ openLogin}>
        <DialogTitle sx={{ backgroundColor: "#f0f8ff", color: "primary.main" }}>
          Login with CuraAid
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
      </Dialog>
    </>
  );
};

export default LoginDialog;
