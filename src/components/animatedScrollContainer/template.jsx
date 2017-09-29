import React from 'react'

const render = function(){
	let innerHtml = (this.props.screenElems||[]).map((Screen,index)=>{
		let Comp = Screen.comp,
			props = Screen.props

		return <div className='screen'>
					{<Comp {...props} setIndex={this.setIndex} index={index}/>}
				</div>
	})
	return (
			<div className='animated-wrapper'>
				<div className='screen-wrapper' ref={(elem)=>{this.screenRef = elem}}>
					{innerHtml}
				</div>	
			</div>
		)
}

export default render