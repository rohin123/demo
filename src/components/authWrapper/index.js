import React from 'react'
import AppData from '../../utils/appData.js'
import LoginService from '../../services/loginService.js'
import {Route,Redirect} from 'react-router-dom'
import LoginComponent from '../loginComponent'
import store from '../../store'
import LoginActions from '../../actions/loginActions.js'

export default function authWrapper(WrappedComponent) {
  // ...and returns another component...
  return class extends React.Component{
    constructor(props) {
      console.log(props)
      super(props)
      this.props = props
    }

    componentDidMount(){
      LoginService.checkIfLoggedIn().then((user)=>{
        store.dispatch(LoginActions.setAppUser(user))
        this.setState({
          reRender:true
        })
      },(err)=>{
        store.dispatch(LoginActions.setAppUser(null))
        this.setState({
          reRender:true
        })
      })
    }

    render(){
      let state = store.getState(),
          authState = state.authState;

      if(authState == AppData.authStates.AUTHENTICATED){
        return <Route path={this.props.location.pathname} component={WrappedComponent}/>
      }else if(authState==AppData.authStates.NOT_AUTHORIZED){
        return <Redirect to={{pathname:'/login'}}/>
      }else{
        //console.log('authentication in progress...')
        return <div>authentication in progress...</div>
      }
    }
  }
}
