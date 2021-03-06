var React = require('react'),
		mui = require('material-ui'),
		Form = require('lib/Form.jsx'),
		Input = require('lib/Input.jsx'),
		PostActions = require('lib/actions/PostActions'),
		TextField = mui.TextField

var PostForm = React.createClass({

	handleSubmit: function (e) {
		e.preventDefault()
	},

	render:function () {
	return(
		<Form ref="form" className="newPostForm">
			<Input 
				hintText="Post Title"
				name="title"
				require={true}
			/>
			<Input 
				hintText="What's on your mind?"
				multiLine={true}
				name="text"
				require={true}
			/>
			<div className="actions">
				<FlatButton
					label = "Cancel"
					secondary = {true}
					onClick = {this._closeModal}
				/>
				<FlatButton
					label = "Post"
					primary = {true}
					onClick = {this._submitPost}
				/>
			</div>
		</Form>
	)},

	_closeModal: function () {
		this.props.dialog.refs.standardDialog.dismiss()
	},

	_submitPost: function () {
		var fields = this.refs.form.handleSubmit()
		if (fields) {
			fields.authorName = this.props.profile.name
			PostActions.create(fields)
			this.props.dialog.refs.standardDialog.dismiss()
		}
	}

})

module.exports = PostForm