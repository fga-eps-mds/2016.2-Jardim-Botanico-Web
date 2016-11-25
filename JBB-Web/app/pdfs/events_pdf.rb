class EventsPdf < Prawn::Document
	def initialize(period)

		super(top_margin: 70)
    #set the date range for the pdf
    if period == "next_week"
      @events = Event.where(date_start: 1.week.from_now.beginning_of_week..1.week.from_now.end_of_week)
    else period == "last_month"
      @events = Event.where(date_start: 1.month.ago.beginning_of_month..1.month.ago.end_of_month)
    end

		header
		move_down 50
		list_events
	end

	def header
		y_position = 720
		bounding_box([0, y_position], :width => 90, :height => 100) do
		 image "app/assets/images/pdf/logo_brasilia.jpg", :position => :left,  :width => 80, :height => 100
		 transparent(0.0) { stroke_bounds }
		end
		bounding_box([90, y_position], :width => 360, :height => 120) do
			move_down 30
			text "Jardim Botânico de Brasília", :align => :center, :size => 18
			move_down 10
			text "Relatório de Eventos", :align => :center, :size => 18
		 transparent(0.0) { stroke_bounds }
		end
		bounding_box([450, y_position], :width => 90, :height => 100) do
		 image "app/assets/images/pdf/logo_JBB.jpg", :position => :right,  :width => 90, :height => 100
		 transparent(0) { stroke_bounds }
		end
	end

	def list_events
		@events.map do |event|
			text "Data e hora do início", :style => :bold
			move_down 1
			text "Dia: #{I18n.l(event.date_start, format: :long)}"
			text "Hora #{I18n.l(event.time_start, format: :time_only)}"
			move_down 2
			text "Data e hora do fim", :style => :bold
			move_down 1
			text "Dia: #{I18n.l(event.date_end, format: :long)}"
			text "Hora #{I18n.l(event.time_end, format: :time_only)}"
			move_down 2
			text "Status: #{event.status}"
			move_down 1
			text "Espaco solicitado: #{event.jbb_space_requested}"
			move_down 1
			text "Publico estimado: #{event.estimated_public}"
			move_down 1
			text "Descrição: #{event.description}"
			move_down 1
			text "Precisa de energia elétrica? #{event.need_eletricity}"
			move_down 1
			text "Precisa de água? #{event.need_water}"
			move_down 1
			text "Outras informações: #{event.other_informations}"
			move_down 1
			text "Em caso de instituição:"
			move_down 2
			text "Nome: #{event.name_institute}"
			text "Endereço: #{event.institute_address}"
			text "CNPJ: #{event.institute_cnpj}"
			move_down 2
			stroke_horizontal_rule
			move_down 20
		end
	end
end
