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

ActiveRecord::Schema.define(version: 20160917142511) do

  create_table "events", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer  "user_id"
    t.string   "status"
    t.date     "date"
    t.time     "time"
    t.string   "name"
    t.string   "description"
    t.integer  "people_amount"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.index ["status"], name: "index_events_on_status", using: :btree
    t.index ["user_id"], name: "index_events_on_user_id", using: :btree
  end

  create_table "phones", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer  "user_id"
    t.string   "phone"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_phones_on_user_id", using: :btree
  end

  create_table "users", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "email",           default: "", null: false
    t.datetime "created_at",                   null: false
    t.datetime "updated_at",                   null: false
    t.string   "name"
    t.string   "cpf"
    t.boolean  "is_employee"
    t.string   "gender"
    t.date     "birth"
    t.string   "password_digest"
    t.index ["cpf"], name: "index_users_on_cpf", using: :btree
    t.index ["name"], name: "index_users_on_name", using: :btree
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
  end

  create_table "visitations", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer  "user_id"
    t.string   "status"
    t.date     "date"
    t.time     "time"
    t.string   "cpf"
    t.string   "time"
    t.integer  "visitants_amount"
    t.string   "description"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
    t.index ["status"], name: "index_visitations_on_status", using: :btree
    t.index ["user_id"], name: "index_visitations_on_user_id", using: :btree
  end

end
