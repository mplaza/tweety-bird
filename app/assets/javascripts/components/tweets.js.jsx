var Tweets = React.createClass({
  getInitialState: function() {
        return {
            tweets: this.props.tweets,
        };
    },
  handleSearchSubmit: function ( formData, action ) {
    $.ajax({
      data: formData,
      url: action,
      type: "GET",
      dataType: "json",
      success: function ( data ) {
        this.setState({ tweets: data.tweets });
      }.bind(this)
    });
  },

  render: function () {

    return (
      <div>
        <Search onSearchSubmit={this.handleSearchSubmit} />
        <div className="row">
          <div className="col-xs-8 col-xs-offset-2">
            <div>Tweets: </div>
            <Tweet tweets={this.state.tweets} />
          </div>
        </div>
      </div>
    );
  }
});