import React from 'react'
import Template from './template.jsx'
import PropTypes from 'prop-types'

const AddTag = React.createClass({
	getInitialState:function(){
		this.inputSize = 1
		this.newTag = ''
		this.showAddLabel = true
		return {
			reRender:false
		}
	},
	handleChange:function(e){
		let tagval = e.target.value
		this.resizeInput(tagval.length)
		this.newTag=tagval
		this.setState({
			reRender:true
		})
	},
	handleKeyUp:function(e){
		e.which = e.which || e.keyCode;
	    if(e.which == 13) {
	    	this.props.insertTag(this.newTag)
	    	this.resetInput()
	    }
	},
	handleBlur:function(){
		this.props.insertTag(this.newTag)
		this.showAddLabel = true
		this.resetInput()
	},
	handleAddClick:function(){
		this.showAddLabel = false
		this.refs.addTagRef.focus()
		this.setState({
			reRender:true
		})
	},
	resetInput:function(){
		this.resizeInput(1)
		this.newTag = ''
		this.setState({
			reRender:true
		})
	},
	resizeInput:function(size){
		this.inputSize = size
	},
	render:Template
})

AddTag.propTypes = {
	insertTag:PropTypes.func
}

export default AddTag