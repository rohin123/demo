import React from 'react'
import Template from './template.jsx'
import {} from '../../../style/roleSelection.scss'

const RoleSelection = React.createClass({
	toggleOptionState:function(data,val){
		let rolesMap = this.props.rolesMap
		rolesMap[data] = val
		this.props.edit(rolesMap)
	},
	render:Template
})

export default RoleSelection