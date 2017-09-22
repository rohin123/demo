import Actions from './actions.js'
import AjaxWrapper from '../helpers/ajaxWrapper.js'
import Constants from '../utils/constants.js'
import NotificationAction from './notificationActions.js'
import Store from '../store'

class RoleActions{
	getRoles(){
		let state = Store.getState() 
		return (dispatch)=>{
			AjaxWrapper.get({
				url:Constants.rolesInOrgApi.replace(/:organization_id/,state.userinfo.organization.id),
				// beforeSendCall:(xhr)=>{
				// 	xhr.setRequestHeader('key',Constants.appkey)
				// 	xhr.setRequestHeader('token',state.userinfo&&state.userinfo.token)
				// },
				callback:(roles)=>{
					dispatch(this.setRoles(roles))
				},
				errCallback:(err)=>{
					NotificationAction.openNotification(err)
				},
				options:{
					showLoader:true
				}
			})
		}
	}

	setRoles(payload){
		return {
			type:Actions.SET_ROLES,
			data:payload
		}
	}
}

export default new RoleActions()