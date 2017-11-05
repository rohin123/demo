import React from 'react'
import Template from './template.jsx'
import TagInput from '../tagInput'

const render = function(){
	return (
			<TagInput tagList={this.state.tagList} setList={this.setList}/>
		)
}

export default render