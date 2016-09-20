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
		@visitation.user_id = current_user.id
  	@visitation.set_status_default
      if @visitation.save
        flash[:success] = "Solicitação de visita efetuada com sucesso!"
  			redirect_to show_visitation_user_urlr
  		else
        flash[:warning] = "Solicitação não efetuada"
  			render action: :new
  		end
  end

   def cancel_visitation_user
    @visitation = Visitation.find(params[:id])
    @visitation.canceled_by_user
    if @visitation.save
      flash[:warning] = "Visitação cancelada pelo usuário"
      redirect_to show_visitation_user_url, notice: "Visitação cancelada pelo usuário"
    end
  end


	def show_user
    @visitation = Visitation.where(user_id: current_user.id)
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
end
