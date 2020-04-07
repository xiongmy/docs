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
    width: 1180px;
    position: relative;
    padding: 60px 0 10px 26%;
    user-select: none;
  }
  /*@media(min-width: 768px){
    .course-content{
      max-height: 700px;
      overflow-y: scroll;
      &::-webkit-scrollbar{
        width: 0;
      }
    }
  }*/
  @media screen and (min-width:769px) and (max-width:1200px) {
    .course-container {
      width: 100%;
    }
    .course-content{
      width: auto;
      padding: 80px 0 300px 26%;
    }
  }
  @media(max-width: 768px){
    .course-container{
      width: 92%;
      margin: 0 auto;
      padding-top: 50px;
      padding-bottom: 350px;
      .course-content{
        width: 100%;
        padding: 0;
      }
    }
  }
</style>
