class WelcomeController < ApplicationController
    def home
        if user_signed_in?
            render component: 'Main', props: { user:{ info:current_user, signOut: destroy_user_session_path} }
        elsif company_signed_in?
            render component: 'Main', props: { user:{ info:current_company, signOut: destroy_company_session_path} }
        else
            render component: 'Main'    
        end
        
    end
    
end
