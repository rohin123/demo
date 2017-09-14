import React from 'react'
import AutoComplete from '../genericAutoComplete'
import UserService from '../../services/userService.js'
import AddUser from '../addUser'

const render = function(){
	let users = this.store.getState().users||[]
	return (	
			<div className='top-bar'>
				<div className='search-box'>
					<label className={'label '+this.labelClass}>Search User</label>
					<AutoComplete name={'username/empid'}   
										  focusIn={this.searchFocusIn} 
										  focusOut={this.searchFocusOut} 
										  setItem={this.setUser}
										  list={users}										  
										  valid={true}/>
				</div>
				<div className='top-bar-buttons'>
					<button className='button green-button add-user-button' onClick={this.addUserPopup}>
						Add User
					</button>
				</div>
			</div>
				
		)
}

export default render