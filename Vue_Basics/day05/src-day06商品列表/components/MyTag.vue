<template>
  <div class="my-tag">
    <input
      ref="ipt"
      class="input"
      type="text"
      placeholder="输入标签"
      v-if="key"
      @blur="blur"
      v-model="tag"
      @keydown.enter="enter"
    />
    <div class="text" v-else @dblclick="edit">{{value}}</div>
    <!-- 业务： -->
    <!--    1、v-model="value"不能直接改：value的值是外面传入，不能违反单向数据流原则 -->
    <!--    2、v-model="自己变量tag"，双击的时候，把value的值赋值给自己变量tag -->
    <!--    3、v-model="自己变量tag" 直接改，按下回车，把确定这个值发信号出去给父级！-->

  </div>
</template>

<script>
export default {
  data(){
    return{
      key:false,  //不出现输入框
      tag:'',
    }
  },
  methods:{
    edit(){
      this.key = true;

      //1、获取input。focus()
      this.$nextTick(() => {
        this.$refs.ipt.focus();
      });
       // 把info的值给我们自己的变量
       this.tag = this.value;
    },
    blur(){
      this.key = false;
    },
    enter(){
      //输入框
      this.key = false;

      //把我们的值发信号给父级
      this.$emit("input",this.tag)
    }
  },
  props:["value"]
  //参数:接受外面的数据
    //传入的是简单数据类型
    //v-model不能直接修改里面的参数
};
</script>

<style lang="less" scoped>
.my-tag {
  cursor: pointer;
  .input {
    appearance: none;
    outline: none;
    border: 1px solid #ccc;
    width: 100px;
    height: 40px;
    box-sizing: border-box;
    padding: 10px;
    color: #666;
    &::placeholder {
      color: #666;
    }
  }
}
</style>