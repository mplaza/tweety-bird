require 'twitter_module'
require 'sentiment_module'

class WelcomeController < ApplicationController
	include TwitterModule
	include SentimentModule

  before_action :auth_user, except: [:landing]
  
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

  def landing
  end

  def auth_user
    redirect_to landing_path unless user_signed_in?
  end

end
