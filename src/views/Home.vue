<template>
  <div class="home">
    <input v-model="test"/>
    <demo></demo>
    指令
    <div v-demo="test"></div>
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
        test: "测试指令value"
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
    }
  }
</script>
