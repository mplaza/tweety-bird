var Tweets = React.createClass({
  getInitialState: function() {
        return {
            tweets: this.props.tweets,
            msg: this.props.msg
        };
    },
  handleSearchSubmit: function ( formData, action ) {
    function generateMessage(totalsentiment){
      var msg = ""
      if(totalsentiment > 30){
        msg = "Ug oh! Fuss at dangerous levels. Use Extreme Caution."
      }
      else if(totalsentiment > 10){
        msg = "Fuss levels elevated, use care."
      }
      else if (totalsentiment > -10){
        msg = "Fuss within normal ranges. Proceed as usual."
      }
      else{
        msg = "Fuss levels low. Smooth sailing ahead."
      }
      return msg;
    }
    function showGauge(totalsentiment){
      $('#happy-whale').slideUp();
      $('#gauge').empty();
      $('#fuss-msg').removeClass('h2');
      $('#gauge-title').removeClass('no-show');
      var g = new JustGage({
            id: "gauge",
            value: totalsentiment,
            min: -50,
            max: 50,
          });
    }
    $.ajax({
      data: formData,
      url: action,
      type: "GET",
      dataType: "json",
      success: function ( data ) {
        this.setState({ tweets: data.tweets });
        this.setState({ msg: generateMessage(data.totalsentiment)})
        showGauge(data.totalsentiment);
      }.bind(this)
    });
  },

  render: function () {

    return (
      <div>
        <WhaleGauge />
        <FussMsg msg={this.state.msg} />
        <Search onSearchSubmit={this.handleSearchSubmit} />
        <div className="row">
          <div className="col-xs-8 col-xs-offset-2">
            <Tweet tweets={this.state.tweets} />
          </div>
        </div>
      </div>
    );
  }
});