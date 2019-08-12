class WelcomeController < ApplicationController
    def home
        render component: 'Main'
    end
    
end
