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
end

