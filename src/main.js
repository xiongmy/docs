import Vue from 'vue';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
// import 'github-markdown-css';
import animate from 'animate.css';
import '@/assets/font.scss';
import '@/assets/common.scss';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './i18n';
import './utils/util';
import en from './locales/en.json';
import zh from './locales/zh.json';

Vue.use(iView);
Vue.use(animate);

Vue.config.productionTip = false;

router.afterEach((to, from, next) => {
  // 切换页面重置滚动条
  window.scrollTo(0, 0);
  // 设置初始语言
  i18n.locale = i18n.locale;
  // 设置title
  document.title = i18n.t('appTitle');
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');

// 热更新 i18n
if (module.hot) {
  module.hot.accept(['./locales/en.json', './locales/zh.json'], () => {
    i18n.setLocaleMessage('en', en);
    i18n.setLocaleMessage('zh', zh);
  });
}
