import React from 'react'
import Tag from '../tag'
import AddTag from '../addTag'

const render = function(){
	let innerHtml = (this.props.tagList||[]).map((item,index)=>{
		return <Tag name={item} id={index} removeTag={this.removeTag}/>
	})

	return (
			<div className='tag-input'>
				{innerHtml}
				<AddTag insertTag={this.insertTag}/>			
			</div>
		)
}

export default render