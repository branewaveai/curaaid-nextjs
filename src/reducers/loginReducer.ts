const initialState = {
    phoneNumber: "",
    isLoggedIn: false,
    isOpenLoginDialog: false,
    isOpenSignupDialog: false,
  };
  
  const reducer = (state = initialState, action: { type: any; payload: any; }) => {
    switch (action.type) {
      case "SET_PHONE_NUMBER":
        return {
          ...state,
          phoneNumber: action.payload,
        };
      case "SET_IS_LOGGED_IN":
        return {
          ...state,
          isLoggedIn: action.payload,
        };
      case "SET_IS_OPEN_LOGIN_DIALOG":
        return {
          ...state,
          isOpenLoginDialog: action.payload,
        };
      case "SET_IS_OPEN_SIGNUP_DIALOG":
        return {
          ...state,
          isOpenSignupDialog: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  