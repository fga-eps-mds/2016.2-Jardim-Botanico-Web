class VisitationsController < ApplicationController
  
  def new
  	@visitation = Visitation.new
  end


  def create
  	@visitation = Visitation.new(visitation_params)
  		if @visitation.save 
  			redirect_to @visitation, notice: "Evento criado"
  		else
  			render action: :new
  		end
  end

def show
  @visitations = Visitation.all
end

  private
  def visitation_params
    params.require(:visitation).permit(:date, :cpf, :time, :isConfirmed, :visitants_amount, :description)
  end
end
