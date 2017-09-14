import React from 'react'
import SelectOption from '../selectOption'

const render = function(){
	let availableOptionStyle = this.showAvailableOptions?'available-options-div':'hide'
	let selectedOptionsHtml = (this.props.options||[]).map((item,index)=>{
		return (	
					<SelectOption key={item.toString()+index} 
									value={item}
									selectedClass={'red-option'}
									select={this.toggleOptionState}
									active={this.showAvailableOptions}/>
				)
	})

	let availableOptionsHtml = (this.props.allOptions||[]).map((item,index)=>{
		return (	
					<SelectOption key={item.toString()+index} 
									value={item}
									selectedClass={'green-option'}
									select={this.toggleOptionState}
									active={this.showAvailableOptions}/>
				)
	})

	return (
			<div className='multi-select-div'>	
				<div className='selected-options-div'>
					{selectedOptionsHtml}
					<div className={this.showAvailableOptions?'buttons-div':'hide'}>
						<button className='button violet-button multi-select-button'
									onClick={this.cancelChanges}>
									Cancel
						</button>
						<button className='button violet-button multi-select-button'
									onClick={this.applyChanges}>
									Apply
						</button>
					</div>
				</div>
				<div className={availableOptionStyle}>
					{availableOptionsHtml}
				</div>
				<div className={this.showAvailableOptions?'hide':'buttons-div'}>
					<button className='button violet-button multi-select-button' onClick={this.editOptions}>Edit</button>
				</div>
			</div>
		)
}

export default render 