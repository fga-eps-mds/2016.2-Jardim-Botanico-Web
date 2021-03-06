class SessionsController < ApplicationController
  before_action :block_access, except: [:destroy]

  def new
    render 'new'
  end

  def create
    @user = User.find_by(email: params[:session][:email])

    if @user && @user.authenticate(params[:session][:password])
      session[:user_id] = @user.id
      sign_in(@user)
      params[:session][:remember_me] == '1' ? remember_me(@user) : forget(@user)
      redirect_to "/#{I18n.locale}/"
    else
      flash[:warning] = t(:invalid_email_or_password)
      render 'new'
    end
  end

  def destroy
    sign_out if logged_in?
    flash[:success] = t(:sucessful_logout)
    redirect_to "/#{I18n.locale}/"
  end
end
