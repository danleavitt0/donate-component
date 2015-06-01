var React = require('react')

var IconContainer = React.createClass({
	render: function () {
		if(this.props.icon) {
			if(this.props.icon['icon-url']) {
				var icons = []
				for (var i=0; i<6; i++) {
					icons.push(<image key={i} src={this.props.icon['icon-url']} />)
				}
			}
		}
		return (
			<div className="icon-container">
				<div className="icon-inner-container">
					{icons}
				</div>
			</div>
		)
	}
})

module.exports = IconContainer