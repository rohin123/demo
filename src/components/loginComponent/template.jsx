import React from 'react';

const render =  function(){
	return (
			<div className="login-page-div full-vw-div">
				<div className="login-div wh-center-aligned">
					<h2>Login </h2>
					
					<form>
						<input type='text' 
								onChange={this._handleUserNameChanged}
								value={this.state._username}
								placeholder='Enter your user name'/>

						<input type='password' 
								value={this.state._password}
								onChange={this._handlePasswordChanged}
								placeholder='Password' />
						
						<button type="submit" value="Sign In" 
								onClick={this._handleFormSubmit}>Sign In</button>
					</form>

				</div>
			</div>
		)
}

export default render;