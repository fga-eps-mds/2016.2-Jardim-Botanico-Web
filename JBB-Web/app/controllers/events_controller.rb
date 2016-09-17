class EventsController < ApplicationController
	
  #user
  def new
		@event = Event.new

	end

	def create
		@event = Event.new(event_params)
    @event.set_status_default
		if @event.save 
			redirect_to show_event_url, notice: "Evento criado"
		else
			render action: :new
		end
	end

  #cancel_confirmation
  def cancel_event_user
    puts (params[:id])
    @event = Event.find(params[:id])  
    @event.canceled_by_user
    @event.save
    
  end


  #employee

  def show
    @event = Event.all
  end

  def index
    @event = Event.find(params[:id])  
  end


  #refuse_confirmation 
  def refuse_event_employee
    @event = Event.find(params[:id])   
    @event.refused_by_employee
    @event.save
  end


  #cancel_confirmation 
  def cancel_event_employee
    @event = Event.find(params[:id])   
    @event.canceled_by_employee
    @event.save
  end

  
  #acceptd_event
  def accept_event_employee
    @event = Event.find(params[:id])
    @event.accepted_by_employee
    @event.save
  end

  #delete_event
  def delete_event_employee
    @event = Event.find(params[:id])
    @event.destroy   
  end





	# Metodo para filtrar os eventos de acordo com o status "Aguardando confirmacao"
	def confirmations_request
		#@event = Events.all
		@event = @event.where(status: "Aguardando confirmação")
	end

	# Metodo para filtrar os eventos de acordo com o status "Confirmado"
	def cancel_event
		#@event = Events.all
		@event = @event.where(status: "Confirmado")
	end
  

	private
	def event_params
		params.require(:event).permit(:name, :date, :time, :status, :description, :people_amount)
	end

end
