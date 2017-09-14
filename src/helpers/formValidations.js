import AppData from '../utils/appData.js'
import CommonFunc from './commonFunc.js'

class FormValidations{
	checkVaildInput(key,val){
		console.log('input-->',key,val)
		switch(key){
			case AppData.inputValidations.REQUIRED:{
				return {
							valid:val?true:false,
							defaultMssg:'Input is required'
						}
			}

			case AppData.inputValidations.NUMBER:{
				return {
					valid:val?!isNaN(val):true,
					defaultMssg:'Input must be number'
				}
			}

			case AppData.inputValidations.EMAIL:{
				let valid = val?CommonFunc.checkValidEmail(val):true
				return {
					valid:valid,
					defaultMssg:'Input must be of type email'
				}
			}

			default:{
				return {
					valid:true,
					defaultMssg:''
				}
			}
		}
	}
}

export default new FormValidations()