class SessionsController < ApplicationController
  before_action :block_access, except: [:destroy]
  def create  
    @user = User.find_by(email: params[:session][:email])
    if @user && @user.authenticate(params[:session][:password_digest])
      sign_in(@user)
    redirect_to @user
    else
      render 'new'
    end
  end
  def destroy 
    sign_out
    redirect_to root_url
  end
end