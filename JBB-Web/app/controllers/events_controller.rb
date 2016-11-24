class EventsController < ApplicationController
   before_action except: [:new, :create, :show_user, :show_employee, :index_calendar_month, :index_calendar_week] do
    @event = Event.find(params[:id])
  end


  #user
  def new
    @event = Event.new
    @jbb_response = params[:jbb_response_to_request]
  end

  def create
    @event = Event.new(event_params)
    @event.user_id = current_user.id
    @event.set_status_default
    @event.jbb_space_requested = params[:jbb_space_requested].join(', ')
    if @event.save
      UserMailer.change_status_event(@event).deliver_now
      flash[:success] = t(:successful_event_request)
      redirect_to "/#{I18n.locale}"+show_event_user_path
    else
      flash[:warning] = t(:request_not_made)
      render action: :new
    end
  end

  def show_user
    @event = Event.where(user_id: current_user.id)
  end

  def index_user
  end

  #cancel_confirmation
  def cancel_event_user
    puts (params[:id])
    @event.canceled_by_user
    if @event.save
      UserMailer.change_status_event(@event).deliver_now
      flash[:warning] = t(:event_canceled_user)
      redirect_to "/#{I18n.locale}"+show_event_user_path
    end
  end

  #employee
  def show_employee
    @event = Event.all
    @sum_of_payments = Event.total
    period = params[:period]
    select_pdf(EventsPdf.new(period))
  end

  def index_employee
  end

  #refuse_confirmation
  def refuse_event_employee
    @event.refused_by_employee
    @event.jbb_response_to_request = (params[:jbb_response_to_request])
    if @event.save
      UserMailer.change_status_event(@event).deliver_now
      flash[:success] = t(:event_refused)
      redirect_to "/#{I18n.locale}"+show_event_employee_path
    else
      flash[:warning] = t(:not_objectionable_event)
      redirect_to "/#{I18n.locale}"+show_event_employee_path
    end
  end

  #cancel_confirmation
  def cancel_event_employee
    @event.canceled_by_employee
    if @event.save
      UserMailer.change_status_event(@event).deliver_now
      flash[:success] = t(:event_canceled)
      redirect_to "/#{I18n.locale}"+show_event_employee_path
    else
      flash[:warning] = t(:not_cancellable_event)
      redirect_to "/#{I18n.locale}"+show_event_employee_path
    end
  end

  #accept_event
  def accept_event_employee
    @event.accepted_by_employee
    puts "====================================================================="
    puts (@jbb_response)
    @event.jbb_response_to_request = (@jbb_response)
    if @event.save
      UserMailer.change_status_event(@event).deliver_now
      flash[:success] = t(:event_confirmed)
      redirect_to "/#{I18n.locale}"+show_event_employee_path
    else
      flash[:warning] = t(:not_confirmable_event)
      redirect_to "/#{I18n.locale}"+show_event_employee_path
    end
  end

  #delete_event
  def delete_event_employee
    if @event.destroy
      UserMailer.change_status_event(@event).deliver_now
      flash[:success] = t(:event_removed)
      redirect_to "/#{I18n.locale}"+show_event_employee_path
    else
      flash[:warning] = t(:not_removable_event)
      redirect_to "/#{I18n.locale}"+show_event_employee_path
    end
  end


  # schedule filter
  def index_calendar_month
    @events = Event.where(status: "Agendado")
  end

  private
  def event_params
    params.require(:event).permit(:name, :date_start, :date_end, :time_start,
                                  :time_end, :status, :description, :need_eletricity,
                                  :need_water, :people_amount, :jbb_space_requested,
                                  :estimated_public, :other_informations,
                                  :jbb_response_to_request, :name_institute,
                                  :institute_address, :institute_cnpj, :price_payment)
  end

end
