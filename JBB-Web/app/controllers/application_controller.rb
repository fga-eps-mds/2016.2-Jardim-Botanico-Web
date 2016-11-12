class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  include SessionsHelper

  private
	def current_visitation
		@current_visitation ||= Visitation.find(session[:visitation_id])
		if session[:visitation_id]
		end
	end

	def current_event
		@current_event ||= Event.find(session[:event_id])
		if session[:event_id]
		end
	end

  def refuse_employee (object)
    object.refused_by_employee
    if object.save
      if object.class = Event
        UserMailer.change_status_event(@event).deliver_now
        flash[:success] = "Evento recusado"
        redirect_to show_event_employee_url
      elsif object.class = Visitation
        UserMailer.change_status_visitation(@visitation).deliver_now
        flash[:success] = "Visitação recusada"
        redirect_to show_visitation_url
      end
    else
      flash[:warning] = "Erro ao recusar"
      if object.class = Event
        redirect_to show_event_employee_url
      elsif object.class = Visitation
        redirect_to show_visitation_url
      end
    end
  end

end
