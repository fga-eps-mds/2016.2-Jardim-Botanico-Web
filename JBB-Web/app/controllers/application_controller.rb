class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  include SessionsHelper

  before_action :set_locale

  def select_pdf(pdf_option)
    respond_to do |format|
      format.html
      format.pdf do
        pdf = pdf_option
        send_data pdf.render, filename: 'formularios.pdf', type: "application/pdf",
        disposition: "inline"
      end
    end
  end


  private
  def current_visitation
  	@current_visitation ||= Visitation.find(session[:visitation_id])
  	if session[:visitation_id]
  	end
  end


  def current_event
  	@current_event ||= Event.find(session[:event_id])
  	if session[:event_id]
  	end
  end


  # Before every request, we set the locale, from the specified or detected settings, or from the cookie
  def set_locale
    if language_change_necessary
      I18n.locale = the_new_locale
      set_locale_cookie(I18n.locale)
    else
      use_locale_from_cookie
    end
    @language = I18n.locale
  end


  # A locale change is necessary if no locale cookie is found, or if the locale param has been specified
  def language_change_necessary
    return cookies[:JBB_Web_locale].nil? || params[:locale]
  end


  # set the new locale
  def the_new_locale
    new_locale = params[:locale] || I18n.default_locale
  end


  # Sets the locale cookie
  def set_locale_cookie(locale)
    cookies[:JBB_Web_locale] = {
      value: locale.to_s,
      expires: 7.days.from_now,
      domain: :all
    }
  end


  # Reads the locale cookie and sets the locale from it
  def use_locale_from_cookie
    I18n.locale = cookies[:JBB_Web_locale]
  end
end
