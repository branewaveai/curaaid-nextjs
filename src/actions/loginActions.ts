export const setPhoneNumber = (phoneNumber: string) => ({
  type: "SET_PHONE_NUMBER",
  payload: phoneNumber,
});

export const setIsLoggedIn = (isLoggedIn: boolean) => ({
  type: "SET_IS_LOGGED_IN",
  payload: isLoggedIn,
});

export const setIsOpenLoginDialog = (isOpen: boolean) => ({
  type: "SET_IS_OPEN_LOGIN_DIALOG",
  payload: isOpen,
});

export const setIsOpenSignupDialog = (isOpen: boolean) => ({
  type: "SET_IS_OPEN_SIGNUP_DIALOG",
  payload: isOpen,
});

