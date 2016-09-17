class VisitationsController < ApplicationController
  
  #home
  def home
  end



                                                  #User
  #new
  def new
  	@visitation = Visitation.new
  end


  def create
  	@visitation = Visitation.new(visitation_params)
  	@visitation.set_status_default
      if @visitation.save 
  			redirect_to show_visitation_url, notice: "Visitação criada"
  		else
  			render action: :new
  		end
  end

   def cancel_visitation_user
    @visitation = Visitation.find(params[:id]) 
    @visitation.canceled_by_user
    if @visitation.save
      redirect_to show_visitation_url, notice: "Visitação cancelada por usuario"
    end
  end




                          #Employee
  #show
  def show
    @visitations = Visitation.all
  end


  #index
  def index
    @visitation = Visitation.find(params[:id])  
  end


  #cancel_confirmation 
  def cancel_visitation_employee
    @visitation = Visitation.find(params[:id])   
    @visitation.canceled_by_employee
    @visitation.save
  end




  #parameters
  private
  def visitation_params
    params.require(:visitation).permit(:date, :time, :status, :visitants_amount, :description)
  end
end
