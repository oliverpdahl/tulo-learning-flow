# frozen_string_literal: true

class ContentBlock < ApplicationRecord
  belongs_to :completable
  has_many :contents
end
