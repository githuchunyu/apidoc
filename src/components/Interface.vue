<template>

  <Card class="interface">
    <h3>
      <div class="interface-title"><Tag :color="data.type=='GET'?'green':'blue'">{{data.type}}</Tag>{{data.title}}</div>
      <div class="interface-edit">
        <Button type="error" @click="editInterface">删除</Button>
        <Button type="primary" @click="editInterface">编辑</Button>
      </div>
    </h3>
    <p class="interface-auth">接口权限 <span v-if="data.auth=='all'">开放</span><span v-if="data.auth=='admin'">管理员</span><span v-if="data.auth=='user'">用户</span><span v-if="data.auth=='either'">登录</span><span v-if="data.admin_level">>={{data.admin_level}}</span></p>
    <p class="interface-describe">{{data.description}}</p>
    <div class="interface-url">{{base_url}}<strong>{{data.url}}</strong></div>
    <Request :api_id="data.id" :data="data.request"></Request>
    <Response :api_id="data.id" :data="data.response" :example="data.example"></Response>
  </Card>
</template>

<script>
import Request from './views/Request'
import Response from './views/Response'
export default {
  name: 'Home',
  components:{
    Request,
    Response
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
    editInterface(){
      this.$emit('onEdit')
    },
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
  h2 {
    margin:36px 0 12px 0;
  }
  &-title {
    display: flex;align-items: center;
  }
  &-edit {
    opacity: 0;
    transition: opacity 0.3s;
  }
  &:hover .interface-edit {
    opacity: 1;
  }
  h3 {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
