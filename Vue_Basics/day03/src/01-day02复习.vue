<template>
  <div>
    <p>
      v-show / v-if:出现消失
        v-show:控制元素css样式！页面出现频繁控制元素出现消失，推荐使用v-show
        v-if:控制元素创建销毁:(某个标签开始不需要出现,v-if='变量' 变量:false)
        v-if/else-if/else:分支,只会留下一个标签(不同类别标签)
    </p>

    <p>
      v-text/html:是否识别html结构的字符串
    </p>
    
    <p>
      v-model:数据双向绑定:表单元素！忽略value、checked属性,直接使用!
              修饰符: .number    .trim      .lazy:    数据改变后，才通知数据层发生改变
    </p>

    <p>
      v-for:遍历数据！循环那个标签就把该指令放在哪个标签上
        v-for"(item,i) in list"  v-for"item" in list
        :key=""
            1:不写:波浪线,vetur插件代码不全 默认按照下标给虚拟dom打标识
            2:index:按照下标给虚拟dom打标识index 就地复用dom节点效率会低
            3:id:按照下标给虚拟dom打标识id！就地复用dom节点会高
        
        概念:
            为什么不去对比真实dom？键值对太多！耗费性能
            虚拟dom？vue对照真实dom 对象映射！键值对精简 对比起来效率非常的高
            
    </p>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>