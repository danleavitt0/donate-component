var React = require('react'),
		mui = require('material-ui'),
		Category = require('lib/Category.jsx'),
		IconContainer = require('lib/IconContainer.jsx'),
		_ = require('lodash')

function getActive (min,max,val) {
	if(val >= min && val <= max)
		return true
	else return false
}

function getIcon (val) {
	var element = _.find(categories, function(el, idx){
		if (val >= el.min && val <= el.max)
			return el
	})
	return element
}

var categories = [
	{
		name:"Snack",
		min:5,
		max:49,
		backgroundColor:'#F7B33B',
		additionalInfo:'This is the additional info for snack. This is another sentence.',
		'icon-url':'http://images.clipartpanda.com/kids-eating-snack-clipart-lunch-clip-art-17.gif'
	},
	{
		name:"Supplies",
		min:50,
		max:249,
		backgroundColor:'#EC5766',
		additionalInfo:'This is the additional info for supplies. This is another sentence.',
		'icon-url':'http://images.clipartpanda.com/school-clipart-free-jTxEMLqBc.gif'
	},
	{
		name:"Enrichment",
		min:250,
		max:499,
		backgroundColor:'#AACE57',
		additionalInfo:'This is additional info for enrichment. This is another sentence.',
		'icon-url':'http://images.clipartpanda.com/math-clipart-for-kids-math.gif'
	},
	{
		name:"Computers",
		min:500,
		max:999,
		backgroundColor:'#69B7E3',
		additionalInfo:'This is additional info for computers. This is another sentence.',
		'icon-url':'http://www.clker.com/cliparts/c/5/5/4/1349205266327018645Laptop%20Computer.svg.hi.png'
	},
	{
		name:"Operational Support",
		min:1000,
		max:2500,
		backgroundColor:'#B32D9F',
		additionalInfo:'This is additional info for operational support.',
		'icon-url':'http://cliparts.co/cliparts/rTL/xGb/rTLxGbLBc.png'
	}
]

var DonateCategories = React.createClass({
	render: function () {
		var categoryNodes = categories.map(function(el, i){
			return (
				<Category 
					key={i}
					name={el.name} 
					active={getActive(el.min,el.max,this.props.value)} 
					backgroundColor={el.backgroundColor} 
					additionalInfo={el.additionalInfo} 
					min={el.min} > 
						{el.name} 
				</Category>
			)
		}, this)
		return (
			<div className="category-icon-container">
				<ul className="categories">
					{categoryNodes}
				</ul>
				<IconContainer icon={getIcon(this.props.value)} />
			</div>
		)
	},


})

module.exports = DonateCategories