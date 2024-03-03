// import { StyledButton } from '@/components/styled-button'
// import Box from '@mui/material/Box'
// import { FC } from 'react'

// const AuthNavigation: FC = () => {
//   return (
//     <Box sx={{ '& button:first-child': { mr: 2 } }}>
//       <StyledButton disableHoverEffect={true} variant="outlined">
//         Sign In
//       </StyledButton>
//       <StyledButton disableHoverEffect={true}>Sign Up</StyledButton>
//     </Box>
//   )
// }

// export default AuthNavigation
import { StyledButton } from '@/components/styled-button';
import Box from '@mui/material/Box';
import { FC, useState } from 'react';
import { Login } from '../../pages/login/index';

const AuthNavigation: FC = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const openLoginDialog = () => {
    setIsLoginOpen(true);
  };

  const closeLoginDialog = () => {
    setIsLoginOpen(false);
  };

  return (
    <>
      <Box sx={{ '& button:first-child': { mr: 2 } }}>
        <StyledButton
          disableHoverEffect={true}
          variant="outlined"
          onClick={openLoginDialog} // Open login dialog on button click
        >
          Sign In
        </StyledButton>
        <StyledButton disableHoverEffect={true}>Sign Up</StyledButton>
      </Box>
      <Login isOpen={isLoginOpen} onClose={closeLoginDialog} /> {/* Render login dialog */}
    </>
  );
};

export default AuthNavigation;
