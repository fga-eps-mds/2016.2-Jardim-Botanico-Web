class VisitationsPdf < Prawn::Document
	def initialize(Event)
		super(top_margin: 70)
		text "Relatório de Evento", :align => :center, :size => 18
		@event = event
		move_down 30
		text "Data e hora de início"
		move_down 10
		text "Dia: #{@event.date_start}"
		move_down 5
		text "Hora #{@Event.time_start}"
		move_down 20
		
	end
end