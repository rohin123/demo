import React from 'react'
import EditUser from '../editUser'

const render =  function(){
	let state = this.store.getState()
	let	userListHtml = null
	if(this.props.selectedUserId){
		for(var i= 0; i<(state.users||[]).length;i++){
			if(state.users[i].user_id == this.props.selectedUserId){
				userListHtml = <EditUser user={state.users[i]} allRoles={state.roles||[]}/>
				break
			}
		}
	}else{
		userListHtml = (state.users||[]).map((item,index)=>{
			return <EditUser key={item._id} user={item} allRoles={state.roles||[]}/>
		})
	}
	return (
			<div className='user-list-div'>
				{userListHtml}
			</div>
		)
}

export default render