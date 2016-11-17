class RemoveCleanServiceComercialUseImagesFromEvents < ActiveRecord::Migration[5.0]
  def change
      remove_column :events, :need_clean_service, :string
      remove_column :events, :commercial_use_photos, :string
  end
end
