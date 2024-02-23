/* eslint-disable import/no-extraneous-dependencies */
// 外部引入
import { createApp } from 'vue';
import { createPinia } from 'pinia';

// Loading
import LoadingOverlay from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

// axios
import axios from 'axios';
import VueAxios from 'vue-axios';

// vee validate
import {
  configure, defineRule, Form, Field, ErrorMessage,
} from 'vee-validate';
import * as AllRules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

// material icon
import 'material-icons/iconfont/material-icons.css';

// bootstrap
import * as bootstrap from 'bootstrap';

// 內部引入SRC
import App from './App.vue';
import router from './router';

const config = configure({
  generateMessage: localize({
    zh_TW: zhTW,
  }),
  validateOnInput: true, // 調整為即時驗證
});
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});
setLocale('zh_TW');

// 自己撰寫的程式碼
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component('LoadingComponent', LoadingOverlay);
app.use(VueAxios, axios);
app.use(config);
app.use(bootstrap);
app.component('VForm', Form);
app.component('VField', Field);
app.component('ErrorMessage', ErrorMessage);

app.mount('#app');
