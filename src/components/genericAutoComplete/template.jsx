import React from 'react'

const render = function(){
	let self = this,
		autocompdiv = this.valid?'autocompdiv valid-autocomplete':'autocompdiv invalid-autocomplete',
		autocomplist = this.autocompList.length?'autocomplist '+this.autocompListStyle:'hide'
		
	let autocompHTML = this.autocompList.map(function(item,index){
		return (
				<div key={index} className='autocompitem' onMouseDown={self.setItem.bind(self,item)}>
					<p>{item.name}</p>
					<span>{item.info}</span>
				</div>
			)
	})

	return (
			<div className={autocompdiv} ref='autoCompRef' onClick={this.stopBubbling}>
				<input ref='autocompInput' type='text' defaultValue={this.defaultVal} onChange={this.autoComplete} onFocus={this.focusIn} onBlur={this.focusOut}></input>
				<div className={autocomplist}>
					{autocompHTML}
				</div>
			</div>
		)
}

export default render