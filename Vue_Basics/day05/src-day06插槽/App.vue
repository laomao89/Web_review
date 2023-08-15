<template>
  <div>
    <!-- 具名插槽 -->
    <!-- <cpt2>
      <template v-slot:content>
        <p>我是一首诗的名称</p>
      </template>

      <template v-slot:content>
        <ul>
          <li>xxxxxx</li>
          <li>xxxxxx</li>
          <li>xxxxxx</li>
          <li>xxxxxx</li>
          <li>xxxxxx</li>
          <li>xxxxxx</li>
        </ul>
      </template>
    </cpt2>

    <cpt2>
      <template #content>
        <h2>vue logo</h2>
      </template>
      <template #content>
        <img src="./assets/logo.png" alt="">
      </template>
    </cpt2> -->

    <!-- 作用域插槽 -->
    <!-- <cpt-3>
      <template v-slot="getSon">
        <img :src="getSon.img" alt="">
      </template>
    </cpt-3>
    
    <cpt3>
      <template v-slot="getSon">
        <a href="getSon.img">点击跳转</a>
      </template>
    </cpt3> -->


    <!-- 变化结构 -->
    <!-- <cpt-4>
      <template v-slot="scope">
        <h1>{{scope.row.name}}</h1>
        <h1>{{scope.row.age}}</h1>
        <h1>{{scope.row.sex}}</h1>
      </template>
    </cpt-4> -->

    <!-- 具名与作用域插槽 -->
    <cpt-5>
      <!-- 先犯错:v-slot:t v-slot="scope", 
        后整合 v-slot:t="scope"-->
      <template v-slot:t ="scope">
        <h1>{{scope.row.title}}</h1>
      </template>
     
      <template #c="scope">
        <ul>
          <li>{{scope.row.content}}</li>
          <li>{{scope.row.content}}</li>
          <li>{{scope.row.content}}</li>
          <li>{{scope.row.content}}</li>
          <li>{{scope.row.content}}</li>
          <li>{{scope.row.content}}</li>
          <li>{{scope.row.content}}</li>
          <li>{{scope.row.content}}</li>
        </ul>
      </template>

      <template v-slot:="scope">
        <div>
          <img :src="scope.row" alt="">
        </div>
      </template> 
    </cpt-5>

  </div>
</template>

<script>
import cpt1 from './components/01-自定义组件回顾.vue'
import cpt2 from './components/02-具名插槽.vue'
import cpt3 from './components/03-作用域插槽,.vue'
import cpt4 from './components/04-作用域插槽.vue'
import cpt5 from './components/05-具名与作用域插槽.vue'
export default {
  components:{
    cpt1,
    cpt2,
    cpt3,
    cpt4,
    cpt5,
  }
}
</script>

<style>

</style>