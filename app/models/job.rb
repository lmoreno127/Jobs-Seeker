class Job < ApplicationRecord
    belongs_to :company
    has_many :appjobs,dependent: :destroy
    has_many :users, through: :appjobs


    def users_applications
        users.pluck(:id)
    end
    
end