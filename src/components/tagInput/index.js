import React from 'react'
import Template from './template.jsx'
import PropTypes from 'prop-types'

const TagInput = React.createClass({
	getInitialState:function(){
		return {
			reRender:false
		}
	},
	insertTag:function(val){
		let tag = val.trim(),
			tagList = this.props.tagList||[]

		if(tag.length&&!this.checkDuplicate(tagList,tag)){
			let newTagList = tagList.concat([tag])
			this.props.setList(newTagList)
		}
	},
	removeTag:function(index){
		let tagList = this.props.tagList||[]
		tagList.splice(index,1)
		this.props.setList(tagList)
	},
	checkDuplicate:function(list,item){
		for(var i=0;i<list.length;i++){
			if(list[i]==item){
				return true
			}
		}

		return false
	},
	render:Template
})

TagInput.propTypes = {
	tagList:PropTypes.array,
	setList:PropTypes.func
}

export default TagInput