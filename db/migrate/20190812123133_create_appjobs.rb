class CreateAppjobs < ActiveRecord::Migration[5.2]
  def change
    create_table :appjobs do |t|
      t.integer :user_id
      t.integer :job_id
    end
  end
end
