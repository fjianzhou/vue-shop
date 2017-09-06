<template>
  <div>
    <Search :msg="title"></Search>
    <div class="productList">
      <!--<ul>-->
        <!--<li v-for="(key,index) in data">-->
          <!--<img :src="key.pic" alt="">-->
          <!--<p>{{key.product}}&#45;&#45;&#45;&#45;{{key.price}}</p>-->

        <!--</li>-->

      <!--</ul>-->
      <!--<Swipe class="my-swipe" :>-->
        <!--<SwipeItem class="slide1">www</SwipeItem>-->
        <!--<SwipeItem class="slide2">www</SwipeItem>-->
        <!--<SwipeItem class="slide3">www</SwipeItem>-->
      <!--</Swipe>-->
      <vue-loop :full="true" :horizontal="false">
        <div class="item">
          1
        </div>
        <div class="item">
          2
        </div>
        <div class="item">
          3
        </div>
        <div class="item">
          4
        </div>
      </vue-loop>
    </div>
  </div>


</template>


<style lang="less">
  .productList{
    .my-swipe {
      height: 300px;
      color: #fff;
      font-size: 30px;
      text-align: center;
    }
    .slide1 {
      background-color: #0089dc;
      color: #fff;
    }

    .slide2 {
      background-color: #ffd705;
      color: #000;
    }

    .slide3 {
      background-color: #ff2d4b;
      color: #fff;
    }
    ul{
      float: left;
      width: 100%;
      margin-top: 10px;
      li{
        float: left;
        height: 200px;
        width: 48%;
        margin: 0 1%;
        margin-bottom: 2%;
        border: 1px solid #d9d9d9;
        box-sizing: border-box;
        background: #ffffff;
      }
    }
  }

</style>


<script>
  import Search from '../components/SearchHeader'
  import NavTab from '../components/NavTab'
  import axios from 'axios'
  import { Swipe, SwipeItem } from 'vue-swipe';
  require("swiper/dist/css/swiper.css")
  import VueAwesomeSwiper from 'vue-awesome-swiper'
  import VueLoop from 'vue-loop'

  export default{
    name: 'Home',
    mounted(){
      let that=this;
      axios.get('http://localhost:4000/get').then(function(response){
        console.log(response)
        response.data.map(item => {
          item.src = require(`@/assets/img/images/${item.pic}`)
        });
        console.log(response.data)
        that.data=response.data;
        console.log(that.data)

      })
    },
    data(){
        return{
          title:'请输入搜索内容',
          data:[],
        }
    },
    components:{
      Search,
      Swipe,
      SwipeItem,
      VueLoop
    }
  }
</script>
