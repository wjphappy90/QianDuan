<template>
  <div id="app">
    <img src="./assets/logo.png">
    <ul>
      <li v-for="(item,index) in cartList" :key="item.id">
        <h2>{{item.title}}</h2>
        <p>{{item.price}}</p>
        <el-button @click="addCart(index)" type='success'>添加购物车</el-button>
      </li>
    </ul>
    <my-cart :title="title"></my-cart>
    <FormElement></FormElement>
  </div>
</template>

<script>
import MyCart from "./components/Cart";
// @ 相当于src目录
import FormElement from '@/components/FormElement.vue';

export default {
  name: "app",
  data() {
    return {
      title: "购物车",
      cartList:[]
    };
  },
  async created() {
    // this.$http.get('/api/cartList')
    // .then(res=>{
    //   this.cartList = res.data.result;

    // }).catch(err=>{
    //   console.log(err);

    // })
    try {
      const res = await this.$http.get("/api/cartList");
      this.cartList = res.data.result;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    addCart(i) {
      const good = this.cartList[i];
      this.$bus.$emit('addCart',good);
    }
  },
  components: {
    MyCart,
    FormElement
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
   

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
