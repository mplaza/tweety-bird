var WhaleGauge = React.createClass({

	render: function(){
		return(
			<div className="row">
				<div className="col-xs-4 col-xs-offset-4">
				<div id="gauge-title" className="no-show text-center h3">Fuss-o-meter</div>
				<div id="gauge" className="300x200px"></div>
					<div id='happy-whale'>
						<img className='img-responsive center-block' src='assets/happy_whale.png'/>
					</div>
				</div>
			</div>
			);
	}
});




