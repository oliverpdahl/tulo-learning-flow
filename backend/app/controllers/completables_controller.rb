# frozen_string_literal: true

class CompletablesController < ApplicationController
  def index
    completables = Completable.all
    render json: completables.to_json(only: %i[id complete])
  end

  def paths
    paths = Path.all
    render json: paths.to_json(include: [content_blocks: { include: :contents }, nodes: {
                                 include: :content_blocks,
                                 except: :complete
                               }], except: :complete)
  end

  def toggle_complete
    completable = Completable.find(params[:id])
    completable.update(complete: !params[:complete])
    render json: completable
  end
end
