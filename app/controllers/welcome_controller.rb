require 'twitter_module'
require 'sentiment_module'

class WelcomeController < ApplicationController
	include TwitterModule
	include SentimentModule
  def index
  	@tweets = []
  end

  def gettweets
  	@handle = params[:handle]
  	@tweets = user_tweets(@handle)
  	@info = analyze_tweets(@tweets)
  	respond_to do |format|
    	format.json { render :json => @info }
  	end
  end

end
