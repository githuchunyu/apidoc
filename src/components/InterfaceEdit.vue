<template>

  <div class="interface">
      <h3>基本信息</h3>
      <Form :label-width="80">
        <FormItem label="接口名">
          <Input v-model="data.title"></Input>
        </FormItem>
        <FormItem label="接口方法">
          <Select v-model="data.type" style="width:120px" placeholder="选择请求方法">
            <Option value="GET">GET</Option>
            <Option value="POST">POST</Option>
          </Select>
        </FormItem>
        <FormItem label="接口简介">
          <Input v-model="data.description"></Input>
        </FormItem>
        <FormItem label="接口地址">
          <Input v-model="data.url"></Input>
        </FormItem>
        <FormItem label="接口权限">
          <Select v-model="data.auth" style="width:120px" placeholder="选择接口权限">
            <Option value="all">所有</Option>
            <Option value="admin">管理员</Option>
            <Option value="user">用户</Option>
            <Option value="either">登录</Option>
          </Select>
        </FormItem>
      </Form>
      <RequestEdit :api_id="data.id" :data="data.request"></RequestEdit>
      <ResponseEdit :api_id="data.id" :data="data.response"></ResponseEdit>
      <ExampleEdit :data="data.example" ref="exampleEdit"></ExampleEdit>
  </div>
</template>

<script>
import RequestEdit from './views/RequestEdit'
import ResponseEdit from './views/ResponseEdit'
import ExampleEdit from './views/ExampleEdit'
export default {
  name: 'Home',
  components:{
    RequestEdit,
    ResponseEdit,
    ExampleEdit
  },
  props:{
    data:{
      type:Object,
    },
    base_url:{
      type:String,
    }
  },
  data () {
    return {
    }
  },
  computed:{

  },
  mounted(){

  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
.code {
  pre {
    margin:0;
  }
}
.interface {
  // height:600px;overflow:auto;
  padding:0 50px;
  h2 {
    margin:36px 0 12px 0;
  }
  h3 {
    margin:20px 0;
    display: flex;justify-content: space-between;align-items: center;
  }
  &-title {
    display: flex;align-items: center;
    width:480px;
    span {
      width:100px;
    }
  }
  &-description {
    display: flex;align-items: center;
    width:100%;
    span {
      width:100px;
    }
  }
  h4 {
    margin:20px 0 8px 0;
    padding:8px;
    background: #fafafa;
  }
  &-auth {
    font-size: 12px;
    color:#AAA;
    span {
      color:#666;
    }
  }
  &-describe {
    margin:8px 0;
  }
  &-url {
    background: #f8f8f9;
    color:#515a6e;
    padding:8px;
    strong {
      color:#17233d;
    }
  }
}

</style>
