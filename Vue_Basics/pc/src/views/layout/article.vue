<template>
  <div class="article-page">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>面经后台</el-breadcrumb-item>
      <el-breadcrumb-item>面经管理</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card shadow="never" border="false">
      <template #header>
        <div class="header">
          <span>共 {{ total }} 条记录</span>
          <el-button
            icon="el-icon-plus"
            size="small"
            type="primary"
            round
            @click="open('add')">
            添加面经
          </el-button>
        </div>
      </template>

      <el-table
      :data="tableData"
      style="width: 100%">

        <el-table-column prop="stem" label="标题" width="400"></el-table-column>
        <el-table-column prop="creator" label="作者"> </el-table-column>
        <el-table-column prop="likeCount" label="点赞"> </el-table-column>
        <el-table-column prop="views" label="浏览数"> </el-table-column>
        <el-table-column prop="createdAt" label="更新时间" width="200"></el-table-column>

        <el-table-column label="操作">
          <template slot-scope="scope">
            <div class="actions">
              <i class="el-icon-view" @click="open('view',scope.row.id)"></i>
              <i class="el-icon-edit-outline" @click="open('edit',scope.row.id)"></i>
              <i class="el-icon-delete" @click="del(scope.row.id)"></i>
            </div>
          </template>
        </el-table-column>

      </el-table>

      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="current"
        :page-sizes="[10, 15, 20, 25]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
    </el-pagination>

      <!-- 抽屉 -->
      <el-drawer
        size="70%"
        :title="title"
        :visible.sync="drawer"
        direction="rtl"
        :before-close="close">

        <!-- 预览  不能是form -->
        <div v-if="title==='预览文章'" class="article-preview">
          <h5>{{ form.stem }}</h5>
          <div v-html="form.content"></div>
        </div>

        <!-- 新增和编辑  是form-->
        <el-form v-else :model="form" ref="form" label-width="80px" :rules="rules">
          <el-form-item label="标题" prop="stem">
            <el-input v-model="form.stem" placeholder="输入面经标题"></el-input>
          </el-form-item>
          <el-form-item label="内容" prop="content">
            <!-- 富文本编辑器（功能非常强大像用word编辑器）组件是其他组件，不是elementUI -->
            <quill-editor v-model="form.content" @blur="blur"></quill-editor>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="sure">确认</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>

      </el-drawer>

      <!-- title：随着不同的功能，展示文字也不一样！ -->
      <!--     1、变量 -->
      <!--     2、三个功能需要改变title 新增、预览、编辑 -->
      <!--        如何做到点击新增的时候：title显示就是 新增文章 -->
      <!--        三种按钮肯定会注册点击事件，点击的时候给传不同参数！ -->

    </el-card>
  </div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'

export default {
  name: 'article-page',
  data () {
    return {
      tableData: [],
      current: 1,
      pageSize: 10,
      total: 0,

      drawer: false, // 抽屉是否显示
      title: '新增文章',

      form: { // 用于新增数据 编辑的数据
        stem: '',
        content: ''
      },
      id: null, // 没有什么哪个数据的id要编辑

      rules: {
        // 规则名：必须和form某些数据属性名得一致！
        stem: [{ required: true, message: '请输入文章标题', trigger: 'blur' }],
        content: [{ required: true, message: '请输入文章内容', trigger: 'blur' }]
      }
    }
  },
  components: {
    quillEditor
  },
  created () {
    this.init()
  },
  methods: {
    // 初始化数据
    async init () {
      const { data } = await this.$axios({
        url: '/admin/interview/query',
        params: {
          current: this.current, // 不是写死的
          pageSize: this.pageSize
        }
      })

      this.tableData = data.data.rows // 重新赋值了！
      this.total = data.data.total // 数据总共有多少条
    },
    // 条码
    handleSizeChange (val) {
    // console.log(`每页 ${val} 条`)
      this.pageSize = val

      this.init()
    },
    // 页码
    handleCurrentChange (val) {
      this.current = val

      // ajax代码重新执行下：再请求12页数据
      this.init()
    },
    // 关闭抽屉
    close () {
      this.drawer = false

      // 不是预览的时候才能执行
      if (this.title !== '预览文章') {
        this.$refs.form.resetFields()
      }
    },
    // 打开抽屉：新增、编辑、预览
    async open (type, id) {
      this.drawer = true
      if (type === 'add') { // 点击的新增
        this.title = '新增文章'

        this.form.stem = ''
        this.form.content = ''
      } else if (type === 'view') { // 点击是预览
        this.title = '预览文章'

        // 数据回显
        const { data } = await this.$axios({ url: '/admin/interview/show', params: { id } })
        this.form.stem = data.data.stem
        this.form.content = data.data.content
      } else if (type === 'edit') { // 点击是编辑
        this.title = '编辑文章'

        // 问题：form一出现的时候，自动先进行一次校验！此时数据回显没有完成！校验结果：没有内容！
        // 解决：
        //    1、我想在数据回来之前，您尽管校验!我是执行重置（把校验结果清空！）
        //    2、测试  this.$refs.form.resetFields()   报错：resetFields被undefined调用！
        //    3、在控制台发现div（form）结构，被创建被销毁！动态出现
        //    4、DOM节点创建更新这些都是异步的！this.$refs.form页面中还没有！
        //    5、this.$nextTick 获取真实dom节点 组件对象！

        this.$nextTick(async () => {
          this.$refs.form.resetFields()

          // 数据回显：
          //     1、请求数据 需要id，
          //     2、获取到数据，设置给this.form对象
          const { data } = await this.$axios({ url: '/admin/interview/show', params: { id } })

          this.form.stem = data.data.stem
          this.form.content = data.data.content
          this.id = id // 记录下当前点击是哪个文章！下面真的要修改数据的时候，需要id!
        })
      }
    },
    // 富文本编辑器：写JS代码失去焦点的时候，去校验！
    blur () {
      // 1、注册失去焦点事件 查文档！@blur
      // 2、调用form内置方法
      this.$refs.form.validateField('content')
    },
    // 确认：
    sure () {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          // 函数内需要一个标识 ：用于区分新增 还是编辑
          //      1、title 点击不同按钮，title值不同！
          //      2、标识title可以用这个!
          // ****************************************新增
          if (this.title === '新增文章') {
            // 提交数据
            await this.$axios({
              url: '/admin/interview/create',
              method: 'POST',
              data: this.form
            })

            // 重新加载列表：第一页！
            this.current = 1
            this.init()
          } else if (this.title === '编辑文章') { // **************************编辑
            // 编辑  id?当前用户点击这个文章的id? !
            await this.$axios({
              url: '/admin/interview/update',
              method: 'PUT',
              data: {
                stem: this.form.stem,
                content: this.form.content,
                id: this.id
              }
            })

            this.init() // 编辑后，不需要重头开始，从当前开始！
          }

          // 2、关闭抽屉
          this.close()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    async del (id) {
      // 需求：自己加询问？！

      // 1、传入id值，接口需要！
      // 2、去哪找id？文档学习后 scope.row.id 获取到
      await this.$axios({ url: '/admin/interview/remove', method: 'delete', data: { id } })

      // 弹窗显示删除成功：
      this.$message({
        message: '删除成功',
        type: 'success'
      })

      // 从第一页开始
      this.current = 1
      this.init()
    }
  }
}
</script>

<style lang="scss" scoped>
.el-card {
  margin-top: 25px;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 16px;
  }
  .actions {
    font-size: 18px;
    display: flex;
    justify-content: space-around;
    color: #666;
    > i:hover {
      color: rgba(114, 124, 245, 1);
      cursor: pointer;
    }
  }
}
.el-pagination {
  margin-top: 20px;
  text-align: center;
}
.el-breadcrumb {
  margin-top: 10px;
}
.el-form {
  padding-right: 40px;
}
.quill-editor {
  ::v-deep .ql-editor {
    height: 300px;
  }
}
.el-rate {
  padding: 10px 0;
}
.article-preview {
  padding: 0 40px 40px 40px;
  > h5 {
    font-size: 20px;
    color: #666;
    border-bottom: 1px dashed #ccc;
    padding-bottom: 30px;
    margin: 0 0 20px 0;
  }
}
</style>
