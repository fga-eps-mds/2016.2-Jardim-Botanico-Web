class VisitationsPdf < Prawn::Document
	def initialize(period)
		super(top_margin: 70)
		# @visitations = Visitation.all
		#set the date range for the pdf
		if period == "next_week"
			@visitations = Visitation.where(date: 1.week.from_now.beginning_of_week..1.week.from_now.end_of_week)
			
		else period == "last_month"
			@visitations = Visitation.where(date: 1.month.ago.beginning_of_month..1.month.ago.end_of_month)
		end
		header		
		move_down 50
		list_visits
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
			text "Relatório de Visitas", :align => :center, :size => 18
			transparent(0.0) { stroke_bounds }
		end
		bounding_box([450, y_position], :width => 90, :height => 100) do
			image "app/assets/images/pdf/logo_JBB.jpg", :position => :right,  :width => 90, :height => 100
			transparent(0) { stroke_bounds }
		end
	end

	def list_visits
		@visitations.map do |visitation|
			text "Dia: #{I18n.l(visitation.date, format: :long)}"
			move_down 2
			text "Periodo: #{visitation.period.to_s}"
			move_down 2
			text "Status: #{visitation.status.to_s}"
			move_down 2
			text "Total de visitantes: #{visitation.visitants_amount.to_s}"
			move_down 2
			text "Visitantes pagantes: #{visitation.visitants_paying.to_s}"
			move_down 2
			text "Preço da visita: #{visitation.visitation_cost.to_s}"
			move_down 2
			text "Descrição: #{visitation.description.to_s}"
			move_down 2
			stroke_horizontal_rule
			move_down 20
		end
	end
end