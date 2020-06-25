class CreateCompletables < ActiveRecord::Migration[6.0]
  def change
    create_table :completables do |t|
      t.string :title
      t.boolean :complete, default: false

      t.timestamps
    end
  end
end
