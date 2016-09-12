class ApplicationController < ActionController::Base
private

def current_visitation
	@current_visitation ||= Visitation.find(session[:visitation_id])  if session[:visitation_id]
end

end
