class EventsPdf < Prawn::Document
	def initialize(Event)
		super(top_margin: 70)
		text "Relatório de Evento", :align => :center, :size => 18
		@event = event
		move_down 30
		text "Data e hora do início"
		move_down 10
		text "Dia: #{@event.date_start}"
		move_down 10
		text "Hora #{@event.time_start}"
		move_down 20
		text "Data e hora do fim"
		move_down 10
		text "Dia: #{@event.date_end}"
		move_down 10
		text "Hora #{@event.time_end}"
		move_down 20
		text "Status: #{@event.status}"
		move_down 10
		text "Espaco solicitado: #{@event.jbb_space_requested}"
		move_down 10
		text "Publico estimado: #{@event.estimated_public}"
		move_down 10
		text "Descrição: #{@event.description}"
		move_down 10
		text "Uso comercial de imagem? #{@event.commercial_use_photos}"
		move_down 10
		text "Precisa de energia elétrica? #{@event.need_eletricity}"
		move_down 10
		text "Precisa de água? #{@event.need_water}"
		move_down 10
		text "Precisa de servico de limpeza? #{@event.need_clean_service}"
		move_down 10
		text "Outras informações: #{@event.other_informations}"
		move_down 10
		text "Uso comercial de imagem? #{@event.commercial_use_photos}"
		move_down 10
		text "Em caso de instituição:"
		move_down 20
		text "Nome: #{@event.name_institute}"
		move_down 10
		text "Endereço: #{@event.institute_address}"
		move_down 10
		text "CNPJ #{@event.institute_cnpj}"
	end
end