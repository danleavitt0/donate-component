var ValueDispatcher = require('../dispatcher/ValueDispatcher'),
		ValueConstants = require('../constants/ValueConstants'),
		EventEmitter = require('events').EventEmitter,
		assign = require('object-assign')

var ActionTypes = ValueConstants.ActionTypes
var CHANGE_EVENT = 'change'

var value = 5

var ValueStore = assign({}, EventEmitter.prototype, {
	
	emitChange: function () {
		this.emit(CHANGE_EVENT)
	},

	addChangeListener: function (callback) {
		this.on(CHANGE_EVENT, callback)
	},

	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback)
	},

	remove: function (key) {
		fireBaseRef.child(key).remove()
	},

	getValue: function () {
		return value
	}

})

ValueDispatcher.register(function(action){
	switch(action.actionType) {
		case ActionTypes.CHANGE_VALUE:
			value = action.value
			ValueStore.emitChange()
			break
		default:
	}
})

module.exports = ValueStore