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
	insertTag:function(){
		if(this.newTag.length){
			let tagList = this.props.tagList||[],
			newTagList = tagList.concat([{name:this.newTag,id:tagList.length}])
			this.props.setList(newTagList)
		}
		this.resetInput()
	},
	removeTag:function(id){
		console.log(id)
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