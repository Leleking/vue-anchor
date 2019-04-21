import store from '@/store'
import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)
import {getHeader} from '@/utils/api'
import constants from '@/utils/constants'
const Watch_All_Requests = () => {
    const {LOGIN_URL,SIGNUP_URL} = constants
    Vue.config.productionTip = false
    Vue.http.interceptors.push(function(request, next) {
    store.dispatch('setLoading',true)
    if(request.url !==  LOGIN_URL || request.url !== SIGNUP_URL){
        const header = getHeader()
        request.headers.set('Authorization', header.Authorization)
        request.headers.set('Accept' ,header.Accept)  
        next((response)=>{
            store.dispatch('setLoading',false)
            return response
    })

    }else{
        
        store.dispatch('setLoading',true)
        next()
    }



})

}
export default Watch_All_Requests