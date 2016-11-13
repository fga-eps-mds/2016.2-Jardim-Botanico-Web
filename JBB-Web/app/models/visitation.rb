class Visitation < ApplicationRecord
  belongs_to :user


  def start_time
    self.date
  end

	# validation of date
	validates :date, presence: true

  # validation of time
  validates :time, presence: true

  #validation of visitants_paying
  validates :visitants_paying, presence: true

  # validation of description
  validates :description, presence: true, length: { minimum: 5, maximum: 300 }

  #validation of visitants_amout
  validates :visitants_amount, presence: true

  def validate_visitants_amount
    if (self.visitants_amount > 100)
      errors.add(:visitants_amount, I18n.t(:too_much_visitors))
    elsif (self.visitants_amount < 1)
      errors.add(:visitants_amount, I18n.t(:zero_visitors))
    end
  end

  #status
  def set_status_default
    self.status = "Aguardando confirmacao"
  end

  def self.total
    self.sum(:visitation_cost)
  end

  def set_visitation_cost
    if (self.visitation_type <=> "Escola publica")
      self.visitation_cost = 0
    else
      self.visitation_cost = (self.visitants_paying * 5)
    end
  end

  def canceled_by_employee
    self.status = "Cancelado por funcionario"
  end

  def canceled_by_user
    self.status = "Cancelado pelo usuario"
  end

  def refused_by_employee
    self.status = "Recusado por funcionario"
  end

  def accepted_by_employee
    self.status = "Agendado"
  end

end
