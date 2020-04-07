import Vue from 'vue';
import md5 from 'js-md5';

Vue.prototype.$console = (text) => {
  if (typeof text === 'string') {
    console.log(`%c ${text} `, 'background: #222; color: #bada55');
  } else if (typeof text === 'object') {
    console.log(text);
  }
};

export const getMenuList = (router, type) => {
  const { routes } = router.options;
  return routes.filter(val => val.path.includes(type))[0].children;
};

export const getSign = (deviceId, appKey) => {
  const randStr = '15a47g8O5F';
  const now = new Date().getTime();
  return `${md5(now + appKey + randStr + deviceId)} ${now} ${randStr} v2`;
};
