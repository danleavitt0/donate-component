var React = require('react'),
		mui = require('material-ui'),
		Slider = mui.Slider,
		TextField = mui.TextField,
		DonateCategories = require('lib/DonateCategories.jsx'),
		ValueActions = require('lib/actions/ValueActions'),
		ValueStore = require('lib/stores/ValueStore')

var postionAbsolute = {
	position:'absolute',
	WebkitUserSelect:'none'
}

var DonateContainer = React.createClass({

	mixins: [React.addons.LinkedStateMixin],

	getInitialState: function() {
		return {
			value: 5
		};
	},
	
	sliderChange: function () {
		value = Math.floor(this.refs.slider.getValue())
		ValueActions.update(value)
	},

	textChange: function () {
		value = parseInt(this.refs.text.getValue()) || ''
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
				<div className="inner-donate-container">
					<DonateCategories value={this.state.value} />
					<TextField ref="text" value={this.state.value} onChange={this.textChange} />
					<Slider min={5} max={2500} style={postionAbsolute} name="valueSlider" ref="slider" onChange={this.sliderChange} />
				</div>
			</div>
		)
	},

	_onchange: function () {
		var newValue = ValueStore.getValue()
		console.log(this.refs.slider.state.dragging)
		if(!this.refs.slider.state.dragging)
			this.refs.slider.setValue(newValue)

		this.setState({
			value: newValue
		})
	}

})

module.exports = DonateContainer