var React = require('react'),
		mui = require('material-ui')

var Category = React.createClass({

	addColor: function () {
		return {
			backgroundColor: this.props.backgroundColor,
			color:'#ffffff'
		}
	},

	getMoreInfo: function (active) {
		return active ?
			<div className="active-info">
				<div className="additional-info">
					{this.props.additionalInfo}
				</div>
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
		var style = {}
		if(this.props.active)
			style = this.addColor()
		return (
			<li className='category'>
				<div style={style}>
					{this.props.name}
				</div>
				{this.getMoreInfo(this.props.active)}
			</li>
		)
	}
})

module.exports = Category