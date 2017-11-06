import React from 'react'

const render = function(){
	let addLabelClass = this.showAddLabel?'add-label-span':'hide'
	return (
		<div className='add-tag-wrapper'>
			<input ref='addTagRef' className='add-new-tag' size={this.inputSize} 
				onChange={this.handleChange}
				onBlur={this.handleBlur}
				onKeyUp={this.handleKeyUp} 
				value={this.newTag||''}></input>
			<span className={addLabelClass} onClick={this.handleAddClick}>Add New Tag</span>		
		</div>
	)
}

export default render
