// src/reducers/loginReducer.js
const initialState = {
    phoneNumber: "",
    isLoggedIn: false,
  };
  const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_PHONE_NUMBER":
        return { ...state, phoneNumber: action.payload };
      case "SET_IS_LOGGED_IN":
        return { ...state, isLoggedIn: action.payload };
      
      default:
        return state;
    }
  };
  
  export default loginReducer;
  