import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import LoginComponent from './components/loginComponent'
import HomeComponent from './components/home'
import {Provider} from 'react-redux'
import store from './store/index.js'
import Loader from './components/loaderComponent'
import NotificationPanel from './components/notificationPanel'
import AuthWrapper from './components/authWrapper'

const render = function(){
	console.log('main--->',store.getState())
 	return (<Router>
 				<Provider store={store}>
	 				<div>
	 					<Loader/>
						<NotificationPanel/>
						<Route exact path='/' component={AuthWrapper(HomeComponent)}/>
	 					<Route path='/login' component={LoginComponent}/>
	 				</div>
	 			</Provider>	
 			</Router>)
}

export default render