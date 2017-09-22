import AjaxWrapper from '../helpers/ajaxWrapper.js'
import Promise from 'promise'
import Constants from '../utils/constants.js'
import StorageHelper from '../helpers/storageHelper.js'
import store from '../store'
import AppData from '../utils/appData.js'
import LoginActions from '../actions/loginActions.js'

class LoginService{

	tokenAuthentication(token){
		console.log('tokenAuthentication==>',token)
		let promiseFunc = (resolve,reject)=>{
			AjaxWrapper.get({
				url:Constants.loginUrl,
				callback:function(user){
					let isValid = (user.role||[]).some((role)=>{
						return role==AppData.validRole
					})
					if(isValid){
						resolve(user)	
					}else{
						reject()
					}
				},
				errCallback:function(err){
					reject()
				},
				options:{
					showLoader:true,
					token:token
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
				console.log('checkIfLoggedIn-->',token)
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