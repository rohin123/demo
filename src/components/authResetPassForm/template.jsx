import React from 'react'

const render = function(){
	return (
			<div className='auth-rest-pass-div'>
				screen 2
				<div className='button' onClick={this.nextScreen}>
					NEXT
				</div>
				<div className='button' onClick={this.privScreen}>
					PRIV
				</div>
			</div>
		)
}

export default render