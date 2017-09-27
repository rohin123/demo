import React from 'react'
import Template from './template.jsx'
import {} from '../../../style/editUser.scss'
import objectAssign from 'object-assign'
import UserActions from '../../actions/userActions.js'
import CommonFunc from '../../helpers/commonFunc.js'

const EditUser = React.createClass({
	getInitialState:function(){
		this.isUpdated = false
		this.userDetails = {}
		this.roleDetails = {}
		const {store} = this.context
		this.store = store
		this.invalidState = {}
		this.isDetailed = false
		return {
			reRender:false
		}
	},
	componentWillMount:function(){
		this.rolesMap = this.initRolesMap()
	},
	initRolesMap:function(){
		let rolesMap = {}
		let allRoles = this.props.allRoles
		let userRoles = this.props.user.role||[]
		for(var i = 0 ;i < allRoles.length; i++){
			rolesMap[allRoles[i].name] = false
		}

		for(var i = 0 ;i < userRoles.length; i++){
			rolesMap[userRoles[i]] = true
		}
		return rolesMap
	},
	checkValidUpdate:function(){
		//console.log('checkValidUpdate',this.userDetails,this.roleDetails)
		let inputs = (Object.keys(this.invalidState))||[]
		for(var i = 0 ;i<inputs.length;i++){
			if(this.invalidState[inputs[i]]){
				this.isUpdated = false
				this.setState({
					reRender:true
				})
				return
			}
		}

		if((Object.keys(this.userDetails).length || Object.keys(this.roleDetails).length)){
			this.isUpdated = true
			this.setState({
				reRender:true
			})
		}

		if((!Object.keys(this.userDetails).length && !Object.keys(this.roleDetails).length)){
			this.isUpdated = false
			this.setState({
				reRender:true
			})
		}
	},
	editUserBasicDetails:function(name,val){
		//console.log(name,val)
		this.userDetails[name] = CommonFunc.stripLeadAndTerminalSpaces(val)
		this.checkValidUpdate()
	},
	editUserEmpDetails:function(name,val){
		//console.log(name,val)
		if(!this.userDetails['user_details']){
			this.userDetails['user_details'] = {}
		}
		this.userDetails['user_details'][name] = CommonFunc.stripLeadAndTerminalSpaces(val)
		this.checkValidUpdate()
	},
	editUserBankDetails:function(name,val){
		//console.log(name,val)
		if(!this.userDetails['bank_details']){
			this.userDetails['bank_details'] = {}
		}
		this.userDetails['bank_details'][name] = CommonFunc.stripLeadAndTerminalSpaces(val)
		this.checkValidUpdate()
	},
	editUserRoles:function(data){
		//console.log('editUserRoles',data)
		this.rolesMap = data
		let userRoles = this.getSelectedRoles()
		this.roleDetails = {
			role:userRoles
		}
		this.checkValidUpdate()
	},
	updateUser:function(){
		let user = this.props.user
		if(!CommonFunc.checkEmptyObject(this.userDetails)){
			this.store.dispatch(UserActions.updateUserDetails(user.child_id,this.userDetails))
		}
		if(!CommonFunc.checkEmptyObject(this.roleDetails)){
			this.store.dispatch(UserActions.updateUserRoles(user.user_id,this.roleDetails))
		}
		this.userDetails = {}
		this.roleDetails = {}
		this.checkValidUpdate()
	},
	cancelUpdate:function(){
		this.rolesMap = this.initRolesMap()
		this.userDetails = {}
		this.roleDetails = {}
		this.checkValidUpdate()
		this.setState({
			reRender:true
		})
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
	setInvalid:function(name,val){
		this.invalidState[name] = val
		this.checkValidUpdate()
	},
	toggle:function(){
		// this.isDetailed=!this.isDetailed
		// this.compRef.style.maxHeight = this.isDetailed?'999px':'50px'
		// this.setState({
		// 	reRender:true
		// })
	},
	actionSelected: function(eventKey, event){
		let user = this.props.user;
		let payload;
		if(user.active){
			payload = {
				active: false
			}
			
		}else{
			payload = {
				active: true
			}
		}

		this.store.dispatch(UserActions.updateUserDetails(user.child_id, payload))
	},
	render:Template
})

EditUser.contextTypes = {
	store:React.PropTypes.object
}

export default EditUser
