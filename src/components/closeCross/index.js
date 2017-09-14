import React from 'react'
import Template from './template.jsx'

const CloseCross = React.createClass({
	componentDidMount:function(){
		//console.log("cross color-->",this.props.color)
		this.cross1.style.borderColor = this.props.color?this.props.color:'#ffdb46'
		this.cross2.style.borderColor = this.props.color?this.props.color:'#ffdb46'
	},
	render:Template
})

export default CloseCross