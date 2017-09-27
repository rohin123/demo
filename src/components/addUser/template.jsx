import React from 'react'
import LabeledInput from '../labeledInput'
import MultiSelect from '../multiSelect'
import AppData from '../../utils/appData.js'

const render = function(){
	let currRoles = (Object.keys(this.rolesMap)||[]).filter((role)=>{
						return this.rolesMap[role]
					})	
	let availableRoles = (Object.keys(this.rolesMap)||[]).filter((role)=>{
							return !this.rolesMap[role]
						})
	return (
			<div className='add-user-div wh-center-aligned'>
				<h2>User Details</h2>
				<div className='user-details-div'>
					<LabeledInput label={'Name'} name={'name'} type={'text'} 
									changeHandler={this.addUserBasicDetails}
									validationArr={[{key:AppData.inputValidations.REQUIRED}]}
									setInvalid={this.setInvalid}/>
					<LabeledInput label={'User Name'} name={'user_name'} 
									type={'text'} changeHandler={this.addUserBasicDetails}
									validationArr={[{key:AppData.inputValidations.REQUIRED, key:AppData.inputValidations.USERNAME}]}
									setInvalid={this.setInvalid}/>
					<LabeledInput label={'Password'} name={'password'} 
									type={'password'} changeHandler={this.addUserBasicDetails}
									validationArr={[{key:AppData.inputValidations.REQUIRED}]}
									setInvalid={this.setInvalid}/>				
					<LabeledInput label={'Phone Number'} name={'phone_number'} 
									type={'text'} changeHandler={this.addUserBasicDetails}
									validationArr={[{key:AppData.inputValidations.NUMBER}]}
									setInvalid={this.setInvalid}/>
					<LabeledInput label={'Email'} name={'email'} type={'text'} 
									changeHandler={this.addUserBasicDetails}
									validationArr={[{key:AppData.inputValidations.EMAIL}]}
									setInvalid={this.setInvalid}/>
					<LabeledInput label={'Employee Code'} name={'code'} 
								type={'text'} 
								changeHandler={this.addUserEmpDetails}
								validationArr={[{key:AppData.inputValidations.REQUIRED}]}
								setInvalid={this.setInvalid} />
					<LabeledInput label={'Designation'} name={'designation'} 
									type={'text'} 
									changeHandler={this.addUserEmpDetails}/>
					<LabeledInput label={'Department'} name={'department'} 
									type={'text'} 
									changeHandler={this.addUserEmpDetails}/>
					<LabeledInput label={'Bank Name'} name={'bank_name'} 
									type={'text'} 
									changeHandler={this.addUserBankDetails}/>
					<LabeledInput label={'Beneficiary Name'} name={'beneficiary_name'} 
									type={'text'} 
									changeHandler={this.addUserBankDetails}/>
					<LabeledInput label={'Account Number'} name={'account_number'} 
									type={'text'} 
									changeHandler={this.addUserBankDetails}
									validationArr={[{key:AppData.inputValidations.NUMBER}]}
									setInvalid={this.setInvalid}/>
					<LabeledInput label={'Ifsc Code'} name={'ifsc_code'} 
									type={'text'} 
									changeHandler={this.addUserBankDetails}/>																												
				</div>
				<h2>User Roles</h2>
				<div className='roles-div'>
					<MultiSelect options={currRoles||[]} allOptions={availableRoles||[]} 
									changeHandler={this.addUserRoles}/>
				</div>	
				<div className={this.isValidSave?'buttons-div':'hide'}>
					<button className='button green-button edit-button' onClick={this.saveUser}>SAVE</button>
				</div>
			</div>
		)
}

export default render

