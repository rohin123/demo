import React from 'react'
import Template from './template.jsx'
import {} from '../../../style/addUser.scss'
import {} from '../../../style/editUser.scss'
import CommonFunc from '../../helpers/commonFunc.js'
import UserActions from '../../actions/userActions.js'

const AddUser = React.createClass({
	getInitialState:function(){
		const {store} = this.context
		this.store = store
		this.userDetails = {}
		this.roleDetails = {}
		this.invalidState = {
			user_name:true,
			name: true,
			password: true,
			email: true,
			code: true
		}
		return {
			reRender:false
		}
	},
	componentWillMount:function(){
		this.rolesMap = this.initRolesMap()
	},
	checkValidSave:function(){
		let inputs = (Object.keys(this.invalidState))||[]
		for(var i = 0 ;i<inputs.length;i++){
			if(this.invalidState[inputs[i]]){
				this.isValidSave = false
				this.setState({
					reRender:true
				})
				return
			}
		}
		//console.log('here')
		if(Object.keys(this.userDetails).length){
			this.isValidSave = true
			this.setState({
				reRender:true
			})
		}else{
			this.isValidSave = false
			this.setState({
				reRender:true
			})
		}
	},
	initRolesMap:function(){
		let rolesMap = {}
		let allRoles = this.store.getState().roles||[]
		for(var i = 0 ;i < allRoles.length; i++){
			rolesMap[allRoles[i].name] = false
		}
		return rolesMap
	},
	addUserBasicDetails:function(name,val){
		this.userDetails[name] = CommonFunc.stripLeadAndTerminalSpaces(val)
		this.checkValidSave()
	},
	addUserEmpDetails:function(name,val){
		if(!this.userDetails['user_details']){
			this.userDetails['user_details'] = {}
		}
		this.userDetails['user_details'][name] = CommonFunc.stripLeadAndTerminalSpaces(val)
		this.checkValidSave()
	},
	addUserBankDetails:function(name,val){
		if(!this.userDetails['bank_details']){
			this.userDetails['bank_details'] = {}
		}
		this.userDetails['bank_details'][name] = CommonFunc.stripLeadAndTerminalSpaces(val)
		this.checkValidSave()
	},
	addUserRoles:function(data){
		//debugger
		this.rolesMap = data
		let userRoles = this.getSelectedRoles()
		this.roleDetails = {
			role:userRoles
		}
		this.checkValidSave()
	},
	getSelectedRoles:function(){
		let ret = [];
		(Object.keys(this.rolesMap)||[]).map((role)=>{
			if(this.rolesMap[role]){
				ret.push(role)
			}
		})
		return ret
	},
	saveUser:function(){
		console.log(this.userDetails,this.roleDetails)
		this.store.dispatch(UserActions.saveUser(this.userDetails,this.roleDetails))
		this.props.close()
	},
	setInvalid:function(name,val){
		this.invalidState[name] = val
		this.checkValidSave()
	},
	render:Template
})

AddUser.contextTypes = {
	store:React.PropTypes.object
}

export default AddUser