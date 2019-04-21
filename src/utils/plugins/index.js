/* eslint-disable */
import {Watch_REQUEST,GlobalComponents} from './modules'
import  filters    from '../filters'
import  constants  from '../constants'
const plugins = {
    install(Vue,options){
        Vue.config.productionTip = !process.env.VUE_APP_DEBUG
        GlobalComponents()
        Watch_REQUEST()
        Vue.use(filters)
        Vue.mixin({
            data() {
                return {
                    APP_CONSTANTS: {...constants}
                }
            },
        })
        //const APP_CONSTANTS = vue_constants
    }
}
export default plugins