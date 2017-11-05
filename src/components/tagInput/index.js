import React from 'react'
import Template from './template.jsx'

const TagInput = React.createClass({
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
	handleBlur:function(){
		this.insertTag()
		this.resetInput()
	},
	handleKeyUp:function(e){
		e.which = e.which || e.keyCode;
	    if(e.which == 13) {
	    	this.insertTag()
	    	this.newTag = ''
	    	this.resizeInput(1)
	    }
	},
	insertTag:function(){
		if(this.newTag.length){
			let tagList = this.props.tagList||[],
			newTagList = tagList.concat([{name:this.newTag.trim(),id:new Date().getTime()}])
			this.props.setList(newTagList)
		}	
	},
	removeTag:function(id){
		let newTagList = (this.props.tagList||[]).filter((item)=>{
			if(item.id==id){
				return false
			}
			return true
		})
		this.props.setList(newTagList)
	},
	handleAddClick:function(){
		this.showAddLabel = false
		this.addInput.focus()
		this.setState({
			reRender:true
		})
	},
	resetInput:function(){
		this.resizeInput(1)
		this.newTag = ''
		this.showAddLabel = true
		this.setState({
			reRender:true
		})
	},
	resizeInput:function(size){
		this.inputSize = size
	},
	render:Template
})

export default TagInput