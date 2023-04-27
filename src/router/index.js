import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/home.vue';
import CartPage from '@/views/Cartpage.vue';
import Contact from '@/views/contact.vue';
import About from '@/views/about.vue';
import Login from '@/views/login.vue';
import Register from '@/views/register.vue';
import Upload from '@/views/dataUpload.vue'
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Cart',
      name: 'CartPage',
      component: CartPage
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/Upload',
      name: 'Upload',
      component: Upload
    }


  ]
});
