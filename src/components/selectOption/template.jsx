import React from 'react'

const render = function(){
	return (
			<div className={this.isSelected?('select-option-div '+this.props.selectedClass):'select-option-div'} 
							onClick={this.toggleSelect}>
				{this.props.value}
			</div>
		)
}

export default render