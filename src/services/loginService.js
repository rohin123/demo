import AjaxWrapper from '../helpers/ajaxWrapper.js'
import Promise from 'promise'
import Constants from '../utils/constants.js'
import StorageHelper from '../helpers/StorageHelper.js'
import store from '../store'
import AppData from '../utils/appData.js'
import LoginActions from '../actions/loginActions.js'

class LoginService{

	tokenAuthentication(token){
		let promiseFunc = (resolve,reject)=>{
			AjaxWrapper.get({
				url:Constants.loginUrl,
				beforeSendCall:function(xhr){
					xhr.setRequestHeader('token',token)
					xhr.setRequestHeader('key',Constants.appkey)
				},
				callback:function(user){
					resolve(user)
				},
				errCallback:function(err){
					reject()
				},
				options:{
					showLoader:true
				}
			})
		}
		
		return new Promise(promiseFunc)
	}

	checkIfLoggedIn(){
		console.log('checkIfLoggedIn')
		let promiseFunc = (resolve,reject)=>{
			let appState = store.getState()
			if(appState&&appState.userinfo&&appState.userinfo.token){
				resolve()	
			}else{
				let token = StorageHelper.getItem(AppData.tokenStorageKey)||null
				if(token){
					this.tokenAuthentication(token).then((user)=>{
						resolve(user)
					},(err)=>{
						reject()
					})
				}else{
					reject()
				}
			}
		}

		return new Promise(promiseFunc)
	}
}

export default new LoginService()