var React = require('react'),
		mui = require('material-ui'),
		Slider = mui.Slider,
		TextField = mui.TextField,
		DonateCategories = require('lib/DonateCategories.jsx'),
		ValueActions = require('lib/actions/ValueActions'),
		ValueStore = require('lib/stores/ValueStore')

var DonateContainer = React.createClass({

	mixins: [React.addons.LinkedStateMixin],

	getInitialState: function() {
		return {
			value: 100
		};
	},
	
	sliderChange: function (e) {
		value = Math.floor(this.refs.slider.getValue())
		ValueActions.update(value)
	},

	componentDidMount: function() {
		ValueStore.addChangeListener(this._onchange)
	},

	componentWillUnmount: function() {
		ValueStore.removeChangeListener(this._onchange)
	},

	render: function () {
		return (
			<div className="donate-container">
				<DonateCategories value={this.state.value} />
				<TextField ref="text" valueLink={this.linkState('value')} />
				<Slider min={5} max={2500} name="valueSlider" ref="slider" value={this.state.value} onChange={this.sliderChange} />
			</div>
		)
	},

	_onchange: function () {
		this.setState({
			value: ValueStore.getValue()
		})
	}

})

module.exports = DonateContainer