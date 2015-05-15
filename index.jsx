require('lib/style.less')

var React = require('react'),
		injectTapEventPlugin = require('react-tap-event-plugin'),
		ValueStore = require('lib/stores/ValueStore'),
		DonateContainer = require('lib/DonateContainer.jsx')

injectTapEventPlugin()

var App = React.createClass({

	getInitialState: function() {
		return {
			value: 5
		}
	},

	render: function() {
	return (
		<div className="main-container">
			<DonateContainer />
		</div>
	)}

})



React.render(<App />, document.getElementById('container'))
