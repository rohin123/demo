import React from 'react'
import TopBar from '../topBar'
import UserList from '../userList'
import Popup from '../popupComp'

const render = function(){
	console.log('render home')
	let popupHtml = this.popupElem
	return (<div className='home-page'>	
				<TopBar setPopup={this.setPopup} setUser={this.setUser}/>
				<UserList setPopup={this.setPopup} selectedUserId={this.selectedUserId}/>	
				<Popup isOpen = {this.showPopup} close={this.closePopup}>
					{popupHtml}
				</Popup>				
			</div>
		)
}

export default render