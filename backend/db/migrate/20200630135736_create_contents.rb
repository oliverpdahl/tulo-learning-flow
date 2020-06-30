# frozen_string_literal: true

class CreateContents < ActiveRecord::Migration[6.0]
  def change
    create_table :contents do |t|
      t.string :text
      t.integer :content_block_id
      t.string :creator
      t.string :resource
      t.string :type
      t.string :link
      t.string :img_link
      t.string :img_creator
      t.string :img_resource

      t.timestamps
    end
  end
end
