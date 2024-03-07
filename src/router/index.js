import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'FrontPage',
    component: () => import('../views/Fronted/FrontPage.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('../views/Fronted/HomePage.vue'),
      },
      // 關於櫂料理
      {
        path: '/about_brand',
        name: 'Brand',
        component: () => import('../views/Fronted/About/AboutBrand.vue'),
      },
      {
        path: '/about_quality',
        name: 'Quality',
        component: () => import('../views/Fronted/About/AboutQuality.vue'),
      },
      // 好料報你知
      {
        path: '/category_customMeal',
        name: 'CustomMeal',
        component: () => import('../views/Fronted/Category/CustomMeal.vue'),
      },
      {
        path: '/category_highProtein',
        name: 'HighProtein',
        component: () => import('../views/Fronted/Category/HighProtein.vue'),
      },
      {
        path: '/category_lunchBox',
        name: 'LunchBox',
        component: () => import('../views/Fronted/Category/LunchBox.vue'),
      },
      // 線上買好料
      {
        path: '/productsList',
        name: 'ProductList',
        component: () => import('../views/Fronted/Product/ProductList.vue'),
      },
      // 大家怎麼說
      {
        path: '/feedback',
        name: 'Feedback',
        component: () => import('../views/Fronted/Comment/CustomerFeedback.vue'),
      },
      {
        path: '/news',
        name: 'News',
        component: () => import('../views/Fronted/Comment/ArticleNews.vue'),
      },
      // 料理怎麼買
      {
        path: '/notes',
        name: 'Category',
        component: () => import('../views/Fronted/ShoppingNotes.vue'),
      },
      // 聯絡我們
      {
        path: '/contact',
        name: 'Contact',
        component: () => import('../views/Fronted/ContactUs.vue'),
      },
      // 購物車
      {
        path: '/cart',
        name: 'Cart',
        component: () => import('../views/Fronted/ShoppingCart.vue'),
      },
      // 帳戶資料
      {
        path: '/userInfo',
        name: 'UserInfo',
        component: () => import('../views/Fronted/UserInfo.vue'),
      },
      // 常見問題
      {
        path: '/faq',
        name: 'Question',
        component: () => import('../views/Fronted/QuestionPage.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Fronted/LoginPage.vue'),
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/DashBoard/BackStage.vue'),
    children: [
      {
        path: '/orders',
        name: 'BackStage_OrderList',
        component: () => import('../views/DashBoard/BackStage_OrderList.vue'),
      },
      {
        path: '/products',
        name: 'BackStage_ProductList',
        component: () => import('../views/DashBoard/BackStage_ProductList.vue'),
      },
      {
        path: '/articles',
        name: 'BackStage_ArticleList',
        component: () => import('../views/DashBoard/BackStage_ArticleList.vue'),
      },
      {
        path: '/comments',
        name: 'BackStage_CommentList',
        component: () => import('../views/DashBoard/BackStage_CommentList.vue'),
      },
      {
        path: '/contacts',
        name: 'BackStage_ContactList',
        component: () => import('../views/DashBoard/BackStage_ContactList.vue'),
      },
      {
        path: '/upload',
        name: 'BackStage_Upload',
        component: () => import('../views/DashBoard/BackStage_Upload.vue'),
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
