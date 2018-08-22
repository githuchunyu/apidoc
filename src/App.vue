<template>
    <div class="container" id="app">
        <div class="header">
          <Menu ref="menu" mode="horizontal" theme="light">
            <div class="header-wrap">
              <div class="header-logo">RUOK文档</div>
              <div class="header-nav">
                <MenuItem v-for="v in views" :name="v.name" :key="v.name">{{v.label}}</MenuItem>
              </div>
            </div>
          </Menu>
        </div>
        <div class="views"><router-view></router-view></div>

    </div>
</template>

<script>
import base from "./base"
export default {
    name: 'app',
    components: {

    },
    data: function () {
        return {
            views:[
                {name:'api',label:'API接口',to:''},
                {name:'task',label:'WS消息',to:''},
            ]
        }
    },
    computed:{
        isLogin(){
            return this.$store.state.isLogin;
        }
    },
    methods:{
        checkLogin(){
            $.post(this.$store.state.apiUrl+'adminCheckLogin.php',{
                token:base.getCookie('token'),
            },(data)=>{
                data = JSON.parse(data);
                if (data.retcode==0) {

                } else {
                    this.$store.commit('logout');
                    this.$router.replace({name:'login'});
                }

            })
        }
    },
    watch:{
        isLogin(v){
            if (!v) {
                this.$router.replace({name:'login'});
            } else {
                this.$router.replace({name:'home'});
            }
        }
    },
    mounted(){

    }
}
</script>

<style lang="less">
  // normalize
html,body {
    margin: 0;padding: 0;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    background: #FFF;
    -webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;
    height:100%;
    color:#333;
}
* {
  outline:none;
}
input {
    outline: none;
    box-sizing: border-box;
    font-size: 14px;
    font-family: 'PingFangSC', 'Microsoft Yahei';
}
ul,li {
    margin: 0;padding: 0;
    list-style: none;
}
a {
    text-decoration: none;
    color: #000;
}
a:hover {
    color:#1f5cf6;
}
.header {
  position: fixed;top:0;left:0;right:0;height:60px;z-index: 1000;
  &-wrap {
    display: flex;
  }
  &-logo {
    color:#333;
    width:240px;text-align: center;
    margin-right:36px;
    font-weight: bold;
    font-size: 16px;
  }
}
.container {
    width:100%;height:100%;
}

.views {
  padding-top:60px;
  padding-left:240px;
  background: #EEE;
}
// 每个视图的布局
.view {
  // background: #FFF;
  display: flex;
  .view-menu {
    position: fixed;top:60px;left:0;
    width:240px;bottom:0;
    text-align: left;
    overflow: hidden;
    &-wrap {
      position:absolute;
      z-index: 200;
      top:0;left:0;width:260px;bottom:0;
      overflow-y: scroll;
      overflow-x:hidden;
    }
  }
  .view-content {
    box-sizing: border-box;
    padding:20px;width:960px;
    overflow-y: auto;
    &-wrap {
      position: relative;
    }
    h2 {
      margin:36px 0 12px 0;
    }
    .view-description {
      h3 {
        margin:20px 0 10px 0;
        &:nth-of-type(1) {
          margin:0 0 10px 0;
        }
      }
      &-url {
        margin:5px 0;
        span {
          color:#999;margin-right:10px;
        }
      }
    }
  }
}
</style>
<style>
    .ivu-tabs {
        display: flex;width:100%;
        flex-direction: column;
    }
    .ivu-tabs-content {
        flex:1;width:100%;
        display: flex;
    }
    .ivu-tabs-tabpane {
        overflow-x: auto;
    }
</style>
