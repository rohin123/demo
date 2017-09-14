import React from 'react'
import Template from './template.jsx'
import {} from '../../../style/home.scss'

const Home = React.createClass({
	getInitialState:function(){
		this.showPopup = false
		this.selectedUserId = null
		return {
			reRender:false
		}
	},
	setPopup:function(reactElem){
		console.log('setPopup==>',reactElem)
		this.showPopup = true
		this.popupElem = reactElem
		this.setState({
			reRender:true
		})
	},
	closePopup:function(){
		this.showPopup = false
		this.popupElem = null
		this.setState({
			reRender:true
		})
	},
	setUser:function(id){
		if(!this.selectedUserId && !id){

		}else{
			this.selectedUserId = id
			this.setState({
				reRender:true
			})
		}
		
	},
	render:Template
})

export default Home