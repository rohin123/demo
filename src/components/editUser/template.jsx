import React from 'react'
import LabeledInput from '../labeledInput'
import MultiSelect from '../multiSelect'
import AppData from '../../utils/appData.js'
import RoleSelection from '../roleselection'
import {Dropdown, MenuItem, DropdownToggle, DropdownMenu} from '../../modules/dropDown';

const render = function(){
	let user = this.props.user,
		innerHtml = null,
		userActive = user.active === true ? true : false;

	let blockedLabel = userActive ? undefined : (<div className="blocked-label">Blocked</div>);
	//allRoles = this.props.allRoles
	// let currRoles = (Object.keys(this.rolesMap)||[]).filter((role)=>{
	// 					return this.rolesMap[role]
	// 				})	
	// let availableRoles = (Object.keys(this.rolesMap)||[]).filter((role)=>{
	// 						return !this.rolesMap[role]
	//					})
	
	//if(this.isDetailed){
		innerHtml = (
			<div>
				{blockedLabel}
				<h2>User Details</h2>
				<div className='user-details-div'>
					<LabeledInput label={'Name'} name={'name'} value={user.name||undefined} type={'text'} 
									changeHandler={this.editUserBasicDetails}
									readonly={ !userActive }/>
					<LabeledInput label={'User Name'} name={'user_name'} value={user.user_name||undefined} 
									type={'text'} changeHandler={this.editUserBasicDetails} readonly={true}/>
					<LabeledInput label={'Phone Number'} name={'phone_number'} value={user.phone_number||undefined} 
									type={'text'} changeHandler={this.editUserBasicDetails}
									validationArr={[{key:AppData.inputValidations.NUMBER}]}
									setInvalid={this.setInvalid}
									readonly={ !userActive }/>
					<LabeledInput label={'Email'} name={'email'} value={user.email||undefined} type={'text'} 
									changeHandler={this.editUserBasicDetails}
									validationArr={[{key:AppData.inputValidations.EMAIL}]}
									setInvalid={this.setInvalid}
									readonly={ !userActive }/>
					<LabeledInput label={'Employee Code'} name={'code'} 
									value={(user.user_details&&user.user_details.code)||undefined} type={'text'} 
									changeHandler={this.editUserEmpDetails}
									readonly={true}/>
					<LabeledInput label={'Designation'} name={'designation'} 
									value={(user.user_details&&user.user_details.designation)||undefined} type={'text'} 
									changeHandler={this.editUserEmpDetails}
									readonly={ !userActive }/>
					<LabeledInput label={'Department'} name={'department'} 
									value={(user.user_details&&user.user_details.department)||undefined} type={'text'} 
									changeHandler={this.editUserEmpDetails}
									readonly={ !userActive }/>
					<LabeledInput label={'Bank Name'} name={'bank_name'} 
									value={(user.bank_details&&user.bank_details.bank_name)||undefined} type={'text'} 
									changeHandler={this.editUserBankDetails}/>
					<LabeledInput label={'Beneficiary Name'} name={'beneficiary_name'} 
									value={(user.bank_details&&user.bank_details.beneficiary_name)||undefined} type={'text'} 
									changeHandler={this.editUserBankDetails}
									readonly={ !userActive }/>
					<LabeledInput label={'Account Number'} name={'account_number'} 
									value={(user.bank_details&&user.bank_details.account_number)||undefined} type={'text'} 
									changeHandler={this.editUserBankDetails}
									validationArr={[{key:AppData.inputValidations.NUMBER}]}
									setInvalid={this.setInvalid}
									readonly={ !userActive }/>
					<LabeledInput label={'Ifsc Code'} name={'ifsc_code'} 
									value={(user.bank_details&&user.bank_details.ifsc_code)||undefined} type={'text'} 
									changeHandler={this.editUserBankDetails}
									readonly={ !userActive }/>																												
				</div>

				<h2>USER ROLES</h2>
				<div className='roles-div'>
					{/*<MultiSelect options={currRoles||[]} allOptions={availableRoles||[]} 
									changeHandler={this.editUserRoles}/>*/}
					<RoleSelection rolesMap={this.rolesMap} edit={this.editUserRoles} readonly={ !userActive }/>				
				</div>	
				<div className={this.isUpdated?'buttons-div':'hide'}>
					<button className='button green-button edit-button' onClick={this.updateUser}>UPDATE</button>
					<button className='button red-button edit-button' onClick={this.cancelUpdate}>CANCEL</button>
				</div>
				<div className="dropdown-parent">
					<Dropdown pullRight onSelect={ this.actionSelected }>
						<DropdownToggle
						btnStyle="flat">
							Actions
						</DropdownToggle>
						<DropdownMenu>
							<MenuItem header>Select Action</MenuItem>
							<MenuItem divider />
							<MenuItem eventKey={1}>{ userActive ? 'Block' : 'UnBlock' }</MenuItem>
						</DropdownMenu>
					</Dropdown>
				</div>
				
			</div>
		)
	// }else{
	// 	//innerHtml =	<div style={{"width":"100%","height":"50px"}}></div>
	// }
	return <div ref={(elem)=>{this.compRef = elem}} className='edit-user-div' onClick={this.toggle}>
					{innerHtml}
			</div>
}


export default render

