import { StyledButton } from '@/components/styled-button';
import { RootState } from '@/store';
import Box from '@mui/material/Box';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsOpenLoginDialog, setIsOpenSignupDialog } from '../../actions/loginActions';
import Login from '../../pages/login/login_dialog';
import SignupDialog from '../../pages/signup/signupDialog';

const AuthNavigation: FC = () => {
  const dispatch = useDispatch();
  const isOpenLoginDialog = useSelector((state: RootState) => state.login.isOpenLoginDialog);
  const isOpenSignupDialog = useSelector((state: RootState) => state.login.isOpenSignupDialog);
  const openLogin = () => {
    dispatch(setIsOpenLoginDialog(!isOpenLoginDialog));
  };

  const openSignup = () => {
    dispatch(setIsOpenSignupDialog(!isOpenSignupDialog));
  };

  return (
    <>
      <Box sx={{ '& button:first-child': { mr: 2 } }}>
        <StyledButton
          disableHoverEffect={true}
          variant="outlined"
          onClick={openLogin}
        >
          Sign In
        </StyledButton>
        <StyledButton disableHoverEffect={true} onClick={openSignup}>
          Sign Up
        </StyledButton>
      </Box>
      <Login isOpen={isOpenLoginDialog}/>
      <SignupDialog isOpen={isOpenSignupDialog}/>
    </>
  );
};

export default AuthNavigation;
