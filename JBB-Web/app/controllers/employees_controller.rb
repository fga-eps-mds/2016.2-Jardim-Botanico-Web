class EmployeesController < ApplicationController
  def new
  	@employee = Employee.new
  end

  def index
  	@employees = Employee.all
  end

  def create
    @employee = CadastroMenor.new(employee_params)

    respond_to do |format|
      if @employee.save
        format.html { redirect_to @employee, notice: 'Cadastro foi criado com sucesso.' }
        format.json { render :show, status: :created, location: @employee }
      else
        format.html { render :new }
        format.json { render json: @employee.errors, status: :unprocessable_entity }
      end
    end
  end

  def 
end
