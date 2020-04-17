<template>
  <div id="app">
    <!-- 公用头部 -->
    <common-header></common-header>
    <!-- 路由部分 -->
    <transition name="fade" mode="out-in" v-on:after-enter="afterEnter">
      <router-view class="body-content"/>
    </transition>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import commonHeader from '@/components/header.vue';

export default {
  components: {
    commonHeader,
  },
  data() {
    return {};
  },
  created() {
    document.querySelector('body').classList.add('scrollbar');
  },
  mounted() {
    this.setProgress();
    this.afterEnter();
  },
  methods: {
    ...mapActions(['setSliderBottom']),
    setProgress() {
      this.$router.beforeEach((to, from, next) => {
        this.$Loading.start();
        next();
      });
      this.$router.afterEach((to, from) => {
        this.$Loading.finish();
      });
    },
    afterEnter() {
      if (!this.$route.name || (this.$route.name && !this.$route.name.includes('yanshee-api'))) {
        this.showFooter = true;

        this.$nextTick(() => {
          function query(selector) {
            return Array.from(document.querySelectorAll(selector));
          }

          const observer = new IntersectionObserver(
            (changes) => {
              changes.forEach((change) => {
                if (change.intersectionRatio > 0 && change.intersectionRatio <= 1) {
                  // this.setSliderBottom('320');
                } else {
                  this.setSliderBottom('30');
                }
              });
            },
          );

          query('.footer').forEach((item) => {
            observer.observe(item);
          });
        });
      } else {
        this.showFooter = false;
      }
    },
    check(lang) {
      this.$i18n.locale = lang;
    },
  },
};
</script>


<style lang="scss">
#app {
  font-family: 'BebasNeue-Regular',sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  margin: 0 auto;
}

</style>
