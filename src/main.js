// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
Vue.use(Vuex)

Vue.config.productionTip = false

const moduleA = {
	namespaced: true,
	state: {     
	 	count: 0,
	},
	getters: {
	    sumWithRootCount (state, getters, rootState) {
	      return rootState.count
	    }
    },
    actions: {
	    increment ({rootState }) {
	        rootState.count++
	    }
    }
 }

const moduleB = {
	namespaced: true,
	state: { 
	 	count:10 
	},
	getters: {
	    sumWithRootCount (state, getters, rootState) {
	      return rootState.count
	    }
    },
    actions: {
	    increment ({rootState }) {
	        rootState.count+=2
	    }
    }
 }
const store = new Vuex.Store({
	state: {     
	 	count: 100,
	},
	getters: {
	    sumWithRootCount (state, getters, rootState) {
	      return rootState.count
	    }
    },
    actions: {
	    increment (context) {
	        context.state.count+=5
	    }
    },
	modules: {
	    a: moduleA,
	    b: moduleB
	}


})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
