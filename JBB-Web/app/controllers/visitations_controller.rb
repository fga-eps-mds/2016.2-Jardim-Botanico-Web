class VisitationsController < ApplicationController
  before_action except: [:home, :new, :create, :show_user, :show_employee, :index_calendar_month] do
    @visitation = Visitation.find(params[:id])
  end

  #home
  def home
  end

  #new
  def new
    @visitation = Visitation.new
  end

  #Create a visit
  def create
    @visitation = Visitation.new(visitation_params)
    @visitation.user_id = current_user.id
    @visitation.set_status_default
    @visitation.set_visitation_cost
    if @visitation.save
      UserMailer.change_status_visitation(@visitation).deliver_now
      flash[:success] = "Solicitação de visita efetuada com sucesso!"
      redirect_to show_visitation_user_url
    else
      flash[:warning] = "Solicitação não efetuada"
      render action: :new
    end
  end

  #cancel visitation
  def cancel_visitation_user
    @visitation.canceled_by_user
    if @visitation.save
      UserMailer.change_status_visitation(@visitation).deliver_now
      flash[:warning] = "Visitação cancelada pelo usuário"
      redirect_to show_visitation_user_url
    end
  end


  #show
  def show_user
    @visitation = Visitation.where(user_id: current_user.id)
  end

  def show_employee
    @visitations = Visitation.all
    @visitations_sorted = @visitations.sort_by {|visitation| visitation.status}
    @visitation_types = Visitation.all.select(:id, :visitation_type)
    @sum_of_payments = Visitation.total
  end


  #index
  def index_user
  end

  def index_employee
    respond_to do |format|
      format.html
      format.pdf do
        pdf = VisitationsPdf.new(@visitation)
        send_data pdf.render, filename: 'formularios.pdf', type: "application/pdf",
        disposition: "inline"
      end
    end
  end

  #refuse_confirmation
  def refuse_visitation_employee
    @visitation.refused_by_employee
    if @visitation.save
      UserMailer.change_status_visitation(@visitation).deliver_now
      flash[:success] = "Visitação recusada"
      redirect_to show_visitation_employee_path
    else
      flash[:warning] = "Visitação não pode ser recusada"
      redirect_to  show_visitation_employee_path
    end
  end

  #cancel_confirmation
  def cancel_visitation_employee
    @visitation.canceled_by_employee
    if @visitation.save
      UserMailer.change_status_visitation(@visitation).deliver_now
      flash[:success] = "Visitação cancelada"
      redirect_to show_visitation_employee_path
    else
      flash[:warning] = "Visitação não pode ser cancelada"
      redirect_to show_visitation_employee_path
    end
  end

  #delete_visitation
  def delete_visitation_employee
    if @visitation.destroy
      flash[:success] = "Visitação deletada"
      redirect_to show_visitation_employee_path
    else
      flash[:warning] = "Visitação não pode ser deletada"
      redirect_to show_visitation_employee_path
    end
  end

  #accept_visitation
  def accept_visitation_employee
    @visitation.accepted_by_employee
    if @visitation.save
      UserMailer.change_status_visitation(@visitation).deliver_now
      flash[:success] = "Visitação confirmada"
      redirect_to show_visitation_employee_path
    else
      flash[:warning] = "Visitação não pode ser confirmada"
      redirect_to show_visitation_employee_path
    end
  end

  # schedule filter
  def index_calendar_month
    @visitations = Visitation.where("status = ? AND has_guide = ?", "Agendado", true)
  end

  #parameters
  private
  def visitation_params
    params.require(:visitation).permit(:date, :time, :status, :visitants_amount,
                                       :visitation_type, :groups_age, :objective,
                                       :spaces, :has_guide, :description,
                                       :visitants_paying, :visitation_cost)
  end
end
