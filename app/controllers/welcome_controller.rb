require 'twitter_module'

class WelcomeController < ApplicationController
	include TwitterModule
  def index
  	@tweets = []
  end

  def gettweets
  	# @tweets = [{text: 'hello'}, {text: '!!'}, {text: 'poopie'}]
  	@handle = params[:handle]
  	@tweets = user_tweets(@handle)
  	respond_to do |format|
    	format.json { render :json => @tweets }
  	end
  end

end
