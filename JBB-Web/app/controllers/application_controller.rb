class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
 
  include SessionsHelper

  private
  	def select_pdf(pdf_option)
  		respond_to do |format|
  		  format.html
  		  format.pdf do
  		    pdf = pdf_option
  		    send_data pdf.render, filename: 'formularios.pdf', type: "application/pdf",
  		    disposition: "inline"
  		  end  
  		end
  	end
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
