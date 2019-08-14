class CompaniesController < ApplicationController
    def show
        render component: 'showCompany', props:{company: current_company}
    end
    
end
