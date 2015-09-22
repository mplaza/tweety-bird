require 'twitter'

module TwitterModule

	@@client = Twitter::REST::Client.new do |config|
  	config.consumer_key        = ENV['TWITTER_CONSUMER_KEY']
  	config.consumer_secret     = ENV['TWITTER_CONSUMER_SECRET']
  	config.access_token        = ENV['TWITTER_ACCESS_TOKEN']
  	config.access_token_secret = ENV['TWITTER_ACCESS_SECRET']
	end

	# return last 25 tweets for given handle
	def user_tweets(handle)
		@@client.user_timeline(handle, {count: 25})
	end

end