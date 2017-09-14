import React from 'react'
import Template from './template.jsx'
import {} from '../../../style/popupComp.scss'

const PopupComp = React.createClass({
	closePopup:function(){
		this.props.close()
	},
	stopBubbling:function(e){
		e.stopPropagation()
	},
	render:Template
})

export default PopupComp