var React = require('react'),
		mui = require('material-ui'),
		Category = require('lib/Category.jsx')

function getActive (min,max,val) {
	if(val >= min && val <= max)
		return true
	else return false
}

var categories = [
	{
		name:"Snack",
		min:5,
		max:49,
		backgroundColor:'#EC5766',
		additionalInfo:'This is the additional info for snack.'
	},
	{
		name:"Supplies",
		min:50,
		max:249,
		backgroundColor:'#F7B33B',
		additionalInfo:'This is the additional info for supplies.'
	}
]

var DonateCategories = React.createClass({
	render: function () {
		var categoryNodes = categories.map(function(el){
			return (
				<Category 
					name={el.name} 
					active={getActive(el.min,el.max,this.props.value)} 
					backgroundColor={el.backgroundColor} 
					additionalInfo={el.additionalInfo} > 
						{el.name} 
				</Category>
			)
		}, this)
		return (
			<ul className="categories">
				{categoryNodes}
			</ul>
		)
	}
})

module.exports = DonateCategories