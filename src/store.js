import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/* 全局数据*/
const state = {
	isLogin:false,
  // apiUrl:"https://wx.sigmoid.cc/api/",
};

export default new Vuex.Store({
  	state,
  	mutations:{
  		login(state){
  			state.isLogin = true;
  		},
  		logout(state){
  			state.isLogin = false;
  		},
  	}
})
