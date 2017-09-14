import CommonFunc from './common_func.js'

class ClosePopup{
	init(){
		this.eventListeners = {}
		document.addEventListener('click',this.eventListenersFunc.bind(this))
	}

	eventListenersFunc(e){
		(Object.keys(this.eventListeners)||[]).map((key)=>{
			(this.eventListeners[key])(e)
		})
	}

	addListenerFunc(func){
		let key = CommonFunc.randString(10)
		while(this.eventListeners[key]){
			key = CommonFunc.randString(10)
		}

		this.eventListeners[key] = func
		//console.log('addListenerFunc-->',key,this.eventListeners)
		return key
	}

	removeListenerFunc(key){
		delete this.eventListeners[key]
		//console.log('removeListenerFunc-->',key,this.eventListeners)
	}

	destroy(){
		document.removeEventListener('click',this.eventListenersFunc.bind(this))	
	}
}

export default new ClosePopup()