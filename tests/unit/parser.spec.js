import {expect} from 'chai'


//常见关系 相等 大于/小于 包含和不包含
describe('专门测试parser',()=>{

		it('要测试对象是否相等',()=>{
			
			//deep.equal 判断两个对象是否完全相等(引用空间无所谓)
			expect({'name':'abc'}).to.be.deep.equal({'name':'abc'});
		})

})

describe('专门测试string',()=>{
	it('测试string',()=>{
		
		expect('name=abc').to.be.equal('name=abc');
	})
})

describe('测试方法',()=>{
	it('相等关系',()=>{
		expect(1+1).to.be.equal(2);
		expect([1,2,3]).to.be.lengthOf(3);
		expect(true).to.be.true;
	});
	it('包含',()=>{
		expect('zfas').to.be.contain('as');
		expect('zfas').to.be.match(/zf/);
	})
	it('大于 小于',()=>{
		expect(5).to.be.greaterThan(3);    //大于三
		expect(3).to.be.lessThan(5);  //小于五
		expect(3).to.be.not.greaterThan(15)  //不大于1五
	})
	
})

