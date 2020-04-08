<template>
  <div class="course-container">
    <slider :menuList="menuList"/>
    <div class="course-content">
      <div class="common-container">
        <transition name="fade" mode="out-in">
          <router-view class="markdown-body"></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import slider from '@/components/slider.vue';
import { getMenuList } from '@/utils/util';

export default {
  name: 'course-entry',
  data() {
    return {
      menuList: [],
    };
  },
  components: {
    slider,
  },
  mounted() {
    this.filterMenu();
  },
  watch: {
    '$i18n.locale': function localeChange() {
      this.filterMenu();
    },
  },
  methods: {
    filterMenu() {
      const { $router } = this;
      const routes = getMenuList($router, `${this.$i18n.locale}/course`);
      const menu = {};
      this.menuList = [];
      routes.forEach((val) => {
        if (menu[val.meta.subTitle]) {
          menu[val.meta.subTitle].push(val);
        } else {
          menu[val.meta.subTitle] = [];
          menu[val.meta.subTitle].push(val);
        }
      });
      Object.keys(menu).map(val => this.menuList.push(menu[val]));
    },
  },
};
</script>
<style lang="scss" scoped>
  .course-content {
    border-top: 6px solid #eff3f8;
    width: calc(100% - 200px);
    height: calc(100vh - 58px);
    overflow: auto;
    float: left;
  }
  .common-container{
    padding: 20px;
    background: #fff;
  }
</style>
