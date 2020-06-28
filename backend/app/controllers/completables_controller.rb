class CompletablesController < ApplicationController
  def index
    paths = Path.all
    render json: paths.to_json(:include => [:content_blocks, :nodes => { 
      :include => :content_blocks
     }])
  end

  def toggle_complete
    completable = Completable.find(params[:id])
    completable.update(complete: !params[:complete])
    render json: completable
  end
end
