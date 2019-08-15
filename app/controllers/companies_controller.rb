class CompaniesController < ApplicationController
    def show
        render component: 'showCompany', props: {company: current_company}
    end
    def update
      @company=current_company
      current_company.update!(company_params)
      bypass_sign_in(@company, scope: :company)
      render component: 'showCompany', props: {company: current_company}
      
    end
    
    private

    def company_params
        params.require(:company).permit(:name,:email,:password,:password_confirmation,:address,:department,:city,:profile_photo)
      end
end
