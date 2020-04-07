import Vue from 'vue';
import Vuex from 'vuex';
import * as states from '@/store/CONSTANTS';
import UpdateConstants from '@/http';
import { getSign } from '@/utils/util';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    curBreadName: '',
    curBreadPath: '',
    curPageTitle: '',
    bottom: '30',
    versionArr: [],
    ...states,
  },
  getters: {
    curBreadName: state => state.curBreadName,
    curBreadPath: state => state.curBreadPath,
    curPageTitle: state => state.curPageTitle,
    ability: state => state.ability,
    support: state => state.support,
    api: state => state.api,
    footer: state => state.footer,
    versionArr: state => state.versionArr,
    bottom: state => state.bottom,
  },
  mutations: {
    GET_BREAD_NAME: (state, name) => {
      state.curBreadName = name;
    },
    GET_BREAD_PATH: (state, path) => {
      state.curBreadPath = path;
    },
    GET_PAGE_TITLE: (state, title) => {
      state.curPageTitle = title;
    },
    GET_VERSION_INFO: (state, versionArr) => {
      state.versionArr = versionArr;
    },
    GET_SLIDER_BOTTOM: (state, bottom) => {
      state.bottom = bottom;
    },
  },
  actions: {
    getBreadName({ commit }, breadInfo) {
      commit('GET_BREAD_NAME', breadInfo.name);
      commit('GET_BREAD_PATH', breadInfo.path);
      commit('GET_PAGE_TITLE', breadInfo.title);
    },
    setSliderBottom({ commit }, bottom) {
      commit('GET_SLIDER_BOTTOM', bottom);
    },
    getVersionData({ commit }) {
      const appId = UpdateConstants.appId;
      const deviceId = `${UpdateConstants.productName}_${new Date().getTime()}`;
      const sign = getSign(deviceId, UpdateConstants.appKey);

      const url = process.env.NODE_ENV && process.env.NODE_ENV === 'development' ? UpdateConstants.debugUrl : UpdateConstants.productUrl;
      console.log(process.env.NODE_ENV);
      const myInit = {
        headers: { // 根据协议添加头部
          'X-UBT-Sign': sign,
          'X-UBT-AppId': appId,
          Accept: 'application/json',
          'X-UBT-DeviceId': deviceId,
        },
      };

      UpdateConstants.request(url, myInit, (error, response) => {
        if (!error) {
          for (let i = 0; i < response.length; i += 1) {
            if (response[i][0].moduleName === 'yandev') {
              // this.versionArr = response[i];
              commit('GET_VERSION_INFO', response[i]);
            }
          }
        } else {
          console.log(error);
        }
      });
    },
  },
});
