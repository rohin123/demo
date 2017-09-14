import React from 'react'

const render = function(){
	if(this.props.isOpen){
		//console.log('popup-->',this.props.children)
		const childrenWithProps = React.Children.map(this.props.children,
	     (child) => React.cloneElement(child, {
	       close: this.closePopup
	     })
	    );

		return (
			<div className='popup-wrapper' onClick={this.closePopup}>
				<div onClick={this.stopBubbling}>
					{childrenWithProps}
				</div>
			</div>
		)
	}else{
		return null
	}
}

export default render