import { setIsOpenSignupDialog } from "@/actions/loginActions";
import { RootState } from "@/store";
import { Dialog, DialogContent } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import Signup from "./signup";
interface SignupDialogProps {
  isOpen: boolean;
}

const SignupDialog: React.FC<SignupDialogProps> = ({ isOpen}) => {
    const dispatch = useDispatch();
    const isOpenLoginDialog = useSelector((state: RootState) => state.login.isOpenLoginDialog);
    const isOpenSignupDialog = useSelector((state: RootState) => state.login.isOpenSignupDialog);
    const openSignup = () => {
      dispatch(setIsOpenSignupDialog(!isOpenSignupDialog));
    };
  return (
    <Dialog open={isOpenSignupDialog} onClose={openSignup}>
      {/* <DialogTitle>Signup</DialogTitle> */}
      <DialogContent>
        <Signup />
      </DialogContent>
    </Dialog>
  );
};

export default SignupDialog;
