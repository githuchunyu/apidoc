<template>

    <div class="api-request">
      <h3>
        <span>数据结构</span>
        <div class="btns">
          <Button type="success" icon="plus" @click="add">添加字段</Button>
        </div>
      </h3>

      <div class="api-edit">
        <div class="api-edit-head">
          <span style="width:200px;">名称</span>
          <span style="width:120px;">类型</span>
          <span style="width:500px;">描述</span>
          <span style="width:120px;">示例</span>
          <span style="flex:1;">操作</span>
        </div>
        <div class="api-edit-row" v-for="l,i in list" :key="i">
          <div style="width:200px;"><Input v-model="l.field"></Input></div>
          <div style="width:120px;">
            <Select v-model="l.type">
              <Option v-for="item in ['String','Int']" :value="item" :key="item">{{ item }}</Option>
            </Select>
          </div>
          <div style="width:500px;"><Input v-model="l.description"></Input></div>
          <div style="width:120px;"><Input v-model="l.example"></Input></div>
          <div style="flex:1;">
            <ButtonGroup>
              <Button @click="()=>deleteRow(i)">删除</Button>
              <Button @click="()=>upRow(i)" :disabled="i==0">上移</Button>
              <Button @click="()=>downRow(i)" :disabled="i==list.length-1">下移</Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
    </div>

</template>

<script scoped>
export default {
    name:'request',
    props:['api_id','data'],
    data: function () {
      return {

      }
    },
    computed:{
      list(){
        return this.data;
      }
    },
    methods: {
        // 请求数据添加字段
        add(){
          let ziduan = {
            index:-1,
            field:'ziduan',
            type:'',
            required:false,
            default:'',
            description:'',
            example:'',
            optional:false,
            options:[],
          };
          this.list.push(ziduan);
        },

        // 删除数据字段
        deleteRow(index){
          this.list.splice(index,1);
        },

        // 上移数据字段
        upRow(index){
          let ii = this.list[index];
          this.list.splice(index,1)
          this.list.splice(index-1,0,ii);
        },
        downRow(index){
          let ii = this.list[index];
          this.list.splice(index,1)
          this.list.splice(index+1,0,ii);
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
