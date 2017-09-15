import React from 'react'
import Template from './template.jsx'
import {} from '../../../style/multiSelect.scss'

const MultiSelect = React.createClass({
	getInitialState:function(){
		this.optionsMap = this.initOptionsMap()
		return {
			reRender:false
		}
	},
	initOptionsMap:function(){
		let ret = {};
		(this.props.options||[]).map((option)=>{
			ret[option] = true
		});

		(this.props.allOptions||[]).map((option)=>{
			ret[option] = false
		});

		return ret
	},
	editOptions:function(){
		this.showAvailableOptions = true
		this.optionsMap = this.initOptionsMap()
		this.setState({
			reRender:true
		})
	},	
	toggleOptionState:function(option){
		this.optionsMap[option] = !this.optionsMap[option]
	},
	applyChanges:function(){
		this.props.changeHandler(this.optionsMap)
	},
	cancelChanges:function(){
		this.showAvailableOptions = false
		this.setState({
			reRender:true
		})
	},
	render:Template
})

export default MultiSelect