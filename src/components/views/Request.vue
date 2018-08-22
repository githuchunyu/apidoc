<template>

    <div class="api-request">
      <h2>请求</h2>
      <h3>
        <span>数据结构</span>
      </h3>
      <Table :columns="column" :data="list" style="width:882px;"></Table>
    </div>

</template>

<script scoped>
export default {
    name:'request',
    props:['api_id','data'],
    data: function () {
      return {
        list:this.data,
        column:[
          {
            title:'名称',
            key:'field',
            width:120,
          },
          {
            title:'类型',
            key:'type',
            width:100,
          },
          {
            title:'必须',
            key:'require',
            width:100,
            align:'center',
            render: (h, params) => {
              if (params.row.required) {
                return h('div', [
                    h('Icon', {
                        props: {
                            type: 'checkmark-round',
                            color:"#19be6b"
                        }
                    }),
                ]);
              } else {
                return h('div')
              }
            }
          },
          {
            title:'默认值',
            key:'default',
            width:100,
          },
          {
            title:'描述',
            key:'description',
            width:300,
          },
          {
            title:'范例',
            key:'example',
            width:160,
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
                return h('div',params.row.example)
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
</style>
