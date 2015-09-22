require 'sentimental'
require 'date'

module SentimentModule
	Sentimental.load_defaults
	Sentimental.threshold = 0.25
	@@analyzer = Sentimental.new

# return sentiment of text
	def get_sentiment(text)
		@@analyzer.get_sentiment text
	end

# return object including indiv tweet sentiments and overall sentiment score
	def analyze_tweets(tweets)
		@tweets = tweets
		@totalsentiment = 0
    @totaltweets = 0;
  	@tweetsinfo = []
  		@tweets.each do |t|
        @totaltweets+=1;
  			tsentiment = get_sentiment(t.text).to_s
  			if tsentiment == 'positive'
  				@totalsentiment-=1
  			elsif tsentiment == 'negative'
  				@totalsentiment+=1
  			end
  			formattedTime = t.created_at.strftime("%m/%d/%Y %H:%M")
  			@tweetsinfo.push(text: t.text, created_at: formattedTime, sentiment: tsentiment)
  		end
    @sentimentnormalized = @totalsentiment*50/@totaltweets;
  	@info = {totalsentiment: @sentimentnormalized , tweets: @tweetsinfo}
	end

end