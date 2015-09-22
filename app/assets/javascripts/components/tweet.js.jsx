var Tweet = React.createClass({

	render: function(){
		var tweetNodes = this.props.tweets.map(function ( tweet ) {
      return <div className ={tweet.sentiment} >{tweet.created_at} : { tweet.text }</div>
    });
		return(
			<div>
			{tweetNodes}	
			</div>
			);
	}
});