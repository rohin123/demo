import {expect} from 'chai'
import Tag from '../src/components/tag'
import React from 'react'
import ReactTestUtils from 'react-dom/test-utils';
import ReactDOM from 'react-dom';

describe('addTag',()=>{

	it('should mount with an input and span',()=>{
		const component = ReactTestUtils.renderIntoDocument(
			<Tag removeTag={()=>{}}/>
		);

		expect(component).to.be.ok;
	})

	it('should trigger removeTag on clicking cross',()=>{
		let sampleInput = {
			name:'test',
			id:1,
			func:(id)=>{
				index = id
			}
		},
			index = null
		const component = ReactTestUtils.renderIntoDocument(
			<Tag name={sampleInput.name} id={sampleInput.id} removeTag={sampleInput.func}/>
		);
		const elem = ReactTestUtils.findRenderedDOMComponentWithClass(component,'close-cross')
		ReactTestUtils.Simulate.click(elem)
		expect(index).to.equal(sampleInput.id)
	})
	
})
