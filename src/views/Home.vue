<template>
  <div class="home">
    <input v-model="test"/>
    <demo></demo>
    <span class="test">指令</span>
    <div v-demo="test"></div>
    输入数字，敲回车键更新指令数据滚动<input @keyup.enter="updateTestNum" v-model="testNum"/>
    <div v-scroll-number="scrollOption"></div>
    filter
    <div>{{test | demo(1)}}</div>
  </div>
</template>

<script>

  import Demo from "../components/common/Demo";

  export default {
    name: 'Home',
    components: {Demo},
    data() {
      return {
        test: "测试指令value",
        testNum: 1000,
        scrollOption: {
          value: 0, target: 1000, step: 0, time: 2
        }
      }
    },
    mounted() {
      let userInfo = this.$store.state.userInfo;
      console.log('init userInfo ', userInfo && userInfo.name);
      this.$store.dispatch('userInfo', {
        name: 'init userInfo'
      });
      let userInfo1 = this.$store.state.userInfo;
      console.log('init userInfo1 ', userInfo1 && userInfo1.name);

      let orderInfo = this.$store.state.order.orderInfo;
      console.log('init orderInfo ', orderInfo && orderInfo.name);
      this.$store.dispatch('order/orderInfo', {
        name: 'init orderInfo'
      });
      let orderInfo1 = this.$store.state.order.orderInfo;
      console.log('init orderInfo1 ', orderInfo1 && orderInfo1.name);
    },
    methods: {
      updateTestNum() {
        this.scrollOption = {
          value: 0, target: this.testNum - 0, step: 0, time: 2
        };
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "@assets/css/variable";

  .test {
    font-weight: $fontBold;
  }
</style>
