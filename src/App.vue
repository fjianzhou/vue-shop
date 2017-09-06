<template>
  <div id="app">
    <router-view></router-view>
    <NavTab></NavTab>
  </div>
</template>

<style>

</style>

<script>
  import NavTab from './components/NavTab'
  console.log(NavTab)
  export default{
      name:'app',
      components:{
        NavTab
      }
  }

</script>
