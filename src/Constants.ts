// export const Base_url = "https://curaaid.connect.com/"

// export const LoginUser = "https://448yam6tmc.execute-api.ap-south-1.amazonaws.com/dev//login";
// export const SignUpUser = "https://448yam6tmc.execute-api.ap-south-1.amazonaws.com/dev//register";
// export const Treatments = "https://448yam6tmc.execute-api.ap-south-1.amazonaws.com/dev/treatments";
const BASE_URL = "https://448yam6tmc.execute-api.ap-south-1.amazonaws.com/dev";

export const LoginUser = `${BASE_URL}//login`;
export const SignUpUser = `${BASE_URL}//register`;
export const TreatmentsDetails = `${BASE_URL}/treatments`;
console.log(BASE_URL); // Output: https://curaaid.connect.com/

export const LOGIN_CHK = {
    isLoggedIn: false
}

export const CONST_KEYS = {
    token: 'token',
    user: 'user'
}

export const JSON_EXCEL_DATA = {
    jsondata: {}
}