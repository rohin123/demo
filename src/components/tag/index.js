import React from 'react'
import Template from './template.jsx'

const Tag = React.createClass({
	getInitialState:function(){
		return {
			reRender:false
		}
	},
	render:Template
})

export default Tag