import React from 'react'

const render = function(){
	let role = this.props.role

	return (
			<div className={'select-option-div '+ (this.isSelected?'green-option':'red-option')}
					onClick={this.toggle}>
				{role}
			</div>
		)
}

export default render