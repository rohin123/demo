import React from 'react'
import Tag from '../tag'

const render = function(){
	console.log('render',this.props.tagList)
	let innerHtml = (this.props.tagList||[]).map((item)=>{
		return <Tag name={item.name} id={item.id} removeTag={this.removeTag}/>
	}),
		addLabelClass = this.showAddLabel?'add-label-span':'hide'

	return (
			<div className='tag-input'>
				{innerHtml}
				<div className='add-tag-wrapper'>
					<input ref={(elem)=>{this.addInput = elem}} className='add-new-tag' size={this.inputSize} 
						onChange={this.handleChange}
						onBlur={this.insertTag} 
						value={this.newTag}></input>
					<span className={addLabelClass} onClick={this.handleAddClick}>Add New Tag</span>		
				</div>		
			</div>
		)
}

export default render