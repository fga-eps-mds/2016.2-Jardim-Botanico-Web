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
        UserMailer.change_status(@visitation).deliver_now
        flash[:success] = "Solicitação de visita efetuada com sucesso!"
  			redirect_to show_visitation_user_url
  		else
        flash[:warning] = "Solicitação não efetuada"
  			render action: :new
  		end
  end

   def cancel_visitation_user
    @visitation = Visitation.find(params[:id])
    @visitation.canceled_by_user
    if @visitation.save
      UserMailer.change_status(@visitation).deliver_now
      flash[:warning] = "Visitação cancelada pelo usuário"
      redirect_to show_visitation_user_url
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
    if @visitation.save
        UserMailer.change_status(@visitation).deliver_now
        flash[:success] = "Visitação recusada"
        redirect_to show_visitation_url
    else
        flash[:warning] = "Visitação não pode ser recusada"
        redirect_to show_visitation_url
    end
  end


  #cancel_confirmation
  def cancel_visitation_employee
    @visitation = Visitation.find(params[:id])
    @visitation.canceled_by_employee
    if @visitation.save
      UserMailer.change_status(@visitation).deliver_now
      flash[:success] = "Visitação cancelada"
      redirect_to show_visitation_url
    else
        flash[:warning] = "Visitação não pode ser cancelada"
        redirect_to show_visitation_url
    end
  end

  #delete_visitation
  def delete_visitation_employee
    @visitation = Visitation.find(params[:id])
    if @visitation.destroy
         flash[:success] = "Visitação deletada"
         redirect_to show_visitation_url
    else
        flash[:warning] = "Visitação não pode ser deletada"
        redirect_to show_visitation_url
    end
  end

  #accept_visitation
  def accept_visitation_employee
    @visitation = Visitation.find(params[:id])
    @visitation.accepted_by_employee
    if @visitation.save
         UserMailer.change_status(@visitation).deliver_now
         flash[:success] = "Visitação confirmada"
         redirect_to show_visitation_url
    else
         flash[:warning] = "Visitação não pode ser confirmada"
         redirect_to show_visitation_url
    end
  end




  #parameters
  private
  def visitation_params
    params.require(:visitation).permit(:date, :time, :status, :visitants_amount,:visitation_type, :groups_age,
                                        :objective, :spaces, :has_guide, :description)
  end
end
