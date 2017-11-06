import React from 'react'

const render = function(){
	let props = this.props
	return (<div className='tag'>
				{props.name}
				<div className='close-cross' onClick={props.removeTag.bind(null,props.id)}>
					<div className='line1'></div>
					<div className='line2'></div>
				</div>
			</div>)
}

export default render