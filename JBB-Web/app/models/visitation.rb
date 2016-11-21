class Visitation < ApplicationRecord
  belongs_to :user

  def start_time
    self.date
  end

  # validation of period
	validates :period, presence: true

	# validation of date
	validates :date, presence: true

  validate :not_mondays

  def not_mondays
    if (self.date.wday == 1)
      errors.add(:date, I18n.t(:not_mondays))
    end
  end

  #validation of visitants_paying
  validates :visitants_paying, presence: true
  # validation of description
  validates :description, presence: true, length: { minimum: 5, maximum: 300 }
  #validation of visitants_amount
  validates :visitants_amount, presence: true
  validate :validate_visitants_amount


  #status
  def set_status_default
    self.status = "Aguardando confirmacao"
  end

  def self.initial_cost
    return 0
  end

  def amount_payed
    if (self.status <=> "Agendado") == 0
      return self.visitation_cost
    else
      return 0
    end
  end

  # validate the amount of visitors informed by the user
  def validate_visitants_amount
    if (self.visitants_amount > 45)
      errors.add(:visitants_amount, I18n.t(:too_much_visitors))
    elsif (self.visitants_amount < 1)
      errors.add(:visitants_amount, I18n.t(:zero_visitors))
    elsif (self.visitants_amount < self.visitants_paying)
      errors.add(:visitants_amount, I18n.t(:more_paying_than_visitors))
    end
  end


  # calculate the visitation cost
  def set_visitation_cost
    if (self.visitation_type <=> "Escola publica") == 0
      self.visitation_cost = 0
    else
      self.visitation_cost = (self.visitants_paying * 5)
    end
  end

  #status
  def set_status_default
    self.status = "Aguardando confirmacao"
  end


  #status
  def set_status_default
    self.status = "Aguardando confirmacao"
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
