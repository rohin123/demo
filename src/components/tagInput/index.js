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
		let tag = val.trim()
		if(tag.length){
			let tagList = this.props.tagList||[],
			newTagList = tagList.concat([tag])
			this.props.setList(newTagList)
		}
	},
	removeTag:function(index){
		let tagList = this.props.tagList||[]
		tagList.splice(index,1)
		this.props.setList(tagList)
	},
	render:Template
})

TagInput.propTypes = {
	tagList:PropTypes.array,
	setList:PropTypes.func
}

export default TagInput