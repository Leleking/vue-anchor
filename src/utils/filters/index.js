/* this folder registers all filters globally */
const filters =  {
    install(Vue){
        Vue.mixin({
            filters:{
                /* example filter */
                capitalize: (value) =>  {
                    if (!value) return ''
                    value = value.toString()
                    return value.charAt(0).toUpperCase() + value.slice(1)
                  }
            }
        })

    }
}

export default filters