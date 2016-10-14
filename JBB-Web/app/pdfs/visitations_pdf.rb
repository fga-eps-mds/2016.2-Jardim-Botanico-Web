class VisitationsPdf < Prawn::Document
	def initialize(visitation)
		super(top_margin: 70)
		text "Relatório de Visita", :align => :center, :size => 18
		@visitation = visitation
		move_down 30
		text "Dia: #{@visitation.date}"
		move_down 10
		text "Hora: #{@visitation.time}"
		move_down 10
		text "Status: #{@visitation.status}"
		move_down 10
		text "Quantidade de visitantes: #{@visitation.visitants_amount}"
		move_down 10
		text "Quantidade de visitantes pagantes: #{@visitation.visitants_paying}"
		move_down 10
		text "Preco da visita: #{@visitation.visitation_cost}"
		move_down 10
		text "Descrição: #{@visitation.description}"
	end
end