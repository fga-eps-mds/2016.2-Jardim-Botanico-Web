class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.belongs_to :user
      t.date :date_start
      t.date :date_end
      t.time :time_start
      t.time :time_end
      t.string :status
      t.string :jbb_space_requested
      t.integer :estimated_public
      t.string :need_eletricity
      t.string :need_water
      t.string :need_clean_service
      t.string :commercial_use_photos
      t.string :description
      t.string :other_informations
      t.string :jbb_response_to_request
      t.float :price_payment


      # necessary information if the requester is a institute
      t.string :name_institute
      t.string :institute_address
      t.string :institute_cnpj


      t.timestamps
    end
    add_index :events, :status
  end
end
