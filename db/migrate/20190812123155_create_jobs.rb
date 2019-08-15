class CreateJobs < ActiveRecord::Migration[5.2]
  def change
    create_table :jobs do |t|
      t.string :jobtitle 
      t.string :description
      t.string :city
      t.string :seniority
      t.integer :company_id
      t.string :contract
    end
  end
end
