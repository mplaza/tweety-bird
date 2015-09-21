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
        this.setState({ tweets: data });
      }.bind(this)
    });
  },

  render: function () {
    var tweetNodes = this.state.tweets.map(function ( tweet ) {
      return <div>{tweet.created_at} : { tweet.text }</div>
    });
    return (
      <div className="comment-box">
        <Search onSearchSubmit={ this.handleSearchSubmit } />
        <div>Tweets: </div>
        {tweetNodes}
      </div>
    );
  }
});