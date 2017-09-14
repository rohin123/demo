class StorageHelper{
	constructor(props) {
		this._storage = localStorage;
	}

	setItem(key, value, expiry=undefined){
		this._storage.setItem(key, JSON.stringify(value));
	}

	getItem(key){
		let val = this._storage.getItem(key);
		if(val){
			return JSON.parse(val);
		}
	}

	removeItem(key){
		this._storage.removeItem(key);
	}
}

export default new StorageHelper();