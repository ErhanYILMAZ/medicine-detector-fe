import Vue from 'vue'
import Router from 'vue-router'
import ImageInputComponent from '@/components/ImageInputComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ImageInputComponent',
      component: ImageInputComponent
    }
  ]
})
