export const getHeader = () => {
    console.log(12)
    if (process.env.VUE_APP_CLIENT_ID && process.env.VUE_APP_CLIENT_SECRET) {
        if (JSON.parse(window.localStorage.getItem('authUser'))) {
            const tokenData = JSON.parse(window.localStorage.getItem('authUser'))
            const headers = {
                Accept: 'application/json',
                Authorization: 'Bearer ' + tokenData.access_token
            }
            return headers
        } else {
            const headers = {
                Accept: 'application/json',
                Authorization: 'Bearer '
            }
            return headers
        }
    } else if (!process.env.VUE_APP_CLIENT_ID && process.env.VUE_APP_CLIENT_SECRET) {
        console.warn("VUE_APP_CLIENT_ID not set, please set it in your .env file")
    } else if (process.env.VUE_APP_CLIENT_ID && !process.env.VUE_APP_CLIENT_SECRET) {
        console.warn("VUE_APP_CLIENT_SECRET not set, please set it in your .env file")
    }
}