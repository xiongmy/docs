<template>
  <div class="course-container">
    <slider :menuList="menuList"/>
    <div class="course-content">
      <div class="common-container">
        <transition name="fade" mode="out-in">
          <router-view class="markdown-body"></router-view>
        </transition>
        <buttons :pathList="pathList"></buttons>
      </div>
    </div>
  </div>
</template>
<script>
import slider from '@/components/slider.vue';
import buttons from '@/components/buttons.vue';
import { getMenuList } from '@/utils/util';

export default {
  name: 'course-entry',
  data() {
    return {
      menuList: [],
      pathList: [],
    };
  },
  components: {
    slider, buttons,
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
      const menu = [];
      this.menuList = [];
      this.pathList = [];
      routes.forEach((val) => {
        if (menu[val.meta.subTitle]) {
          menu[val.meta.subTitle].push(val);
        } else {
          menu[val.meta.subTitle] = [];
          menu[val.meta.subTitle].push(val);
        }
      });
      Object.keys(menu).map(val => this.menuList.push(menu[val]));
      if (this.menuList.length) {
        this.menuList.map((val) => {
          if (val instanceof Array) {
            val.map(v => this.pathList.push(v.path));
          } else {
            this.pathList.push(val[0].path);
          }
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
  .course-content {
    border-top: 6px solid #eff3f8;
    width: calc(100% - 220px);
    height: calc(100vh - 58px);
    overflow: auto;
    float: left;
  }
  .common-container{
    position: relative;
    min-height: calc(100vh - 70px);
    padding: 30px 30px 60px 30px;
    background: #fff;
    letter-spacing: 1px;
  }
</style>
