class VisitationsController < ApplicationController
  
  def home
  end


  def new
  	@visitation = Visitation.new
  end


  def create
  	@visitation = Visitation.new(visitation_params)
  		if @visitation.save 
  			redirect_to show_visitation_url, notice: "Evento criado"
  		else
  			render action: :new
  		end
  end

  def show
    @visitations = Visitation.all
  end

  def index
    @visitation = Visitation.find(params[:id])
  end

  def cancel_confirmation
    @visitation.status = "Cancelado pelo Usuário"
  end

  private
  def visitation_params
    params.require(:visitation).permit(:date, :time, :status, :visitants_amount, :description)
  end
end
