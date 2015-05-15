var React = require('react'),
		mui = require('material-ui'),
		Category = require('lib/Category.jsx')

function getActive (min,max,val) {
	if(val >= min && val <= max)
		return true
	else return false
}

var DonateCategories = React.createClass({
	render: function () {
		return (
			<ul className="categories">
				<Category 
					name="party" 
					active={getActive(5, 49, this.props.value)}
					backgroundColor="#ccc"> 
						example 
					</Category>
				<Category name="party" active={getActive(50, 249, this.props.value)}> example #2 </Category>
				<Category name="party" active={getActive(250, 1000, this.props.value)}> example #3 </Category>
				<Category name="party" active={getActive(1000, 2500, this.props.value)}> example #4 </Category>
			</ul>
		)
	}
})

module.exports = DonateCategories