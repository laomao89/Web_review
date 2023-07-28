<template>
  <div>
    <h1>{{title}}</h1>
    <h1>{{pndk}}</h1>
    <button @click="edit">编辑</button>
    <div class="box">
      <div class="min">
        标题: <input type="text" v-model="n_title">
      </div>
      <div class="min">
        频道: <input type="text" v-model="n_pndk">
      </div>
      <div class="min">
        <button @click="cancel" class="btn1">取消</button>
        <button @click="sure" class="btn2">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      title:'xxxx标题',
      pndk:'xxxx频道',

      //表单内数据
      n_title:"",
      n_pndk:"",
    }
  },
  methods:{
    edit(){
        //点击后上面的数据来到下面数据
        this.n_title = this.title;
        this.n_pndk = this.pndk;
    },
    
    sure(){
      //把输入框的数据设置给上面
      this.title = this.n_title;
      this.pndk = this.n_pndk;
      //同时把输入框里的数据清空
      this.n_title ="";
      this.n_pndk = "";
    },
    cancel(){
      //输入框清空
      this.n_title = "";
      this.n_pndk = '';
    }
  }
}
</script>

<style lang="less">
.box{
  width: 1900px;
  .min{
    width: 300px;
    height: 35px;
    margin: 15px auto;
    .btn1  {
      border-radius: 5px;
      background: #bdbdbe
      ;border: 1px solid #bdbdbe;
    }
    .btn2{
        border-radius:5px ;
        margin-left: 15px;
        background: #005b8b;
        border: 1px solid #005b8b;
      }

  }
}

</style>