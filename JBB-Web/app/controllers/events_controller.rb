class EventsController < ApplicationController

  #user
  def new
    @event = Event.new
    @jbb_response = params[:jbb_response_to_request]
  end

  def create
    @event = Event.new(event_params)
    @event.user_id = current_user.id
    @event.set_status_default
    if @event.save
      UserMailer.change_status_event(@event).deliver_now
      flash[:success] = "Solicitação de evento efetuada com sucesso!"
      redirect_to show_event_user_url, notice: "Evento criado"
    else
      flash[:warning] = "Solicitação não efetuada"
      render action: :new
    end
  end

  def edit
    @event = Event.find(params[:id])
  end

  def show_user
    @event = Event.where(user_id: current_user.id)
  end

  def index_user
    @event = Event.find(params[:id])
  end

  #cancel_confirmation
  def cancel_event_user
    puts (params[:id])
    @event = Event.find(params[:id])
    @event.canceled_by_user
    if @event.save
      UserMailer.change_status_event(@event).deliver_now
      flash[:warning] = "Evento cancelada pelo usuário"
      redirect_to show_event_user_url, notice: "Evento cancelado pelo usuário"
    end
  end

  #employee
  def show_employee
    @event = Event.all
  end

  def index_employee
    @event = Event.find(params[:id])
  end

  #refuse_confirmation
  def refuse_event_employee
    @event = Event.find(params[:id])
    @event.refused_by_employee
    @event.jbb_response_to_request = (params[:jbb_response_to_request])
    if @event.save
      UserMailer.change_status_event(@event).deliver_now
      flash[:success] = "Evento recusado"
      redirect_to show_event_employee_url
    else
      flash[:warning] = "Evento não pode ser recusado"
      redirect_to show_event_employee_url
    end
  end

  #cancel_confirmation
  def cancel_event_employee
    @event = Event.find(params[:id])
    @event.canceled_by_employee
    if @event.save
      UserMailer.change_status_event(@event).deliver_now
      flash[:success] = "Evento cancelado"
      redirect_to show_event_employee_url
    else
      flash[:warning] = "Evento não pode ser cancelado"
      redirect_to show_event_employee_url
    end
  end

  #accept_event
  def accept_event_employee
    @event = Event.find(params[:id])
    @event.accepted_by_employee
    puts "====================================================================="
    puts (@jbb_response)
    @event.jbb_response_to_request = (@jbb_response)
    if @event.save
      UserMailer.change_status_event(@event).deliver_now
      flash[:success] = "Evento confirmado"
      redirect_to show_event_employee_url
    else
      flash[:warning] = "Evento não pode ser confirmado"
      redirect_to show_event_employee_url
    end
  end

  #delete_event
  def delete_event_employee
    @event = Event.find(params[:id])
    if @event.destroy
      UserMailer.change_status_event(@event).deliver_now
      flash[:success] = "Evento deletado"
      redirect_to show_event_employee_url
    else
      flash[:warning] = "Evento não pode ser deletado"
      redirect_to show_event_employee_url
    end
  end

  private
  def event_params
    params.require(:event).permit(:name, :date_start, :date_end, :time_start,
                                  :time_end, :status, :description, :need_eletricity,
                                  :need_water, :need_clean_service, :people_amount,
                                  :jbb_space_requested, :estimated_public,
                                  :commercial_use_photos, :other_informations,
                                  :jbb_response_to_request, :name_institute,
                                  :institute_address, :institute_cnpj, :price_payment)
  end

end
