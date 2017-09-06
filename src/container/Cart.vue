<template>
  <div>
    Cart--{{msg}}
  </div>
</template>

<style>

</style>

<script>
  export default{
    name:'Cart',
    beforeCreate(){
        console.log(this.$route)
    },
    created(){

    },
    mounted(){
        setTimeout(()=>{
            let query=this.$route.query;
            let params=this.$route.params;
          this.$data.msg=`${query.plan}:${params.xx}`;
        },2000)

    },
    data(){
      return{
          msg:'xxx1'
      }
    }
  }

</script>

