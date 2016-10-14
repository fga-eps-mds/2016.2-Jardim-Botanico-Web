require_relative 'boot'

require 'rails/all'


# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module JBBWeb
  class Application < Rails::Application

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    # configure path to /lib
    config.autoload_paths += %W(#{config.root}/lib)

    # configure time zone and first day of the week in calendar
    config.time_zone = 'Brasilia'
    config.beginning_of_week = :sunday

  end
end
