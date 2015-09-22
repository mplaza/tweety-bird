require 'sentimental'
require 'date'

module SentimentModule
	Sentimental.load_defaults
	Sentimental.threshold = 0.25
	@@analyzer = Sentimental.new


	def get_sentiment(text)
		@@analyzer.get_sentiment text
	end

	def analyze_tweets(tweets)
		@tweets = tweets
		@totalsentiment = 0
  		@tweetsinfo = []
  		@tweets.each do |t|
  			tsentiment = get_sentiment(t.text)
  			if tsentiment == 'positive'
  				@totalsentiment+=1
  			elsif tsentiment == 'negative'
  				@totalsentiment-=1
  			end
  			formattedTime = t.created_at.strftime("%m/%d/%Y %H:%M")
  			@tweetsinfo.push(text: t.text, created_at: formattedTime, sentiment: tsentiment)
  		end
  		@info = {totalsentiment: @totalsentiment, tweets: @tweetsinfo}
	end

end