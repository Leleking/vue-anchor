import Vue from 'vue'
import Router from 'vue-router'
//import store from '../store'
import {routes} from './routes'

Vue.use(Router)
export const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })