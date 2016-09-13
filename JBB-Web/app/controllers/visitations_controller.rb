class VisitationsController < ApplicationController
  
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

def home
end

  private
  def visitation_params
    params.require(:visitation).permit(:date, :cpf, :time, :isConfirmed, :visitants_amount, :description)
  end
end
