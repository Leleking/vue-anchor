const API = process.env.VUE_APP_API_DOMAIN
const APP_CONSTANTS ={
    LOGIN_URL:API + "/oauth/token",
    USER_URL:API + "/api/user",
    SIGNUP_URL: API+"/api/user/signup"
}
export default APP_CONSTANTS