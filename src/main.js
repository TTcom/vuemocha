import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false





import Loading from './components/loading';

// Loading构造函数
const Mask = Vue.extend(Loading);

const loadingDirective = {};

loadingDirective.install = Vue => {
  // 切换组件状态函数
  const toggleLoading = (el, binding) => {
    if (binding.value) {
      Vue.nextTick(() => {
        insertDom(el, el, binding);
      });
    }
    else {
      el.instancebb.visible = false;
    }
  };

  // 插入Loading
  const insertDom = (parent, el) => {
	  console.log("parent",parent)
	  console.log("el",el)
    parent.appendChild(el.maskkk);
    el.instancebb.visible = true;
  };

  Vue.directive('loading', {
    bind: function(el, binding) {
      /**
       * 这里把Loading组件实例挂载到el上，然后再把el传参到toggleLoading中判断
       */
	  
		
		  
		  const mask = new Mask({
			el: document.createElement('div'),
			data: {}
		  });
         console.log("mask",mask)
		 
		  el.instancebb = mask;  //存储实例对象参数  
		  
		  el.maskkk = mask.$el;   //存储挂载实例dom
		  console.log('el.maskkk',el.maskkk)
		 
		   
 		  binding.value && toggleLoading(el, binding);
    },
  
    update: function(el, binding) {
      if (binding.oldValue !== binding.value) {
		  console.log('el',el)
        toggleLoading(el, binding);
      }
    },
  // 
  //   unbind: function() {
  //       // destory
  //   },
	
	
  });
};



//export default loadingDirective;

Vue.use(loadingDirective)




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
