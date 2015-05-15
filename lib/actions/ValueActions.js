var ValueDispatcher = require('../dispatcher/ValueDispatcher')
var ValueConstants = require('../constants/ValueConstants')

var ActionTypes = ValueConstants.ActionTypes

module.exports = {

	update: function (value) {
		ValueDispatcher.dispatch({
			actionType: ActionTypes.CHANGE_VALUE,
			value: value
		})
	}

}