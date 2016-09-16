require 'rails_helper'

RSpec.describe VisitationsController, :type => :controller do

  describe "GET new" do
    it "assigns a new Visitation as @visitation" do
      get :new, params: { id: 1 }
      expect{
        (assigns(:visitation)).to be_a_new(Visitation)
      }
    end
  end

  describe"Create visitation"
    it 'should create a new visitation' do
      post :create, params: {
        visitation: {date: '2016-09-16', time: '2016-09-16 15:00:00',
        status: 'Aguardando confirmacao', visitants_amount: '4',
        description: 'Visita familiar'}
      }
      expect(Visitation.count).to be 1
    end
  end
