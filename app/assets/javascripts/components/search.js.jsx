var Search = React.createClass({
	handleSubmit: function(event){
		event.preventDefault();
		var twitterHandle = this.refs.handle.getDOMNode().value.trim();
		if (!twitterHandle){
			return false;
		}
		var formData = {handle: twitterHandle}
		this.props.onSearchSubmit(formData, '/gettweets')


	},
  render: function() {
    return <form ref='form' onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="Search Handle"
                    ref="handle"
                    name="handle"
                ></input>
                <p>
                	<button type="submit">Search</button>
                </p>
            </form>;
  }
});