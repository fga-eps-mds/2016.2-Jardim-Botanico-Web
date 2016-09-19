require 'rails_helper'

RSpec.describe EventsController, :type => :controller do

  describe "GET new" do
    it "assigns a new Event as @event" do
      get :new, params: { id: 1 }
      expect{
        (assigns(:event)).to be_a_new(Event)
      }
    end
  end
end
