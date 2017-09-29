import React from 'react'
import Template from './template.jsx'
import '../../../style/authResetPassForm.scss'

const AuthResetPassForm = React.createClass({
	nextScreen:function(){
		this.props.setIndex(this.props.index+1)
	},
	privScreen:function(){
		this.props.setIndex(this.props.index-1)
	},
	render:Template
})

export default AuthResetPassForm