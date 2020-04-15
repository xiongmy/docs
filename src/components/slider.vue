<template>
  <!-- 公用slider -->
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
          v-if="item.length === 1"   
          :ref="`${item.path}`"
          :to="`/${$i18n.locale}/course/${item[0].path}`"
          :name="`${item.path}`"
          :key="index">
            {{$t(`${item[0].meta.subTitle}`)}}
        </Menu-item>

        <Submenu  
          v-if="item.length > 1"        
          :name="index"
          :key="index">
          <template slot="title">
            {{$t(`${item[0].meta.subTitle}`)}}
          </template>
          <MenuItem :ref="`${v.path}`"  :id="v.path" :to="`/${$i18n.locale}/${curBreadPath}/${v.path}`" :name="v.path" v-for="(v, i) in item" :key="i">
            {{$t(`${v.meta.title}`)}}
          </MenuItem>
        </Submenu>
      </template>
    </Menu>
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
    console.log(this.menuList)
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
 
  .slider {
    float: left;
    width: 200px;
    padding-top: 20px;
    height: calc(100vh - 58px);
    background: #CAD3DE;
    overflow: auto;
  }
  .ivu-menu-vertical .ivu-menu-submenu-title-icon{
    right: 5px;
  }
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
  .slider-menu{
    padding-bottom: 35px;
    padding-top: 35px;
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
  .ivu-menu {
    color: #546B7C;
  }
  .slider .ivu-menu-item {
    font-size: 13px;
  }
  .slider-menu::after {
    content: '';
    background: transparent;
  }

</style>
