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

ActiveRecord::Schema.define(version: 20161005111835) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "events", force: :cascade do |t|
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

  create_table "phones", force: :cascade do |t|
    t.integer  "user_id"
    t.string   "phone"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_phones_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "email"
    t.string   "name"
    t.string   "cpf"
    t.boolean  "is_employee"
    t.string   "gender"
    t.date     "birth"
    t.string   "password_digest"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "user_type"
    t.string   "remember_digest"
    t.index ["cpf"], name: "index_users_on_cpf", using: :btree
    t.index ["email"], name: "index_users_on_email", using: :btree
    t.index ["name"], name: "index_users_on_name", using: :btree
  end

  create_table "visitations", force: :cascade do |t|
    t.integer  "user_id"
    t.string   "status"
    t.date     "date"
    t.time     "time"
    t.integer  "visitants_amount"
    t.string   "description"
    t.datetime "created_at",                    null: false
    t.datetime "updated_at",                    null: false
    t.string   "visitation_type"
    t.string   "add_groups_age_to_visitations"
    t.integer  "groups_age"
    t.string   "add_objective_to_visitations"
    t.string   "objective"
    t.string   "add_spaces_to_visitations"
    t.string   "spaces"
    t.string   "add_has_guide_to_visitations"
    t.boolean  "has_guide"
    t.index ["status"], name: "index_visitations_on_status", using: :btree
    t.index ["user_id"], name: "index_visitations_on_user_id", using: :btree
  end

end
