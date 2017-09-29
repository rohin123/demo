import React from 'react'
import LabeledInput from '../labeledInput'
import MultiSelect from '../multiSelect'
import AppData from '../../utils/appData.js'
import RoleSelection from '../roleSelection'
import ResetPassword from '../resetPassComp'

const render = function(){
	let user = this.props.user,
		innerHtml = null
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
				<h2>User Details</h2>
				<div className='user-details-div'>
					<LabeledInput label={'Name'} name={'name'} value={user.name||undefined} type={'text'} 
									changeHandler={this.editUserBasicDetails}/>
					<LabeledInput label={'User Name'} name={'user_name'} value={user.user_name||undefined} 
									type={'text'} changeHandler={this.editUserBasicDetails} readonly={true}/>
					<LabeledInput label={'Phone Number'} name={'phone_number'} value={user.phone_number||undefined} 
									type={'text'} changeHandler={this.editUserBasicDetails}
									validationArr={[{key:AppData.inputValidations.NUMBER}]}
									setInvalid={this.setInvalid}/>
					<LabeledInput label={'Email'} name={'email'} value={user.email||undefined} type={'text'} 
									changeHandler={this.editUserBasicDetails}
									validationArr={[{key:AppData.inputValidations.EMAIL}]}
									setInvalid={this.setInvalid}/>
					<LabeledInput label={'Employee Code'} name={'code'} 
									value={(user.user_details&&user.user_details.code)||undefined} type={'text'} 
									changeHandler={this.editUserEmpDetails}/>
					<LabeledInput label={'Designation'} name={'designation'} 
									value={(user.user_details&&user.user_details.designation)||undefined} type={'text'} 
									changeHandler={this.editUserEmpDetails}/>
					<LabeledInput label={'Department'} name={'department'} 
									value={(user.user_details&&user.user_details.department)||undefined} type={'text'} 
									changeHandler={this.editUserEmpDetails}/>
					<LabeledInput label={'Bank Name'} name={'bank_name'} 
									value={(user.bank_details&&user.bank_details.bank_name)||undefined} type={'text'} 
									changeHandler={this.editUserBankDetails}/>
					<LabeledInput label={'Beneficiary Name'} name={'beneficiary_name'} 
									value={(user.bank_details&&user.bank_details.beneficiary_name)||undefined} type={'text'} 
									changeHandler={this.editUserBankDetails}/>
					<LabeledInput label={'Account Number'} name={'account_number'} 
									value={(user.bank_details&&user.bank_details.account_number)||undefined} type={'text'} 
									changeHandler={this.editUserBankDetails}
									validationArr={[{key:AppData.inputValidations.NUMBER}]}
									setInvalid={this.setInvalid}/>
					<LabeledInput label={'Ifsc Code'} name={'ifsc_code'} 
									value={(user.bank_details&&user.bank_details.ifsc_code)||undefined} type={'text'} 
									changeHandler={this.editUserBankDetails}/>	
					<div className='reset-pass-button' onClick={this.resetPassInit}>
								ResetPass
								{this.showResetPassWidget?	<div className='reset-pass-div' onClick={this.stopBubbling}>
																<ResetPassword/>
															</div>:null}
					</div>																														
				</div>
				<h2>User Roles</h2>
				<div className='roles-div'>
					{/*<MultiSelect options={currRoles||[]} allOptions={availableRoles||[]} 
									changeHandler={this.editUserRoles}/>*/}
					<RoleSelection rolesMap={this.rolesMap} edit={this.editUserRoles}/>				
				</div>	
				<div className={this.isUpdated?'buttons-div':'hide'}>
					<button className='button green-button edit-button' onClick={this.updateUser}>UPDATE</button>
					<button className='button red-button edit-button' onClick={this.cancelUpdate}>CANCEL</button>
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

