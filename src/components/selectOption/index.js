import React from 'react'
import Template from './template.jsx'
import {} from '../../../style/selectOption.scss'

const SelectOption = React.createClass({
	getInitialState:function(){
		this.isSelected = false
		return {
			reRender:false
		}
	},
	componentWillReceiveProps:function(nextProps){
		if(!nextProps.active){
			this.isSelected = false
			this.setState({
				reRender:true
			})
		}
	},
	toggleSelect:function(){
		if(this.props.active){
			this.isSelected = !this.isSelected
			this.props.select(this.props.value)
			this.setState({
				reRender:true
			})
		}
	},
	render:Template
})

export default SelectOption