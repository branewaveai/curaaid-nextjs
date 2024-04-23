import Footer from "@/components/footer/footer";
import Header from "@/components/header/headerstmp";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import Script from "next/script";
import React from "react";

const RefundPolicyPage: React.FC = () => {
  return (
    <>
      <Box component="main">
        <Header />
        <div style={{ height: "100%" }}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            sx={{ padding: "0 20px 20px 20px" }}
          >
            <Typography variant="h1" width="100%" marginY={2}>
              Cancellation & Refund Policy:
            </Typography>
            <Typography variant="body1">
              Thank you for choosing CuraAid for your teleconsultation needs. We
              are committed to providing you with high-quality healthcare
              services through our online platform. Please take a moment to
              review our Cancellation & Refund Policy outlined below:
            </Typography>
            <Typography
              variant="h3"
              width="100%"
              marginY={2}
              fontWeight="light"
            >
              Cancellation:
            </Typography>
            <Typography variant="body1">
              <Typography variant="body1" color="text.secondary">
                Once an appointment is scheduled and confirmed on our website,
                cancellations are not permitted. We operate on a strict
                scheduling system to ensure efficient service for all our
                patients.
              </Typography>
              <br /> Refunds: <br />
              <Typography variant="body1" color="text.secondary">
                CuraAid operates on a no-refund policy for teleconsultation
                services. Once an appointment is scheduled and payment is
                processed, refunds will not be issued under any circumstances,
                regardless of whether the consultation has occurred.
              </Typography>
              <br />
              Rescheduling: <br />
              <Typography variant="body1" color="text.secondary">
                If you need to reschedule your teleconsultation appointment,
                please contact our customer support team at least 24 hours
                before the scheduled appointment time. We will make every effort
                to accommodate your request, subject to availability.
              </Typography>
              <br /> Technical Issues: <br />
              <Typography variant="body1" color="text.secondary">
                Should you encounter any technical difficulties during your
                teleconsultation session that prevent the consultation from
                taking place or affect its quality, please contact our customer
                support team immediately. We will work swiftly to resolve any
                issues and ensure you receive the care you need.
              </Typography>
              <br />
              Exceptional Circumstances:
              <br />
              <Typography variant="body1" color="text.secondary">
                In rare cases of exceptional circumstances, such as documented
                medical emergencies or unavoidable technical failures on our
                part, we may consider providing a credit for a future
                teleconsultation appointment. Such cases will be reviewed on a
                case-by-case basis, and decisions will be at the sole discretion
                of CuraAid.
              </Typography>
              <Typography variant="body1" color="text.secondary">
                By utilizing our teleconsultation services, you acknowledge and
                agree to adhere to the terms and conditions of this Cancellation
                & Refund Policy. Should you have any questions or concerns
                regarding this policy, please do not hesitate to contact our
                customer support team for assistance.
                <br /> Thank you for your understanding and cooperation.
              </Typography>
            </Typography>
          </Box>
        </div>
        <Footer />
      </Box>
    </>
  );
};

export default RefundPolicyPage;
