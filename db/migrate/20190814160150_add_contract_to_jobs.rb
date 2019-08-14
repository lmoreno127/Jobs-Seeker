class AddContractToJobs < ActiveRecord::Migration[5.2]
  def change
    add_column :jobs, :contract, :string
  end
end
