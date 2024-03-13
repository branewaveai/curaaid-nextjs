import Footer from "@/components/footer/footer";
import Header from "@/components/header/headerstmp";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Script from "next/script";

const ThanksPage: React.FC = () => {
  const router = useRouter();
  useEffect(() => {
    if (router.pathname === "/thanks") {
      const newPath = "/";
      window.history.replaceState(null, "", newPath);
    }
  }, [router]);
  const navigateToLandingPage = () => {
    router.push("/");
  };

  return (
    <>
      <div>
        <Script id="conversion-analytics-script" strategy="lazyOnload">
          {`
            gtag('event', 'conversion', {
              'send_to': 'AW-16480308560/pEK6CJX2j5gZENCatrI9',
              'transaction_id': ''
            });
          `}
        </Script>
      </div>
      <Box component="main">
        <Header />
        <div style={{ height: "100%" }}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Box
              width="100%"
              alignItems="center"
              justifyContent="center"
              display="flex"
              flexDirection="column"
              minHeight="70vh"
              bgcolor="white"
              p={2}
              textAlign="center"
            >
              <svg
                fill="#137C71"
                viewBox="0 0 16 16"
                height="10em"
                width="10em"
              >
                <path d="M8 2a5.53 5.53 0 00-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 4.854l-3 3a.5.5 0 01-.708 0l-1.5-1.5a.5.5 0 11.708-.708L7 8.793l2.646-2.647a.5.5 0 01.708.708z" />
              </svg>
              {/* Content for second box */}
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontWeight: 700,
                  display: "inline-block",
                }}
              >
                Cura
                <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    fontWeight: 700,
                    display: "inline-block",
                  }}
                  color="primary.main"
                >
                  Aid
                </Typography>
              </Typography>
              <Typography variant="h1">Thanks for your submission!</Typography>
              <Typography variant="h2">
                We will get back to you soon.
              </Typography>
              <Link href="/">
              <Button
                variant="outlined"
                style={{
                  padding: "9px",
                  borderWidth: "1px",
                  borderColor: "#137C71",
                  marginTop: "2vh",
                  marginBottom: "2vh",
                }}
              >
                Back Home{" "}
              </Button>
              </Link>
              <Box style={{backgroundColor: '#87CEEB', marginTop: "5vh",}}>
                <Typography variant="h3" width="100%">
                  Don't let your medical expenses eat into your savings
                </Typography>
              </Box>
            </Box>
          </Box>
        </div>
        <Footer />
      </Box>
    </>
  );
};

export default ThanksPage;
