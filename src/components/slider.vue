<template>
  <!-- 公用slider -->
  <div style="position: relative">
    <div class="slider-bg" :style="{'background': showSlider ?'rgba(10,16,23,.5)':'transparent'}" v-show="showSlider">
      <div class="slider scrollbar" id="slider" ref="slider" v-if="openNames">
        <Menu
          class="slider-menu"
          ref="menu"
          v-if="curBreadPath"
          @on-select="checkMenu"
          :width="'100%'"
          :theme="theme1"
          :open-names="openNames"
          :active-name="activeName"
        >
          <template v-for="(item, index) in menuList">
            <Menu-item
              v-if="curBreadPath === 'guide'"
              :ref="`${item.path}`"
              :to="`/${$i18n.locale}/${curBreadPath}/${item.path}`"
              :name="`${item.path}`"
              :key="index">
              {{$t(`${item.meta.title}`)}}
            </Menu-item>
            <Submenu
              v-if="curBreadPath === 'course'"
              :name="index"
              :key="index">
              <template slot="title">
                {{$t(`${item[0].meta.subTitle}`)}}
              </template>
              <MenuItem :ref="`${v.path}`" :id="v.path" :to="`/${$i18n.locale}/${curBreadPath}/${v.path}`" :name="v.path" v-for="(v, i) in item" :key="i">
                {{$t(`${v.meta.title}`)}}
              </MenuItem>
            </Submenu>
          </template>
        </Menu>
      </div>
    </div>
    <div :class="['menu-tag',{'active':showSlider}]" @click="toggleSlider()"></div>
  </div>

</template>
<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    menuList: {
      type: Array,
      required: true,
    },
  },
  computed: {
    ...mapGetters({
      curBreadPath: 'curBreadPath',
      curBreadName: 'curBreadName',
      bottom: 'bottom',
    }),
    openNames() {
      if (this.curBreadPath === 'guide') return [];
      const names = [];
      this.menuList.forEach((val, index) => {
        val.forEach((v) => {
          if (v.path === this.activeName) {
            names.push(index);
          }
        });
      });
      return names;
    },
  },
  data() {
    return {
      theme1: 'light',
      activeName: '',
      showSlider: parseInt(document.body.clientWidth, 10) > 768,
    };
  },
  watch: {
    $route() {
      const { path } = this.$route;
      this.activeName = (path.split('/')[3]);
    },
  },
  mounted() {
    const { path } = this.$route;
    this.activeName = (path.split('/')[3]);
    this.getOpenName();
  },
  methods: {
    checkMenu(activeName) {
      this.activeName = activeName;
      if (parseInt(document.body.clientWidth, 10) <= 768) {
        this.showSlider = false;
        document.getElementById('slider').style.left = '-160px';
      }
    },
    /**
     * 更新sub-title
     */
    getOpenName() {
      this.$nextTick(() => {
        this.$refs.menu.updateOpened();
        this.$refs.menu.updateActiveName();
        const slider = document.getElementById('slider');
        setTimeout(() => {
          const item = this.$refs[this.activeName];
          slider.scrollTo(0, item[0].$el.offsetTop + 35);
        }, 0);
      });
    },
    toggleSlider() {
      if (parseInt(document.body.clientWidth, 10) <= 768) {
        this.showSlider = !this.showSlider;
        if (this.showSlider) {
          document.getElementById('slider').style.left = '0';
        } else {
          document.getElementById('slider').style.left = '-160px';
        }
      }
    },
  },
};
</script>

<style lang="scss">
  .slider-bg{
    position: relative;
  }
  .slider {
    top: 86px;
    bottom:100px;
    z-index: 1;
    position: fixed;
    /*overflow-x: scroll;*/
    min-width: 15%;
    max-width: 15%;
    height:552px;
    overflow: scroll;
  }
  .ivu-menu-vertical .ivu-menu-submenu-title-icon{
    right: 5px;
  }
  @media(min-width: 769px){
  .slider::-webkit-scrollbar {
    height: 6px;
    width: 6px;
    background-color: transparent;
  }
  .slider:hover::-webkit-scrollbar-thumb {
    background-color: rgba(69,90,100,.2);
  }
  .slider::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: rgba(69,90,100,.2);
  }
}
  .slider-menu{
    padding-bottom: 35px;
    padding-top: 35px;
    background: #F5F6FA!important;
  }

  // 改写menu样式
  .ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu) {
    background-color: transparent;
  }
  .ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu):after {
    content: '';
    display: block;
    width: 2px;
    position: absolute;
    top: 10px;
    bottom: 10px;
    left: 0;
    background: #2d8cf0 ;
  }
  .ivu-menu-vertical.ivu-menu-light:after {
    content: '';
    display: block;
    width: 1px;
    height: 100%;
    background: transparent;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
  }
  .ivu-menu-vertical .ivu-menu-item:hover, .ivu-menu-vertical .ivu-menu-submenu-title:hover {
    background: #EAECF4;
    color: #000;
  }
  .ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu) {
    background-color: transparent;
  }
  .ivu-menu-vertical .ivu-menu-item, .ivu-menu-vertical .ivu-menu-submenu-title {
    padding: 8px 24px;
  }
  .ivu-menu-light {
    background: transparent;
  }
  .slider .ivu-menu-item {
    font-size: 13px;
  }
  .munu {
    background: #F5F6FA;
  }
  .slider-menu::after {
    content: '';
    background: transparent;
  }
  @media screen and (min-width:769px) and (max-width:1200px) {
    .slider {
      top: 80px;
      // bottom: 30px;
      // height: 400px;
      z-index: 1;
      position: fixed;
      overflow-x: scroll;
      min-width: 20%;
      max-width: 20%;
    }
  }
  @media(max-width: 768px){
    .slider-bg{
      position: fixed;
      width:100%;
      height:100%;
      left:0;
      top:0;
      background: rgba(10,16,23,.5);
      z-index: 99;
    }
    .slider{
      top:40px;
      left: -160px;
      max-width: 1190px;
      height: 450px;
      width: 190px;
      .slider-menu{
        width: 160px !important;
        background: #F5F6FA;
        .ivu-menu-item{
          font-size:12px;
        }
      }
    }
    .menu-tag{
      position: fixed;
      left:-3px;
      top:64px;
      width:34px;
      height:36px;
      background: url("../assets/images/common/ic_dropdown_down.png") no-repeat center;
      background-size:auto 100%;
      z-index: 99;
      &.active{
        left: 157px;
        background: url("../assets/images/common/ic_dropdown_up.png") no-repeat center;
        background-size:auto 100%;
      }
    }
  }
</style>
