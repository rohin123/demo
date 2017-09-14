import AjaxWrapper from '../helpers/ajaxWrapper.js'
import Promise from 'promise'
import Constants from '../utils/constants.js'

class UserService{
	searchUser(payload){
		let promiseFunc = (resolve,reject)=>{
			AjaxWrapper.post({
				url:Constants.userSearch,
				data:payload,
				callback:(res)=>{
					resolve(res)
				},
				errCallback:(err)=>{
					reject(err)
				}
			})
		}

		return new Promise(promiseFunc)
	}
}

export default new UserService()