import React from 'react'
import Template from './template.jsx'
import store from '../../store/index.js'
import NotificationAction from '../../actions/notificationActions.js'

const NotificationPanel = React.createClass({
	getInitialState:function(){
		this.content = this.props.content
		//this.open = false
		//const {store} = this.context
		//this.store = store
		this.notificationArray = []
		return {
			reRender:false
		}
	},
	componentWillMount:function(){
		let state = store.getState(),self = this
		this.unsub = store.subscribe(function(){
			let state = store.getState()
			if(state['bFlags']['notificationArrayUpdated']){
				self.notificationArray = state['notificationArray']
				self.setState({
					reRender:true
				})
			}
		})
	},
	componentWillReceiveProps:function(nextProps){
		this.content = nextProps.content
		this.setState({
			reRender:true
		})
	},
	componentWillUnmount:function(){
		this.unsub()
	},
	close:function(index){
		//this.open = false
		store.dispatch(NotificationAction.closeNotification(index))
		this.setState({
			reRender:true
		})
	},
	render:Template
})

// NotificationPanel.contextTypes = {
// 	store:React.PropTypes.object
// }

export default NotificationPanel