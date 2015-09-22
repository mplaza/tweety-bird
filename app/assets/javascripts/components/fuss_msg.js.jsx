var FussMsg = React.createClass({

	render: function(){
		return(
			<div className="row">
				<div className="col-xs-8 col-xs-offset-2">
					<div id='fuss-msg' className="text-center title-text h2">{this.props.msg}</div>
				</div>
			</div>
			);
	}
});