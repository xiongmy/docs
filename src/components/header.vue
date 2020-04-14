<template>
  <div class="header">
    <div class="line"></div>
    <div class="left-box" @click="toHomePage">
      <div class="logo-icon"></div>
      <div class="logo-text">{{$t('appTitle')}}</div>
    </div>
    <Menu class="menu" @on-select="checkMenu" mode="horizontal" :theme="theme1" :active-name="activeName">                
        <!-- <Menu-item name=""> -->
          <Dropdown class="check-lang"  @on-click="check">
            <a href="javascript:void(0)">
              {{$t('lang')}}
              <Icon type="ios-arrow-down"></Icon>
            </a>
            <Dropdown-menu slot="list">
              <Dropdown-item :selected="$i18n.locale === 'zh'" name="zh">简体中文</Dropdown-item>
              <Dropdown-item :selected="$i18n.locale === 'en'" name="en">English</Dropdown-item>
            </Dropdown-menu>
          </Dropdown>
        <!-- </Menu-item> -->
    </Menu>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      theme1: 'dark',
      activeName: ''
    };
  },
  mounted() {
    const { path } = this.$route;
    this.activeName = path.split('/')[2];
    this.getLocalPathName();
  },
  watch: {
    $route() {
      const { path } = this.$route;
      this.activeName = path.split('/')[2];
      this.getLocalPathName();
    },
  },
  methods: {
    ...mapActions(['getBreadName']),
    toHomePage() {
      this.$router.push({
        name: '',
      });
    },
    checkMenu(activeName) {
      this.activeName = activeName;
    },
    getLocalPathName() {
      let { path } = this.$route;
      const { title } = this.$route.meta;
      path = path.split('/')[2];
      this.getBreadName({
        path,
        title: this.$i18n.t(title),
        name: this.$i18n.t(path ? `menu.${path}` : ''),
      });
    },
    check(lang) {
      const { path, name } = this.$route;
      this.$i18n.locale = lang;
      this.getLocalPathName();
      this.$router.push({
        path: `/${lang}/course`,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
 .header{
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height:58px;
  padding:0  20px;
  background: #FFF;
  .line{
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 3px;
    background:#FDBB11 ;
  }
  .left-box{
    flex: 1;
    cursor: pointer;
    .logo-icon{
      float: left;
      width: 113px;
      height: 51px;
      background: url("../assets/images/common/top_logo.png") no-repeat center;
      background-size: 100% auto;
    }
    .logo-text{
      float: left;
      font-size: 14px;
      color: #183C61;
      line-height: 66px;
      margin-left: 10px;
    }
  }
}
.ivu-menu-dark{
  background: transparent;
}
.menu{
  padding-right: 20px;
}
 
</style>
