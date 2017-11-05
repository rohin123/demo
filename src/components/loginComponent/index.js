import React from 'react'
import Tempate from './template.jsx';
//import LoginActions from '../../actions/loginActions.js'
import {} from '../../../style/login.scss'

const LoginForm = React.createClass({

	getInitialState: function(){
		return {
			_username: "",
			_password: "",
		}
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
			console.log('user details',this.state._username,this.state._password)
		}
	},

	render: Tempate
});

export default LoginForm;