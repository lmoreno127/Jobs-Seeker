class CreateAppjobs < ActiveRecord::Migration[5.2]
  def change
    create_table :appjobs do |t|

      t.timestamps
    end
  end
end
