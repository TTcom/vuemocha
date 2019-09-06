import {expect} from 'chai'
import {mount} from '@vue/test-utils';
import Counter from '@/components/counter'

describe('测试counter组件',()=>{
	it('测试点击按钮后能否加一',()=>{
		let vm = mount(Counter);
		// vm.find('#count').text()).to.be.equal('10');
		 vm.find('button').trigger('click');  //触发按钮点击
		 
		 expect(vm.find('.spancount').text()).to.be.equal('1');
		 
		
	})
})

