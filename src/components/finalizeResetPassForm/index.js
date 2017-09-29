import React from 'react'
import Template from './template.jsx'
import '../../../style/finalizeResetPassForm.scss'

const FinalizeResetPassForm = React.createClass({
	privScreen:function(){
		this.props.setIndex(this.props.index-1)
	},
	render:Template
})

export default FinalizeResetPassForm