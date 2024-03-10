import Footer from '@/components/footer/footer';
import Header from '@/components/header/headerstmp';
import { Box } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const ThanksPage: React.FC = () => {
  const router = useRouter();


const navigateToLandingPage = () => {
  router.push('/');
}
  return (
    <>
    <Box component="main">
      <Header />
      <div>
      <h1>Thanks</h1>
      <Link href="/#specific-section">
  <a>Go back to landing page</a>
</Link>
    </div>
      <Footer />
    </Box>
    </>
  );
};

export default ThanksPage;
