class VisitationsController < ApplicationController
  
  #home
  def home
  end


  #new
  def new
  	@visitation = Visitation.new
  end


  def create
  	@visitation = Visitation.new(visitation_params)
  	@visitation.status = "Aguardando confirmacao"	
      if @visitation.save 
  			redirect_to show_visitation_url, notice: "Visitação criada"
  		else
  			render action: :new
  		end
  end


  #show
  def show
    @visitations = Visitation.all
  end


  #index
  def index
    @visitation = Visitation.find(params[:id])  
  end


  #cancel_confirmation
  helper_method :cancel_visitation
  
  def cancel_visitation
    @visitation = Visitation.find(params[:id])  
    @visitation.status = "Cancelado pelo usuario"
    if @visitation.save
      redirect_to show_visitation_url, notice: "Visitação criada"
    end
  end



  #parameters
  private
  def visitation_params
    params.require(:visitation).permit(:date, :time, :status, :visitants_amount, :description)
  end
end
