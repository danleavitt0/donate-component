var React = require('react'),
		injectTapEventPlugin = require('react-tap-event-plugin'),
		ValueStore = require('lib/stores/ValueStore'),
		DonateContainer = require('lib/DonateContainer.jsx'),
		ThemeManager = require('material-ui/lib/styles/theme-manager')()


injectTapEventPlugin()

var App = React.createClass({

	getInitialState: function() {
		return {
			value: 5
		}
	},

	childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    }
  },


	render: function() {
	return (
		<div className="main-container">
			<DonateContainer 
			/>
		</div>
	)}

})



React.render(<App />, document.getElementById('container'))
