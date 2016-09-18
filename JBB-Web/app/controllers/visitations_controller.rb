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
    @visitations_sorted = @visitations.sort_by {|visitation| visitation.status}
  end


  #index
  def index
    @visitation = Visitation.find(params[:id])
  end

  #refuse_confirmation
  def refuse_visitation_employee
    @visitation = Visitation.find(params[:id])
    @visitation.refused_by_employee
    @visitation.save
  end


  #cancel_confirmation
  def cancel_visitation_employee
    @visitation = Visitation.find(params[:id])
    @visitation.canceled_by_employee
    @visitation.save
  end

  #delete_visitation
  def delete_visitation_employee
    @visitation = Visitation.find(params[:id])
    @visitation.destroy
    redirect_to show_visitation_url
  end

  #acceptd_visitation
  def accept_visitation_employee
    @visitation = Visitation.find(params[:id])
    @visitation.accepted_by_employee
    @visitation.save
  end




  #parameters
  private
  def visitation_params
    params.require(:visitation).permit(:date, :time, :status, :visitants_amount, :description)
  end


  def create
  	@visitation = Visitation.new(visitation_params)
  		if @visitation.save
  			redirect_to @visitation, notice: "Evento criado"
  		else
  			render action: :new
  		end
  end


  private
  def visitation_params
    params.require(:visitation).permit(:date, :cpf, :time, :isConfirmed, :visitants_amount, :description)
  end
end
