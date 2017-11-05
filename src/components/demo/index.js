import React from 'react'
import Template from './template.jsx'

const Demo = React.createClass({
	getInitialState:function(){
		return {
			tagList:[]
		}
	},
	setList:function(list){
		this.setState({
			tagList:list
		})
	},
	render:Template
})

export default Demo