import Vue from 'vue'
import _ from 'lodash'
const requireComponent = require.context('@/components',true,/[A-Z]\w+\.vue$/)

const getGlobalComponents = () => {
    
    requireComponent.keys().forEach(fileName => {
        const componentConfig = requireComponent(fileName)
        const componentName = _.upperFirst(
            _.camelCase(
                fileName.split('/').pop().replace(/\.\w+$/, '')
            )
        )
        Vue.component(componentName,componentConfig.default || componentConfig)
    }) 
}

export default getGlobalComponents