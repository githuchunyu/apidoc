<template>

    <div class="api-request">

      <h2>响应</h2>

      <h3>
        <span>数据结构</span>
      </h3>
      <Table :columns="column" :data="list" style="width:882px;"></Table>

      <h3>
        <span>返回示例</span>
      </h3>

      <div class="example">
        <div class="code" v-highlight>
          <pre v-html="example"></pre>
        </div>
      </div>

    </div>

</template>

<script scoped>
export default {
    name:'home',
    props:['api_id','data','example'],
    data: function () {
      return {
        list:this.data,
        column:[
          {
            title:'名称',
            key:'field',
            width:160,
            render: (h, params) => {
              let f = params.row.field.split('.');
              return h('div', {
                style:{
                  'font-weight':'bold',
                  'padding-left':16*(f.length-1)+'px',
                }
              },f[f.length-1]);
            }
          },
          {
            title:'类型',
            key:'type',
            width:200,
            render: (h, params) => {
              return h('div', {
                style:{
                  'font-style':'italic'
                }
              },params.row.type);
            }
          },
          {
            title:'描述',
            key:'description',
            width:260
          },
          {
            title:'示例值',
            key:'options',
            render: (h, params) => {
              if (params.row.optional) {
                return h('div',
                  params.row.options.map((item)=>{
                    return h('div',{
                      style:{
                        display:"flex",
                        margin:'4px 0',
                        alignItems:'center'
                      }
                    },[
                      h('span',{
                        style:{
                          width:'24px',
                          marginRight:'4px',
                          background:'#2d8cf0',
                          color:'#FFF',
                          padding:'2px 4px',
                          borderRadius:'4px'
                        }
                      },item.option),
                      h('span',item.label)
                    ])
                  })
                );
              } else {
                return h('div','')
              }

            }
          }
        ],
      }
    },
    computed:{

    },
    methods: {

    },
    mounted(){

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  h3 {
    height:36px;
    display: flex;justify-content: space-between;align-items: center;
  }
  .code pre {
    margin:0;
  }
</style>
