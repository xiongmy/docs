<template>
  <div class="button-box">
      <div :class="['button', 'button-prev', {'disabled':this.pagePos===-1}]" @click="changePage(-1)">{{$t('previous')}}<span></span></div>
      <div :class="['button', 'button-next', {'disabled':this.pagePos===1}]" @click="changePage(1)"><span></span>{{$t('next')}}</div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      pagePos: 0,
      activeName: '',
    };
  },
  props: {
    pathList: {
      type: Array,
      required: true,
    },
  },
  watch: {
    $route(to, from) {
      this.updateButtons();
    },
    pathList() {
      this.updateButtons();
    },
  },
  mounted() {
    const { path } = this.$route;
    this.activeName = path.split('/')[3];
    this.pagePos = this.activeName === 'course1-1' ? -1 : 0;
  },

  methods: {
    updateButtons() {
      const { path } = this.$route;
      this.activeName = (path.split('/')[3]);
      if (this.pathList.indexOf(this.activeName) === 0) {
        this.pagePos = -1;
      } else if (this.pathList.indexOf(this.activeName) === this.pathList.length - 1) {
        this.pagePos = 1;
      } else {
        this.pagePos = 0;
      }
    },
    changePage(dir) {
      this.activeName = this.$route.path.split('/')[3];
      let index = this.pathList.indexOf(this.activeName);
      let path;
      if (dir === -1 && this.pagePos === -1) return;
      if (dir === 1 && this.pagePos === 1) return;
      path = this.pathList[index + dir];
      this.activeName = path;
      if (path) {
        this.$router.push({
          path: `/${this.$i18n.locale}/course/${path}`,
        });
        index += dir;
        if (index === 0) {
          this.pagePos = -1;
        } else if (index === this.pathList.length - 1) {
          this.pagePos = 1;
        } else {
          this.pagePos = 0;
        }
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.button-box{
    position: absolute;
    left: 50%;
    bottom: 20px;
    margin-left: -120px;
    display: flex;
    width: 240px;
    height: 30px;
    .button{
        width: 110px;
        margin-right: 10px;
        font-size:14px;
        color: #546B7C;
        line-height: 30px;
        cursor: pointer;
        &.disabled{
            color: #98AAC1;
        }
        span{
            display: inline-block;
            width: 42px;
            height: 30px;
            vertical-align: top;

        }
        &.button-prev{
            span{
                background: url('../assets/images/common/icon_before_small_pre.png') no-repeat center;
            }
        }
        &.button-prev.disabled{
            span{
                background: url('../assets/images/common/icon_behind_small_nor.png') no-repeat center;
                transform: rotate(180deg);
            }
        }
        &.button-next{
            span{
                background: url('../assets/images/common/icon_before_small_pre.png') no-repeat  center;
                transform: rotate(180deg);
            }
        }
        &.button-next.disabled{
            span{
                background: url('../assets/images/common/icon_behind_small_nor.png') no-repeat center;
                transform: rotate(0);
            }
        }
    }
}
</style>
