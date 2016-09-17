class EventsController < ApplicationController
	def new
		@event = Event.new

	end


	def create
		@event = Event.new(event_params)
    @event.status = "Aguardando confirmação"
		if @event.save 
			redirect_to show_event_url, notice: "Evento criado"
		else
			render action: :new
		end
	end

  #cancel_confirmation
  

  def cancel_event_user
    puts "Ola"
    puts (params[:id])
    @event = Event.find(params[:id])  
    @event.status = "Cancelado pelo Usuário"
    @event.save
    
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
  def show
  	@event = Event.all
	end

  def index
    @event = Event.find(params[:id])  
  end

  def cancel_confirmation
    @event = Event.find(params[:id])
    @event.status = "Cancelado pelo Usuário"
  end

	private
	def event_params
		params.require(:event).permit(:name, :date, :time, :status, :description, :people_amount)
	end

end
