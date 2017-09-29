import React from 'react'
import LabeledInput from '../labeledInput'

const render = function(){
	return (
			<div className='reset-pass-form'>
				<div className='form-elem-div'>
					<div>
						<LabeledInput label={'New Password'} name={'password'} value={undefined} 
									type={'password'} changeHandler={this.editNewPass} readonly={true}/>
					</div>
					<div>				
						<LabeledInput label={'Confirm Password'} name={'confirm_password'} value={undefined} 
									type={'password'} changeHandler={this.editConfirmPass} readonly={true}/>
					</div>								
				</div>
				<div className='button reset-pass-button' onClick={this.resetPass}>
					RESET
				</div>
			</div>
		)
}

export default render