class CreateCompletables < ActiveRecord::Migration[6.0]
  def change
    create_table :completables do |t|
      t.string :title
      t.boolean :complete, default: false
      t.integer :path_id
      t.string :type


      t.timestamps
    end
  end
end
