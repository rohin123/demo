import Actions from './actions.js'
import AjaxWrapper from '../helpers/ajaxWrapper.js'
import Constants from '../utils/constants.js'
import NotificationAction from './notificationActions.js'
import StorageHelper from '../helpers/storageHelper.js'
import AppData from '../utils/appData.js'

class LoginActions{
	setAppUser(payload){
		return {
			type:Actions.SET_APP_USER,
			data:payload
		}
	}

	login(payload){
		//console.log('login==>',Constants.appkey,Constants.loginUrl)
		return (dispatch)=>{
			AjaxWrapper.post({
				url:Constants.loginUrl,
				data:payload,
				beforeSendCall:(xhr)=>{
					xhr.setRequestHeader('key',Constants.appkey)
					xhr.setRequestHeader('token',undefined)
				},
				callback:(user)=>{
					StorageHelper.setItem(AppData.tokenStorageKey,user.token)
					dispatch(this.setAppUser(user))
				},
				errCallback:(err)=>{
					dispatch(NotificationAction.openNotification('Error'))
				},
				options:{
					showLoader:true
				}
			})
		}
	}
}

export default new LoginActions()