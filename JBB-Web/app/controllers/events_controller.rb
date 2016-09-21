class EventsController < ApplicationController

  #user
  def new
		@event = Event.new

	end


	def create
		@event = Event.new(event_params)
		@event.user_id = current_user.id
    @event.set_status_default
		if @event.save
      flash[:success] = "Solicitação de evento efetuada com sucesso!"
			redirect_to show_event_user_url, notice: "Evento criado"
		else
      flash[:warning] = "Solicitação não efetuada"
			render action: :new
		end
	end


	def show_user
    @event = Event.where(user_id: current_user.id)
  end


  #cancel_confirmation
  def cancel_event_user
    puts (params[:id])
    @event = Event.find(params[:id])
    @event.canceled_by_user
		if @event.save
       flash[:warning] = "Evento cancelada pelo usuário"
			redirect_to show_event_user_url, notice: "Evento cancelado pelo usuário"
		end
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
    if @event.save
        flash[:success] = "Evento recusado"
        redirect_to show_event_url
    else
        flash[:warning] = "Evento não pode ser recusado"
        redirect_to show_event_url
    end
  end


  #cancel_confirmation
  def cancel_event_employee
    @event = Event.find(params[:id])
    @event.canceled_by_employee
    if @event.save
         flash[:success] = "Evento cancelado"
         redirect_to show_event_url
     else
         flash[:warning] = "Evento não pode ser cancelado"
         redirect_to show_event_url
    end
  end


  #acceptd_event
  def accept_event_employee
    @event = Event.find(params[:id])
    @event.accepted_by_employee
    if @event.save
        flash[:success] = "Evento confirmado"
        redirect_to show_event_url
    else
        flash[:warning] = "Evento não pode ser confirmado"
        redirect_to show_event_url
   end
  end

  #delete_event
  def delete_event_employee
    @event = Event.find(params[:id])
     if @event.destroy
         flash[:success] = "Evento deletado"
         redirect_to show_event_url
     else
         flash[:warning] = "Evento não pode ser deletado"
         redirect_to show_event_url
    end
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
