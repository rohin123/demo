import React from 'react'
//import CloseCross from '../closeCross'

const Tag = function(props){
	return <div className='tag'>
				{props.name}
				<div className='close-cross' onClick={props.removeTag.bind(null,props.id)}>
					<div className='line1'></div>
					<div className='line2'></div>
				</div>
			</div>
}

export default Tag