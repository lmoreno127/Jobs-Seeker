class Job < ApplicationRecord
    belongs_to :company
    has_many :appjobs
end