<template>
  <div class="search-wrap">
    <form action="/action/search">
      <div class="">
        <input type="text" class="" :placeholder="msg">
        <i></i>
      </div>
    </form>
  </div>

</template>


<script>
  export default{
    name: 'search',
    data(){
      return {}
    },
    props: {
      msg: {
        type: String,
        required: true
      }
    }

  }

</script>

<style lang="less">
  .search-wrap {
    padding: 0 20px;
    height: 30px;
    background: #ffffff;
    border: 1px solid #f4e5ba;
    border-radius: 7px;
    line-height: 30px;
    input {
      width: 100%;
      border: none;
    }
  }
</style>
