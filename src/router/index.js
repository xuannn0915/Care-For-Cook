import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'FrontPage',
    component: () => import('../views/FrontPage.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('../views/HomePage.vue'),
      },
      // 關於櫂料理
      {
        path: '/about_brand',
        name: 'Brand',
        component: () => import('../views/About/AboutBrand.vue'),
      },
      {
        path: '/about_quality',
        name: 'Quality',
        component: () => import('../views/About/AboutQuality.vue'),
      },
      // 好料報你知
      {
        path: '/category_customMeal',
        name: 'CustomMeal',
        component: () => import('../views/Category/CustomMeal.vue'),
      },
      {
        path: '/category_highProtein',
        name: 'HighProtein',
        component: () => import('../views/Category/HighProtein.vue'),
      },
      {
        path: '/category_lunchBox',
        name: 'LunchBox',
        component: () => import('../views/Category/LunchBox.vue'),
      },
      {
        path: '/productsList',
        name: 'About',
        component: () => import('../views/ProductList.vue'),
      },
      {
        path: '/comment',
        name: 'Category',
        component: () => import('../views/CustomerComment.vue'),
      },
      {
        path: '/notes',
        name: 'Category',
        component: () => import('../views/ShoppingNotes.vue'),
      },
      {
        path: '/contact',
        name: 'Contact',
        component: () => import('../views/ContactUs.vue'),
      },
      {
        path: '/cart',
        name: 'Cart',
        component: () => import('../views/ShoppingCart.vue'),
      },
      {
        path: '/userInfo',
        name: 'UserInfo',
        component: () => import('../views/UserInfo.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginPage.vue'),
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/DashBoard/BackStage.vue'),
    children: [
      {
        path: '/productList',
        name: 'BackStage_ProductList',
        component: () => import('../views/DashBoard/BackStage_ProductList.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,
});

export default router;
