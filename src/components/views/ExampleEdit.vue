<template>

    <div class="api-request">
      <h3>
        <span>返回示例</span>
      </h3>

      <div class="api-edit">
        <Input v-model="textInput" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入文字" />
      </div>
    </div>

</template>

<script scoped>
export default {
    name:'request',
    props:['api_id','data'],
    data: function () {
      return {
        textInput:'',
      }
    },
    computed:{
      text(){
        return JSON.stringify(this.data);
      }
    },
    watch:{
      text(v){
        this.textInput = v;
      }
    },
    methods: {
        // 请求数据添加字段
        reset(){
          this.textInput = JSON.stringify(this.data);
        },

    },
    mounted(){

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  h3 {
    margin:20px 0;
    display: flex;justify-content: space-between;align-items: center;
  }

  .api-edit {
    &-head {
      background: #fafafa;
      border-bottom:1px solid #CCC;
      font-weight: bold;
      color:#666;
      display: flex;
      span {
        padding:10px 2px;
        text-align: center;
      }
    }
    &-row {
      display: flex;
      padding:15px 0;
      border-bottom:1px solid #EEE;
      &-options {
        display: flex;
      }
      &>div {
        padding:0 2px;
        display: flex;align-items: center;justify-content: center;
      }
    }
  }
</style>
