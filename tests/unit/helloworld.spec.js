import HelloWorld from '@/components/HelloWorld';
import Vue from 'vue'
import {expect} from 'chai'
import { mount } from '@vue/test-utils'

describe('hello world.vue',()=>{
	it('传递属性后能否正常显示结果',()=>{       //测试组件的ui效果是否和预期一致
		//原生自己测试vue
		//extend 方法可以根据实例创建一个类
		let Constructor = Vue.extend(HelloWorld);
		//把组件进行挂载
		// vm.$el mocha 测试的时候 集成了 jsdom
		let vm = new Constructor({
			propsData:{msg:'hello'}
		}).$mount();
		expect(vm.$el.querySelector('h1').innerHTML).to.be.contain('hello');
	})
	
});

describe('hello world.vue',()=>{
	it('test',()=>{     //测试用例
		let wrapper = mount(HelloWorld);
		 wrapper.setProps({msg:'hello'})
		 expect(wrapper.find('h1').text()).to.be.contain('hello');	
	})
   	   

	
	
})	