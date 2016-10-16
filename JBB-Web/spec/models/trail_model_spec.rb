# require 'rails_helper'
#
# RSpec.describe Trail, :type => :model do
#
#   before do
#     @trail = FactoryGirl.create(:trail)
#   end
#
#   it { expect(@trail).to respond_to(:name, :length, :locomotion, :description) }
#
#   it { expect(@trail).to be_valid }
#
#
#   describe "attribute" do
#
#     subject {FactoryGirl.attributes_for(:trail) }
#
#     describe "name" do
#       it "must be given" do
#         subject["name"] = ""
#         expect(Trail.new(subject)).not_to be_valid
#         subject["name"] = "A"
#         expect(Trail.new(subject)).not_to be_valid
#       end
#     end
#
#     describe "description" do
#       it "must be given" do
#         subject["description"] = ""
#         expect(Trail.new(subject)).not_to be_valid
#         subject["description"] = "A"
#         expect(Trail.new(subject)).not_to be_valid
#         subject["description"] = "66406404764113331553
#                                   32159016066543161378
#                                   30030389566289064044
#                                   74703645527509432227
#                                   67810272783142154977
#                                   01868449675597366151
#                                   81551067943534037425
#                                   72413775400607149586
#                                   25559395610133714920
#                                   81044681404485571752
#                                   80062234800292915425
#                                   79244100713331152084
#                                   07633070688099710957
#                                   96375943499246973362
#                                   22263017942140517121
#                                   05034918225278102156
#                                   60773617043231641545
#                                   65299191285312412150
#                                   91983820196109052254
#                                   02115114447397831736"
#         expect(Trail.new(subject)).not_to be_valid
#       end
#     end
#
#   end
# end
