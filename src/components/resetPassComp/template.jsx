import React from 'react'
import AnimatedScrollContainer from '../animatedScrollContainer'
import ResetPassForm from '../resetPassForm'

const render = function(){
	return (
			<div className='reset-pass-comp'>
				<AnimatedScrollContainer screenElems={[{comp:ResetPassForm,props:{}}]}/>
			</div>
		)
}

export default render