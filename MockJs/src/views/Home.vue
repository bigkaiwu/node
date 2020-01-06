<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <button @click="getData"> 生成数据 </button> 
    <ul>
      <li v-for="(stu,index) in mockData" :key="index">
        {{ stu.name}}-{{ stu.age }}
      </li>
    </ul>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Mock from 'mockjs'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data(){
    return{
      mockData: [] 
    }
  },
  methods:{
    getData(){
      this.mockData = Mock.mock({
        'students|1-10': [{
              name: '@NAME',
              'age|0-50': 1
          }]
      })
       document.body.innerHTML += '<pre>' + JSON.stringify(this.mockData, null, 4) + '</pre>' 
    }
  }
}
</script>
