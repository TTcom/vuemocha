import {expect} from 'chai'




it('要测试对象是否相等',()=>{
	
	//deep.equal 判断两个对象是否完全相等(引用空间无所谓)
	expect({'name':'abc'}).to.be.deep.equal({'name':'abc'});
	
	
})






