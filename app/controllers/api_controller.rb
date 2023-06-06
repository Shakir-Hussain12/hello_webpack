class ApiController < ApplicationController
    def message
        id = rand 1..5
        message = Message.find(id).greeting
        render json: { greeting: message }
    end
end
