require 'sinatra'
  visitors = 0
  get '/visitors' do
  	visitors = visitors + 1
  	"#{visitors}"
  end
