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
    return (
    <div className="row top-margin">
        <div className="col-xs-6 col-xs-offset-3">
            <form ref='form' onSubmit={this.handleSubmit}>
                <div className='input-group form-search'>
                    <input
                        type="text"
                        className="form-control search-query"
                        placeholder="Search Handle"
                        ref="handle"
                        name="handle"
                    ></input>
                    <span className='input-group-btn'>                	
                        <button className="btn btn-primary" type="submit">Search</button>
                    </span>
                </div>
            </form>
        </div>
    </div>
    );
  }
});