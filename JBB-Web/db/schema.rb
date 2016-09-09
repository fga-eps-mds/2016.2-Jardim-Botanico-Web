# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.


ActiveRecord::Schema.define(version: 20160913184454) do

  create_table "employees", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=latin1" do |t|
    t.string   "cpf"
    t.string   "employee_name"
    t.string   "email"
    t.string   "birth"
    t.string   "phone"
    t.string   "gender"
    t.string   "password_sieger"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  create_table "events", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=latin1" do |t|
    t.string   "date_time"
    t.string   "name"
    t.string   "description"
    t.integer  "peaple_amount"
    t.integer  "cpf"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.string   "status"
  end

  create_table "jbb_spaces", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=latin1" do |t|
    t.string   "space_name"
    t.string   "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "trails", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=latin1" do |t|
    t.string   "name"
    t.float    "length",      limit: 24
    t.string   "locomotion"
    t.string   "description"
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

  create_table "users", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "email",           default: "", null: false
    t.datetime "created_at",                   null: false
    t.datetime "updated_at",                   null: false
    t.string   "name"
    t.string   "cpf"
    t.date     "birth"
    t.string   "phone"
    t.string   "gender"
    t.string   "password_digest"
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
  end

  create_table "visitations", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=latin1" do |t|
    t.string   "date"
    t.string   "cpf"
    t.string   "time"
    t.integer  "visitants_amount"
    t.string   "description"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
    t.string   "status"
  end

end
