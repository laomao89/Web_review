<template>
  <div>
    <p>具名：多处传入不同结构</p>
    <p>作用域：父级在传入结构的时候想用子组件内部数据</p>
    
    <p>
      <slot name="t" :row="obj">标题</slot>
    </p>
    <button @click="bt=!bt">{{bt?'折叠':'展开'}}</button>
    <hr>
    <p v-show="bt">
      <slot name="c" :row="obj">内容</slot>
    </p>
    <!-- 这是个小测试：杨幂图片 -->
    <br><br><br>
    <h1>杨幂时尚图</h1>
    <hr>
    <button @click="key=!key">{{key?'折叠':'展开'}}</button>
    <div v-show="key">    
      <slot v-for="item in img" :row="item"  >
        {{src}}
      </slot>
    </div>
    
  </div>
 
</template>

<script>
export default {
  data(){
    return{
      bt:true,
      key:true,
      obj:{
        title:'我是个标题',
        content:'我是一段文字'
      },
      img:{
        i1:'https://p3.itc.cn/images01/20210517/6648c2a6b87142749f81f813b8af1561.jpeg',
        i2:'https://p7.itc.cn/images01/20210517/c3def135f4b94e29bde93b3ad4d9b3d8.jpeg',
        i3:'https://p3.itc.cn/images01/20210517/c4a7907fc8b64681b3f1bacc6bcafd3d.jpeg',
        i4:'https://p4.itc.cn/images01/20210517/09c6586a6756444fb130d8fce6c2335f.jpeg',
        i5:'https://wx1.sinaimg.cn/orj360/002ZLx3Bly1hgqb255jx8j63344monpl02.jpg',
        i6:'https://imgsa.baidu.com/forum/w%3D288/sign=842e21a6593d26972ed30f556dfab24f/7b36a1014c086e06395723270a087bf40bd1cb0a.jpg',
        i7:'https://imgsa.baidu.com/forum/w%3D223/sign=80e41f26d2b44aed594eb9e6801d876a/80068a26cffc1e178c7e905d4290f603718de9cc.jpg',
        i8:'https://imgsa.baidu.com/forum/w%3D223/sign=6507bab37ec6a7efb926af24cefaafe9/c2463101213fb80ef9fa7ebb3ed12f2eb83894e6.jpg',
        i9:'https://imgsa.baidu.com/forum/w%3D223/sign=487dfb4f7bf082022d92963d78fafb8a/ca8ba318972bd407d0cccc9173899e510eb30986.jpg',
      },     
    }
  },
  methods:{
    
  }
}
</script>

<style lang="less" scoped>


</style>