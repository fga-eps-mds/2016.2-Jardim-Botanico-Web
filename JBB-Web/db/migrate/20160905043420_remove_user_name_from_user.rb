class RemoveUserNameFromUser < ActiveRecord::Migration[5.0]
  def change
  	remove_column :users, :user_name
  end
end
