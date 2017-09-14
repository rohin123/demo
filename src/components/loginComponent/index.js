import React from 'react'
import Tempate from './template.jsx';
import LoginActions from '../../actions/loginActions.js'
import {} from '../../../style/login.scss'

const LoginForm = React.createClass({

	getInitialState: function(){
		console.log('login router context==>',this.context)
		const {store,router} = this.context
		this.store = store
		this.router = router
		return {
			_username: "",
			_password: "",
		}
	},

	componentWillMount:function(){
		this.store.subscribe(()=>{
			let state = this.store.getState()
			if(state.bFlags.user_set){
				this.router.history.push('/')	
			}
		})
	},

	_handleUserNameChanged: function(e){
		this.setState({
			_username: e.target.value
		})
	},

	_handlePasswordChanged: function(e){
		this.setState({
			_password: e.target.value
		})
	},

	_handleFormSubmit: function(e){
		e.preventDefault();
		if(this.state._username != "" && this.state._password != ""){
			this.store.dispatch(LoginActions.login({
				username: this.state._username,
				password: this.state._password
			}))
		}
	},

	render: Tempate
});

LoginForm.contextTypes = {
	store:React.PropTypes.object,
	router:React.PropTypes.object
}

export default LoginForm;