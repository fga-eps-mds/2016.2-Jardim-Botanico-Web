class EventsController < ApplicationController
  def new
  	@event = Event.new
  end
#########################################################################################################
  def create
  	@event = Event.new(event_params)
  	if @event.save 
  		redirect_to @event, notice: "Evento criado"
  	else
  		render action: :new
  	end
  end
#########################################################################################################
  def index
  	@event = Event.all
	end
#########################################################################################################
	private
  def event_params
    params.require(:event).permit(:date, :time, :status, :description, :people_amount)
  end
#########################################################################################################
end
