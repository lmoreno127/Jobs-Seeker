class ChangeColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :jobs, :required_experience, :experience_required
  end
end
