class CreateJobs < ActiveRecord::Migration[5.2]
  def change
    create_table :jobs do |t|
      t.string :jobtitle 
      t.string :description
      t.string :city
      t.integer :required_experience
      t.integer :company_id
    end
  end
end
