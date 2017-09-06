<template>
  <ul class="nav">
    <router-link to="/home" tag="li" >
      <span>商品分类</span>
    </router-link>
    <router-link :to="{name:'cart', params:{xx:123},query:{ plan: 'private'}}" tag="li">
      <span>购物车</span>
    </router-link>
    <router-link to="/order" tag="li">
      <span>我的订单</span>
    </router-link>
    <router-link to="/profile" tag="li">
      <span>用户中心</span>
    </router-link>
  </ul>
</template>


<style lang="less">
  .nav{
    position: fixed;
    left: 0px;
    bottom: 0px;
    height: 50px;
    background: #000000;
    width: 100%;
    text-align: center;
    li{
      font-size: 12px;
      width: 25%;
      height: 100%;
      float:left;
      color:#ffffff;
      line-height: 50px;
    }
  }

</style>

<script>
  export default{
    name: 'navTab',
    data(){
      return{

      }
    }
  }
</script>
