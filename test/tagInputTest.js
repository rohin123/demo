import {expect} from 'chai'
import TagInput from '../src/components/tagInput'
import Tag from '../src/components/tag'
import React from 'react'
import ReactTestUtils from 'react-dom/test-utils';
import ShallowRenderer from 'react-test-renderer/shallow';

describe('tagInput',()=>{

	it('should mount',()=>{
		const component = ReactTestUtils.renderIntoDocument(
			<TagInput/>
		);
		expect(component).to.be.ok
	})

	it('should show tag for given test tagList',()=>{
		const tagList = ['q','w','e']
		const shallowRenderer = new ShallowRenderer();
		shallowRenderer.render(<TagInput tagList={tagList} setList={()=>{}}/>)
		const result = shallowRenderer.getRenderOutput();
		expect((result.props.children[0]).length).to.equal(tagList.length)
	})	
})
