class StatisticReport < ApplicationRecord
  belongs_to :club, required: true
  belongs_to :user, required: true

  validates :style, presence: true
  validates :item_report, presence: true
  validates :detail_report, presence: true
  validates :plan_next_month, presence: true
  validates :time, presence: true
  validates :time, uniqueness: {scope: :club_id}

  enum style_statistic: {monthly: 1, quarterly: 2}
  enum month: {january: 1, febuary: 2, march: 3, april: 4,
    may: 5, june: 6, july: 7, august: 8, september: 9,
    october: 10, november: 11, december: 12}
  enum quarter: {quarter_1: 1, quarter_2: 2, quarter_3: 3, quarter_4: 4}
  enum status: {approved: 1, pending: 2, rejected: 3}

  delegate :full_name, :avatar, to: :user, prefix: :user, allow_nil: :true
  delegate :name, :logo, to: :club, prefix: :club, allow_nil: :true

  scope :search_club, ->club_ids{where "club_id IN (?)", club_ids}
  scope :order_by_created_at, ->{order created_at: :desc}
end