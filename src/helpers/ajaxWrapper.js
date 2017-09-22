import store from '../store/index.js'
import LoaderActions from '../actions/loaderActions.js'
import Constants from '../utils/constants.js'

class AjaxWrapper{
	
	get({url: url, callback: callback, errCallback: errCallback, beforeSendCall:beforeSendCall=function(){}, options: options={}} = {}){
		let showLoader = (options.showLoader)? true : false;
		let state = store.getState();

		$.ajax({
			url : url,
			type : 'GET',
			beforeSend: function(xhr){
				if(showLoader==true){
					store.dispatch(LoaderActions.showLoader())
				}
				beforeSendCall(xhr);
				xhr.setRequestHeader('key',Constants.appkey);
				xhr.setRequestHeader('token', state.userinfo && state.userinfo.token);
			}

		}).fail(function(err){
			if(err){
				if(showLoader==true){
					store.dispatch(LoaderActions.hideLoader())
				}
    			errCallback(err);
    		}
		}).done(function(item, statusText, response){
			if(showLoader==true){
					store.dispatch(LoaderActions.hideLoader())
				}
			callback(item);
		 });
	}

	post({url: url, data: data, callback: callback, errCallback: errCallback, beforeSendCall:beforeSendCall=function(){}, options: options={}}={}){
		let showLoader = (options.showLoader)? true : false;
		let state = store.getState();

		$.ajax({
			url : url,
			type : 'POST',
			data : JSON.stringify(data),
			contentType : 'application/json',
			beforeSend: function(xhr){
				if(showLoader==true){
					store.dispatch(LoaderActions.showLoader())
				}
				beforeSendCall(xhr)
				xhr.setRequestHeader('key',Constants.appkey);
				xhr.setRequestHeader('token', state.userinfo && state.userinfo.token);
			}
		}).fail(function(err){
			if(err){
				if(showLoader==true){
					store.dispatch(LoaderActions.hideLoader())
				}
    			errCallback(err);
    		}
		}).done(function(item, statusText, response){
			if(showLoader==true){
					store.dispatch(LoaderActions.hideLoader())
				}	
			callback(item);
		 });
	}

	put({url : url, data : data, beforeSendCall:beforeSendCall=function(){} ,errCallback : errCallback, callback : callback, options: options={} }){
		let showLoader = (options.showLoader)? true : false;
		let state = store.getState();

		$.ajax({
			url: url,
    		type: 'PUT',
    		data: JSON.stringify(data),
    		contentType : 'application/json',
    		beforeSend:function(xhr){
    			if(showLoader==true){
					store.dispatch(LoaderActions.showLoader())
				}
				beforeSendCall(xhr)
				xhr.setRequestHeader('key',Constants.appkey);
				xhr.setRequestHeader('token', state.userinfo && state.userinfo.token);
    		}
    	}).fail(function(err){
    		if(err){
    			if(showLoader==true){
					store.dispatch(LoaderActions.hideLoader())
				}
    			errCallback(err);
    		}
    	}).done(function(item,statusText,response){
    		if(showLoader==true){
					store.dispatch(LoaderActions.hideLoader())
				}
    		callback(item);
    	});
	}

	delete({url : url, data : data, errCallback : errCallback, callback : callback, beforeSendCall:beforeSendCall=function(){}, options: options={} }){
		let showLoader = (options.showLoader)? true : false;
		let state = store.getState();

		$.ajax({
			url: url,
    		type: 'DELETE',
    		data: JSON.stringify(data),
    		contentType : 'application/json',
    		beforeSend: function(xhr){
				beforeSendCall(xhr)
				xhr.setRequestHeader('key',Constants.appkey);
				xhr.setRequestHeader('token', state.userinfo && state.userinfo.token);
			}
    	}).fail(function(err){

    		if(err){
    			errCallback(err);
    		}
    	}).done(function(item,statusText,response){
    		callback(item);
    	})
	}
}

export default new AjaxWrapper();