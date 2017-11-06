import {expect} from 'chai'
import AddTag from '../src/components/addTag'
import React from 'react'
//import TestRenderer from 'react-test-renderer'
import ReactTestUtils from 'react-dom/test-utils';


describe('addTag',()=>{

	it('should mount with an input and span',()=>{
		const component = ReactTestUtils.renderIntoDocument(
			<AddTag/>
		);
		const input = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'input');
		const span = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'span');

		expect(input).to.be.ok;
		expect(span).to.be.ok;
	})

	it('should update newTag on change',()=>{
		const component = ReactTestUtils.renderIntoDocument(
			<AddTag/>
		);
		let addTagRef = component.refs.addTagRef
		addTagRef.value = 'test'	
		ReactTestUtils.Simulate.change(addTagRef)
		expect(component.newTag).to.equal('test')
	})
	
	it('should invoke insertTag callback on blur',()=>{
		let dummyTag;
		const component = ReactTestUtils.renderIntoDocument(
			<AddTag insertTag={(tag)=>{dummyTag = tag}}/>
		);
		const addTagRef = component.refs.addTagRef
		component.newTag='test'
		ReactTestUtils.Simulate.blur(addTagRef)
		expect(dummyTag).to.equal('test')
	})	

	it('should invoke insertTag callback on enter',()=>{
		let dummyTag;
		const component = ReactTestUtils.renderIntoDocument(
			<AddTag insertTag={(tag)=>{dummyTag = tag}}/>
		);
		const addTagRef = component.refs.addTagRef
		component.newTag='test'
		ReactTestUtils.Simulate.keyUp(addTagRef, {key: "Enter", keyCode: 13, which: 13})
		expect(dummyTag).to.equal('test')
	})	
	
})
