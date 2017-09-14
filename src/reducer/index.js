import Actions from '../actions/actions.js'
import state from '../store/index.js'
import objectAssign from 'object-assign'
import AppData from '../utils/appData.js'
import CommonFunc from '../helpers/commonFunc.js'


const reducer = function(state={},action){
	let newFlags = null
	switch(action.type){
		case Actions.SET_APP_USER:{
			newFlags = CommonFunc.setStateFlags(['user_set'])
			return objectAssign(	{},
									state,
									{
										userinfo:action.data,
										authState:(action.data)?AppData.authStates.AUTHENTICATED:
																AppData.authStates.NOT_AUTHORIZED,
										bFlags:newFlags
									}
								)
		}

		case Actions.SET_USERS:{
			newFlags = CommonFunc.setStateFlags([])
			return objectAssign(	{},
									state,
									{
										users:action.data,
										bFlags:newFlags
									}
								)
		}

		case Actions.SET_ROLES:{
			newFlags = CommonFunc.setStateFlags([])
			return objectAssign(	{},
									state,
									{
										roles:action.data,
										bFlags:newFlags
									}
								)	
		}

		case Actions.UPDATE_USER:{
			newFlags = CommonFunc.setStateFlags(['user_updated'])
			let udaptedUser = action.data,
				users = CommonFunc.deepCopyObject(state.users),
				updatedUserId = null
			for(var i=0;i<users.length;i++){
				if(users[i]['child_id']==udaptedUser['id']){
					let user = users[i]
					updatedUserId = user.child_id
					user.name = udaptedUser.name
					user.phone_number = udaptedUser.phone_number
					user.email = udaptedUser.email
					if(udaptedUser.bank_details){
						if(!user.bank_details){
							user.bank_details = {}
						}
						user.bank_details.bank_name = udaptedUser.bank_details.bank_name
						user.bank_details.beneficiary_name = udaptedUser.bank_details.beneficiary_name
						user.bank_details.account_number = udaptedUser.bank_details.account_number
						user.bank_details.ifsc_code = udaptedUser.bank_details.ifsc_code
					}
					if(udaptedUser.user_details){
						if(!user.user_details){
							user.user_details = {}
						}
						user.user_details.code = udaptedUser.user_details.code
						user.user_details.designation = udaptedUser.user_details.designation
						user.user_details.department = udaptedUser.user_details.department
					}
					break
				}
			}
			return objectAssign(	{},
									state,
									{
										users:users,
										updatedUserId:updatedUserId,
										bFlags:newFlags
									}
								)	
		}

		case Actions.UPDATE_USER_ROLES:{
			newFlags = CommonFunc.setStateFlags(['user_updated'])
			let user = action.data,
				roleArr = user.role,
				users = CommonFunc.deepCopyObject(state.users)
			for(var i=0;i<users.length;i++){
				if(users[i]['user_id']==user['user_id']){
					users[i]['role'] = roleArr
					break
				}
			}

			return objectAssign({},
								state,
								{
									users:users,
									updatedUserId:user.child_id,
									bFlags:newFlags

								})
		}

		case Actions.ADD_NEW_USER:{
			newFlags = CommonFunc.setStateFlags([])
			let user = action.data,
				users = CommonFunc.deepCopyObject(state.users)
				users.unshift(user)

			return objectAssign(	{},
									state,
									{
										users:users,
										bFlags:newFlags
									}
								)	

		}

		case Actions.SHOW_LOADER:{
			let count = state['loaderCount']+1
			newFlags = CommonFunc.setStateFlags([])
			return objectAssign({},state,{'loaderCount':count,'bFlags':newFlags})
		}

		case Actions.HIDE_LOADER:{
			let count = state['loaderCount']-1
			newFlags = CommonFunc.setStateFlags([])
			return objectAssign({},state,{'loaderCount':count,'bFlags':newFlags})
		}

		default:{
			return state
		}
	}
}

export default reducer