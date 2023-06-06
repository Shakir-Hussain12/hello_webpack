Rails.application.routes.draw do
  root 'root#index'
  get '/api/greeting', to: 'api#message'
end