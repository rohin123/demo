import React from 'react'
import SelectOption from '../selectOption'
import Role from '../role'

const render =  function(){
	let roles = Object.keys(this.props.rolesMap)||[],
		innerHtml1 = roles.filter((item)=>{
						return this.props.rolesMap[item]
					}).map((item,index)=>{
						return (
								<Role key={item.toString()+index}
										role={item}
										isSelected={this.props.rolesMap[item]}
										select={this.toggleOptionState}
										readonly={this.props.readonly}/>
												)
					}),
		innerHtml2 = roles.filter((item)=>{
						return !this.props.rolesMap[item]
					}).map((item,index)=>{
						return (
								<Role key={item.toString()+index}
										role={item}
										isSelected={this.props.rolesMap[item]}
										select={this.toggleOptionState}
										readonly={this.props.readonly}/>
												)
					})			

	return (
			<div className='roles-selection'>
				{innerHtml1}
				{innerHtml2}
			</div>
		)
}


export default render