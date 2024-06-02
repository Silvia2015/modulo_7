import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import LoginView from '@/views/LoginView.vue';
import CarritoProductosView from '@/views/CarritoProductosView.vue';



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Home', component: HomeView, meta: {requiresAuth: true }},
    { path: '/login', name: 'Login', component: LoginView},
   { path: '/carrito', name: 'Carrito', component: CarritoProductosView,  meta: {requiresAuth: true }}
  ]
});
// beforEach se ejecuta antes de cada ruta
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  
  if(to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next('/login')
  } else {
    next()
  }

});

export default router

