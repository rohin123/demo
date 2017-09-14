import CommonFunc from "./common_func";

class EventListenerHelper{
	setBodyKeyEventInitialized(){
		this.bodyKeyEventCb = {};
		this.bodyKeyEventInitialized = true;
	}

	getBodyKeyEventInitialized(){
		return this.bodyKeyEventInitialized;
	}

	/*
		Left Arrow Key : 37
		Right Arrow Key : 39
	*/
	attachArrowKeys(node, funcTocall){
		if(!CommonFunc.isUndefined(node)){
			// const attachedListeners = getEventListeners(node);
			// const keydownListerner = attachedListeners.keydown;
			// if( typeof keydownListerner != "undefined" ){
			// 	const firstListener = keydownListerner[0];
			// 	const prevListenerFunc = firstListener.listener;
			// 	firstListener.listener = function(event){
			// 		console.log('----adding second listener----');
			// 		const keyCode = event.keyCode;
			// 		if(keyCode === 37){
			// 			funcTocall && funcTocall('prev');
			// 		}else if(keyCode === 39){
			// 			funcTocall && funcTocall('next');
			// 		}

			// 		prevListenerFunc(event);
			// 	}

			// 	return function(){
			// 		firstListener.listener = prevListenerFunc;
			// 	}
			// }else{
			const eventCallback = function(event){

				const keyCode = event.keyCode;
				if(keyCode === 37){
					funcTocall && funcTocall('prev');
				}else if(keyCode === 39){
					funcTocall && funcTocall('next');
				}
			};

			node.addEventListener("keydown", eventCallback);

			return function(){
				node.removeEventListener("keydown", eventCallback);
			}
			// }
			
		}
		return;
	}

	attachKey(node, keyToAttach, funcTocall){
		const eventCallback = function(event){

			const keyCode = event.keyCode;
			if(keyCode === keyToAttach){
				funcTocall && funcTocall();
			}
		};

		node.addEventListener("keydown", eventCallback);

		return function(){
			node.removeEventListener("keydown", eventCallback);
		}
	}

	attachKeyToBody(keyToAttach, funcToCall){
		const self = this;
		if(!CommonFunc.isUndefined(funcToCall) && !CommonFunc.isUndefined(keyToAttach)){

			if(!self.getBodyKeyEventInitialized()){
				self.setBodyKeyEventInitialized();
				const bodyELem = document.body;

				bodyELem.addEventListener("keydown", function(event){
					const keyCode = event.keyCode;
					const allCallbacks = self.bodyKeyEventCb[keyCode];

					if(!CommonFunc.isUndefined(allCallbacks) && allCallbacks.length > 0){
						allCallbacks.map(function(currCb){
							currCb(event);
						});
					}
				});
			}

			if(CommonFunc.isUndefined(self.bodyKeyEventCb[keyToAttach])){
				self.bodyKeyEventCb[keyToAttach] = [];
			}

			self.bodyKeyEventCb[keyToAttach].push(funcToCall);
			let currIndex = self.bodyKeyEventCb[keyToAttach].length;
		
			return function(){
				if(!CommonFunc.isUndefined(self.bodyKeyEventCb[keyToAttach])){
					const allCallbacks = self.bodyKeyEventCb[keyToAttach];
					if(!CommonFunc.isUndefined(allCallbacks[currIndex - 1])){
						allCallbacks.splice(currIndex - 1, 1);
					}
				}
			}

		}

		return;
		
	}
}

export default new EventListenerHelper()