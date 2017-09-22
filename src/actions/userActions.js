import Actions from './actions.js'
import AjaxWrapper from '../helpers/ajaxWrapper.js'
import Constants from '../utils/constants.js'
import NotificationAction from './notificationActions.js'
import Store from '../store'
import CommonFunc from '../helpers/commonFunc.js'

class UserActions{
	getUsers(){
		let state = Store.getState()
		return (dispatch)=>{
			AjaxWrapper.get({
				url:Constants.fetchUsersInOrg.replace(/:organizationId/i,state.userinfo.organization_id),
				beforeSendCall:(xhr)=>{
					xhr.setRequestHeader('key',Constants.appkey)
					xhr.setRequestHeader('token',state.userinfo&&state.userinfo.token)
				},
				callback:(users)=>{
					dispatch(this.setUsers(users))
				},
				errCallback:(err)=>{
					dispatch(NotificationAction.openNotification(err))
				},
				options:{
					showLoader:true
				}
			})
		}
	}

	updateUserDetails(id,payload){
		let state = Store.getState()
		return (dispatch)=>{
			AjaxWrapper.put({
				url:Constants.userApi.replace(/:staff_id/i,id),
				data:payload,
				beforeSendCall:(xhr)=>{
					xhr.setRequestHeader('key',Constants.appkey)
					xhr.setRequestHeader('token',state.userinfo&&state.userinfo.token)
				},
				callback:(user)=>{
					dispatch(this.updateUserDetailsInStore(user))
				},
				errCallback:(err)=>{
					dispatch(NotificationAction.openNotification(err))
				},
				options:{
					showLoader:true
				}
			})
		}
	}

	updateUserRoles(id,payload,newUser=false){
		let state = Store.getState()
		return (dispatch)=>{
			AjaxWrapper.put({
				url:Constants.securityUserApi.replace(/:user_id/i,id),
				data:payload,
				beforeSendCall:(xhr)=>{
					xhr.setRequestHeader('key',Constants.appkey)
					xhr.setRequestHeader('token',state.userinfo&&state.userinfo.token)
				},
				callback:(user)=>{
					if(newUser){
						dispatch(this.addUserInStore(user))
					}else{
						dispatch(this.updateUserRoleInStore(user))
					}	
				},
				errCallback:(err)=>{
					dispatch(NotificationAction.openNotification(err))
				},
				options:{
					showLoader:true
				}
			})
		}
	}

	saveUser(userData,roleData=[]){
	 	let state = Store.getState()
	 	userData.organization = state.userinfo.organization_id
		userData.city = state.userinfo.city
	 	return (dispatch)=>{
	 		AjaxWrapper.post({
	 			url:Constants.createUserApi,
	 			data:userData,
	 			beforeSendCall:(xhr)=>{
	 				xhr.setRequestHeader('key',Constants.appkey)
	 				xhr.setRequestHeader('token',state.userinfo&&state.userinfo.token)
	 			},
	 			callback:(user)=>{
	 				//if(!CommonFunc.checkEmptyObject(roleData)){
	 				dispatch(this.updateUserRoles(user.__user_id,roleData,true))
	 				//}
	 			},
	 			errCallback:(err)=>{
	 				dispatch(NotificationAction.openNotification(err))
	 			},
	 			options:{
	 				showLoader:true
	 			}
	 		})
	 	}
	}

	setUsers(payload){
		return {
			type:Actions.SET_USERS,
			data:payload
		}
	}

	addUserInStore(payload){
		return {
			type:Actions.ADD_NEW_USER,
			data:payload
		}
	}

	updateUserDetailsInStore(payload){
		return {
			type:Actions.UPDATE_USER_DETAILS,
			data:payload
		}
	}

	updateUserRoleInStore(payload){
		return {
			type:Actions.UPDATE_USER_ROLES,
			data:payload
		}
	}
}

export default new UserActions()