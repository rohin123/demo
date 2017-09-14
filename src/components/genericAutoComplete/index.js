import React from 'react'
import Template from './template.jsx'
import {} from '../../../style/genericAutoComplete.scss'

const GenericAutoComplete = React.createClass({
	getInitialState:function(){
		this.list = this.props.list
		this.index = this.props.index
		this.defaultVal = this.props.value?this.props.value:''
		this.autocompList = []
		this.fetch = this.props.fetch
		this.fetchCallFunc = this.props.fetchCallFunc
		this.dependent = this.props.dependent
		this.valid = this.props.valid
		this.inputFocus = this.props.inputFocus
		this.autoCompInputOldVal = ''
		this.validInputFunc = this.props.validInputFunc
		this.searchStringLen = 0
		this.autocompListStyle = this.props.autocompListStyle?this.props.autocompListStyle:''
		this.dependentFetchFunc = this.props.dependentFetchFunc?this.props.dependentFetchFunc:null
		return {
			reRender:false
		}
	},
	componentWillReceiveProps:function(nextProps){
		this.list = nextProps.list
		this.valid = nextProps.valid
		this.inputFocus = nextProps.inputFocus
		this.autocompListStyle = nextProps.autocompListStyle?nextProps.autocompListStyle:''
		//this.fetch = nextProps.fetch
		this.setState({
			reRender:true
		})
	},
	componentDidMount:function(){
		if(this.inputFocus&&this.inputFocus['focus']&&(this.index==this.inputFocus['index'])){
			if(this.refs['autocompInput']){
				this.refs['autocompInput'].focus()
			}
		}
	},
	componentDidUpdate:function(){
		if(this.inputFocus&&this.inputFocus['focus']&&(this.index==this.inputFocus['index'])){
			if(this.refs['autocompInput']){
				this.refs['autocompInput'].focus()
			}
		}
	},
	componentWillMount: function() {
    },
	autoComplete:function(e){
		//console.log('on change called for autocomplete')
		//e.persist()
		if(this.autoCompInputOldVal!=e.target.value){
			this.autoCompInputOldVal = e.target.value
			let self = this
			this.searchStringLen = e.target.value.length
			if(e.target.value.length>=3){
				if(this.fetch){
					//console.log('fetch autocomplete list')
					self.fetchCallFunc(e.target.value).then((res)=>{
						//console.log('list---------->',res)
						if(self.searchStringLen>=3){
							self.autocompList = res
						}	
						self.setState({
							reRender:true
						})
					},(err)=>{
						//console.log(err)
						self.autocompList = []
						self.setState({
							reRender:true
						})
					})
				}else{
					//console.log('list',this.list)
					this.autocompList = []
					let val = e.target.value,list = this.list
					if(val.length>1){
						let re = new RegExp(val, "i")
						for(var i=0;i<list.length;i++){
							if(re.test(list[i].name)){
								this.autocompList.push(list[i])
							}
						}
						this.setState({
							reRender:true
						})
					}
				}
			}else{
				this.autocompList = []
				this.setState({
					reRender:true
				})
			}
			this.props.setItem({'name':e.target.value},this.props.name,this.index,0)
		}
	},
	setItem:function(item,e){
		e.stopPropagation()
		if(this.dependentFetchFunc){
			this.dependentFetchFunc(item['id']).then((res)=>{
				//console.log(res)
				item['dependent'] = item['dependent'].concat(res)
				//console.log("item%^^$%^^^^&",item)
				this.setItemInnerFunc(item)
			},(err)=>{
				console.log(err)
				this.setItemInnerFunc(item)
			})
		}else{
			this.setItemInnerFunc(item)
		}
		//console.log('itemwa',item)
		
	},
	setItemInnerFunc:function(item){
		//console.log(item)
		if(this.validInputFunc){
			this.validInputFunc(item['id']).then((res)=>{
				//console.log("validInputFunc  resolved")
				this.props.setItem(item,this.props.name,this.index,this.dependent,{state:true})
				this.refs.autocompInput.value = item.name
				this.autocompList = []
				//this.refs.autocompInput.style.borderBottom = '1px solid #c3c3c3'
				this.setState({
					reRender:true
				})
			},(err)=>{
				//console.log("validInputFunc  rejected")
				this.refs.autocompInput.value = item.name
				this.autocompList = []
				this.props.setItem(item,this.props.name,this.index,this.dependent,{state:false})
				//this.refs.autocompInput.style.borderBottom = '1px solid red'
				this.setState({
					reRender:true
				})
			})
		}else{
			this.props.setItem(item,this.props.name,this.index,this.dependent)
			this.refs.autocompInput.value = item.name
			this.autocompList = []
			this.setState({
					reRender:true
				})
		}
	},
	focusIn:function(e){
		this.refs.autoCompRef.style.zIndex = '3'
		if(this.props.focusIn){
			this.props.focusIn(this.index)
		}
	},
	focusOut:function(e){
		this.refs.autoCompRef.style.zIndex = '2'
		this.autocompList = []
		this.setState({
			reRender:true
		})
		if(this.props.focusOut){
			this.props.focusOut(this.index,e)
		}
	},
	stopBubbling:function(e){
		e.stopPropagation()
	},
	render:Template
})

// GenericAutoComplete.propTypes = {
// 	store:React.ContextTypes.object
// }
export default GenericAutoComplete