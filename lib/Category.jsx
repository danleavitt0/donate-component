var React = require('react'),
		mui = require('material-ui')

var Category = React.createClass({

	getStyle: function () {
		return {
			backgroundColor: this.props.backgroundColor,
			position:'absolute',
			left:'0'
		}
	},

	getMoreInfo: function (active) {
		return active ?
			<div className="additionalInfo">
				<div className="active-background" style={this.getStyle()}/>
				This is more about the active class
			</div>
			: null
	},
	getDefaultProps: function() {
		return {
			name: "Default",
			active: false
		}
	},
	render: function() {
		return (
			<li className={this.props.name}>
				Info about the class
				{this.getMoreInfo(this.props.active)}
			</li>
		)
	}
})

module.exports = Category