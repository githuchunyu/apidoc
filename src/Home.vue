<template>
  <div class="view">

    <BackTop></BackTop>

    <div class="view-menu">
      <div class="view-menu-wrap">
        <Menu ref="menu" style='width:240px;height:100%;' theme="dark" :active-name="activeName" @on-select="goApi">
          <MenuItem name="describe"><Icon type="ios-book"></Icon>说明</MenuItem>
          <MenuGroup v-for="l1 in list" :name='l1.name' :key="l1.name" :title="l1.title">
            <MenuItem v-for="l2 in l1.list" :name="l2.name" :key="l2.name"><Icon :color="l2.type=='GET'?'#19be6b':'#2d8cf0'" :type="'arrow-'+(l2.type=='GET'?'down':'up')+'-a'"></Icon>{{l2.title}}</MenuItem>
          </MenuGroup>
        </Menu>
      </div>
    </div>

    <div class="view-content">
      <div class="view-content-wrap">
        <h1>{{info.name}}</h1>
        <p class="doc-describe">{{info.intro}}</p>

        <div class="view-description">
          <h2 name="describe">说明</h2>
          <Card>
            <h3>文档介绍</h3>
            <div v-html='info.description'></div>
            <h3>api地址</h3>
            <div class="view-description-url"><span>开发地址</span>{{info.urlDev}}</div>
            <div class="view-description-url"><span>生产地址</span>{{info.urlPro}}</div>
            <h3>响应格式</h3>
            <div class="code" v-highlight>
              <pre v-html="info.example"></pre>
            </div>
            <h3 name="codes">状态码</h3>
            <Table :columns="columnsStateCode" :data="info.stateCode"></Table>

          </Card>
        </div>


        <ul>
          <li class="doc-group" v-for="l in list" :key="l.name" :name="l.name">
            <Card style="margin:15px 0;">
              <div class="api-block">
                <div class="api-block-title">
                  <h2>{{l.title}}</h2>
                  <p>{{l.description}}</p>
                </div>
                <ButtonGroup class="api-block-btns">
                  <Button>删除组</Button>
                  <Button>编辑组</Button>
                  <Button>新增组</Button>
                  <Button @click='newInterface'>新增接口</Button>
                </ButtonGroup>
              </div>
            </Card>
            <ul>
              <li class="doc-item" v-for="ll in l.list" :key="ll.name" :name="ll.name" style="margin:16px 0;">
                <Interface :base_url="info.urlPro" :data="ll" @onEdit="()=>editInterface(ll)"></Interface>
              </li>
            </ul>
          </li>
        </ul>

      </div>

    </div>

    <Modal v-model="visibleEditInterface" :title="editInterfaceMode=='new'?'新增接口':'编辑接口'" width="1300" :styles="{top: '20px'}">
      <InterfaceEdit :data="editingInterface" ref="interfaceEdit"></InterfaceEdit>
      <div slot="footer">
          <Button type="default" @click="()=>{this.visibleEditInterface=false}">取消</Button>
          <Button type="warning" @click="resetEdit">重置</Button>
          <Button type="primary">提交</Button>
      </div>
    </Modal>

    <Modal v-model="visibleEditBlock" :title="editBlockMode=='new'?'新增块组':'编辑块组'" width="600" :styles="{top: '20px'}">
      <Form :label-width="80">
        <FormItem label="块组名称">
          <Input></Input>
        </FormItem>
        <FormItem label="块组简介">
          <Input></Input>
        </FormItem>
      </Form>
      <div slot="footer">
          <Button type="default" @click="()=>{this.visibleEditInterface=false}">取消</Button>
          <Button type="primary">提交</Button>
      </div>
    </Modal>

  </div>

</template>

<script>
import Interface from './components/Interface'
import InterfaceEdit from './components/InterfaceEdit'
export default {
  name: 'Home',
  components:{
    Interface,
    InterfaceEdit,
  },
  props:{

  },
  data () {
    return {
      visibleEditBlock:false,
      visibleEditInterface:false,
      editBlcokMode:'new',
      editInterfaceMode:'new',
      version:'1.0.0',
      versions:['1.0.0'],
      info:{},
      activeName:'',
      openName:'',
      scrollApi:[],
      scrollGroup:[],
      list:[],
      currentInterface:{},
      editingInterface:{},
      columnsStateCode:[
        {
          title:'代码',
          key:'code',
          width:80,
        },
        {
          title:'消息',
          key:'message',
          width:200
        },
        {
          title:'描述',
          key:'description'
        },

      ],
    }
  },
  computed:{
  },
  mounted(){
    this.getData();
  },
  methods: {
    // 开始编辑
    editInterface(ifc){
      this.editInterfaceMode = 'edit';
      this.currentInterface = ifc;
      let d = Object.assign({},ifc);
      d.request = [...d.request];
      d.response = [...d.response];
      this.editingInterface = d;
      this.visibleEditInterface = true;
    },
    // 重置编辑
    resetEdit(){
      let d = Object.assign({},this.currentInterface);
      d.request = [...d.request];
      d.response = [...d.response];
      this.editingInterface = d;
      this.$refs['interfaceEdit'].$refs.exampleEdit.reset();
    },

    // 创建新接口
    newInterface(){
      this.editInterfaceMode = 'new';
      let ifc = {
        type: "GET",
        url: "some/do",
        title: "这是接口的标题名称",
        auth: "all",
        name: "some_do",
        description: "这是一段接口的简要介绍",
        request: [],
        response:[],
        example:{},
      }
      this.currentInterface = ifc;
      this.editingInterface = Object.assign({},ifc);
      this.visibleEditInterface = true;
    },

    // 新增块组
    newBlock(){

    },
    goApi(name){
      // 定位到当前接口的位置
      let t = $('[name='+name+']').position().top+20;
      $('html').animate({'scrollTop':t+'px'},200);
    },
    getData(){
      $.getJSON('/static/info.js',(data)=>{
        this.info = data;
      })
      $.getJSON('/static/list.js',(data)=>{
        console.log(data)
        this.list = data;
        this.$nextTick(()=>{
          this.iniScroll();
        })
      })
    },
    iniScroll(){
      let sd = []
      $('.doc-item').each((i)=>{
        let item = $('.doc-item').eq(i)
        sd.push({name:item.attr("name"),top:item.position().top-300})
      })
      this.scrollApi = sd;

      sd = []
      $('.doc-group').each((i)=>{
        let item = $('.doc-group').eq(i)
        sd.push({name:item.attr("name"),top:item.position().top-300})
      })
      this.scrollGroup = sd;
      this.onScroll();
    },
    onScroll(){
      $(window).on("scroll",()=>{
        let t = $('html').scrollTop();
        let ac = ""
        for (let i=0,len=this.scrollApi.length;i<len;i++) {
          if (this.scrollApi[i].top<t) {
            ac = this.scrollApi[i].name
          } else {
            break;
          }
        }
        this.activeName = ac;

        let op = ""
        for (let i=0,len=this.scrollGroup.length;i<len;i++) {
          if (this.scrollGroup[i].top<t) {
            op = this.scrollGroup[i].name
          } else {
            break;
          }
        }
        this.openName = op;
        this.$refs.menu.updateOpened();
      })
    }

  }
}
</script>

<style lang="less" scoped>
.api-block {
  display: flex;justify-content: space-between;align-items: center;
  &-title {
    h2 {
      margin:0;
    }
  }
  &-btns {
    opacity: 0;
    transition: opacity 0.3s;
  }
  &:hover {
    .api-block-btns {
      opacity: 1;
    }
  }
}


</style>
