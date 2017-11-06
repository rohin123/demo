import React from 'react'
import Template from './template.jsx'
import PropTypes from 'prop-types'

const Tag = React.createClass({
	getInitialState:function(){
		return {
			reRender:false
		}
	},
	render:Template
})

Tag.propTypes = {
	id:PropTypes.number,
	name:PropTypes.string,
	removeTag:PropTypes.func
}

export default Tag